"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { SITE, track } from "@/lib/site";
import type { InquiryTypeId } from "@/lib/site";
import s from "./page.module.css";

type Phase = "form" | "loading" | "notConnected" | "success" | "error";
type Fields = { name: string; email: string; org: string; msg: string };
type FieldKey = keyof Fields;

const DESCS: Record<InquiryTypeId, string> = {
  facility: "Discuss your hospital, clinic or maternity facility’s needs.",
  product: "Ask about a product or request a demonstration when available.",
  waitlist: "Hear when a consumer app is ready to try.",
  custom: "Talk about a bespoke web or mobile healthcare system.",
  partnership: "Research, implementation, funding or technology collaboration.",
  general: "Anything else.",
};

const PATH_IDS: InquiryTypeId[] = ["facility", "product", "custom", "partnership", "general"];
const EMPTY: Fields = { name: "", email: "", org: "", msg: "" };

const isInquiryType = (t: string | null): t is InquiryTypeId => t !== null && t in DESCS;

const errorsOf = (f: Fields) => ({
  name: !f.name.trim(),
  email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()),
  msg: f.msg.trim().length < 10,
});

export default function ContactForm({ intro }: { intro: ReactNode }) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [type, setType] = useState<InquiryTypeId>("facility");
  const [product, setProduct] = useState<string | null>(null);
  const [tried, setTried] = useState(false);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>("form");
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const t = qs.get("type");
    if (isInquiryType(t)) setType(t);
    setProduct(qs.get("product") || null);
  }, []);

  const er = tried ? errorsOf(fields) : { name: false, email: false, msg: false };
  const count = [er.name, er.email, er.msg].filter(Boolean).length;
  const prod = product ? SITE.products.find((p) => p.id === product) : undefined;
  const loading = phase === "loading";

  const onField = (k: FieldKey) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!started) {
      setStarted(true);
      track("contact_form_start", { type });
    }
    setFields((f) => ({ ...f, [k]: e.target.value }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = errorsOf(fields);
    setTried(true);
    if (errs.name || errs.email || errs.msg) {
      setTimeout(() => summaryRef.current?.focus(), 30);
      const first = errs.name ? "f-name" : errs.email ? "f-email" : "f-msg";
      setTimeout(() => document.getElementById(first)?.focus(), 60);
      return;
    }
    setPhase("loading");
    const endpoint = SITE.forms.endpoint;
    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 700));
      setPhase("notConnected");
      return;
    }
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: fields.name, email: fields.email, organisation: fields.org, type, product, message: fields.msg }),
      });
      if (!res.ok) throw new Error("bad");
      track("contact_form_submit_success", { type });
      if (type === "waitlist") track("waitlist_signup", { product });
      if (type === "partnership") track("partnership_inquiry", {});
      if (type === "product") track("demo_inquiry", { product });
      setPhase("success");
    } catch {
      setPhase("error");
    }
  };

  const reset = () => {
    setPhase("form");
    setFields(EMPTY);
    setTried(false);
    setStarted(false);
  };

  const cls = (invalid: boolean, base: string) => `${s.control} ${base}${invalid ? ` ${s.invalid}` : ""}`;

  return (
    <>
      <div className={s.left}>
        {intro}
        <div role="radiogroup" aria-label="What is your inquiry about?" className={s.paths}>
          {SITE.inquiryTypes
            .filter((t) => PATH_IDS.includes(t.id))
            .map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={type === t.id}
                onClick={() => setType(t.id)}
                className={`${s.path}${type === t.id ? ` ${s.pathOn}` : ""}`}
              >
                <span className={s.pathLabel}>{t.label}</span>
                <span className={s.pathDesc}>{DESCS[t.id]}</span>
              </button>
            ))}
        </div>
      </div>

      <div className={`glass-soft ${s.card}`}>
        {(phase === "form" || phase === "loading" || phase === "error") && (
          <form noValidate onSubmit={submit} aria-labelledby="form-h" className={s.form}>
            <h2 id="form-h" className={s.formTitle}>Send us a message</h2>
            {count > 0 && (
              <div role="alert" tabIndex={-1} ref={summaryRef} className={s.alert}>
                <b>Please check the form.</b> {count === 1 ? "1 item" : `${count} items`} to fix below.
              </div>
            )}

            <div className={s.field}>
              <label htmlFor="f-name" className={s.label}>Your name</label>
              <input
                id="f-name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={onField("name")}
                aria-invalid={er.name}
                aria-describedby="e-name"
                className={cls(er.name, s.input)}
              />
              {er.name && <p id="e-name" className={s.err}>Please enter your name.</p>}
            </div>

            <div className={s.field}>
              <label htmlFor="f-email" className={s.label}>Email address</label>
              <p id="h-email" className={s.hint}>A work email if you&apos;re contacting us for an organisation.</p>
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={fields.email}
                onChange={onField("email")}
                aria-invalid={er.email}
                aria-describedby="h-email e-email"
                className={cls(er.email, s.input)}
              />
              {er.email && <p id="e-email" className={s.err}>Please enter a valid email address, like name@example.org.</p>}
            </div>

            <div className={s.field}>
              <label htmlFor="f-org" className={s.label}>
                Organisation <span className={s.optional}>(optional)</span>
              </label>
              <input
                id="f-org"
                name="organisation"
                autoComplete="organization"
                value={fields.org}
                onChange={onField("org")}
                className={cls(false, s.input)}
              />
            </div>

            <div className={s.field}>
              <label htmlFor="f-type" className={s.label}>Inquiry type</label>
              <select
                id="f-type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value as InquiryTypeId)}
                className={cls(false, s.input)}
              >
                {SITE.inquiryTypes.map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </select>
              {prod && <p className={s.about}>About: <b>{prod.name}</b></p>}
            </div>

            <div className={s.field}>
              <label htmlFor="f-msg" className={s.label}>How can we help?</label>
              <p id="h-msg" className={s.hint}>Please don&apos;t include patient names, medical histories or other personal health details.</p>
              <textarea
                id="f-msg"
                name="message"
                rows={5}
                value={fields.msg}
                onChange={onField("msg")}
                aria-invalid={er.msg}
                aria-describedby="h-msg e-msg"
                className={cls(er.msg, s.textarea)}
              />
              {er.msg && <p id="e-msg" className={s.err}>Please write a short message (at least 10 characters).</p>}
            </div>

            <p className={s.privacy}>
              We use these details only to reply to your inquiry. See our <Link href="/legal/privacy">privacy notice</Link>.
            </p>

            {phase === "error" && (
              <div role="alert" className={s.alert}>Your message could not be sent. Please try again in a moment.</div>
            )}

            <button type="submit" disabled={loading} aria-busy={loading} className={s.submit}>
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        )}

        {phase === "success" && (
          <div role="status" className={s.result}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.brand.mark} alt="" width={56} height={56} className={s.mark} />
            <h2 className={s.resultTitle}>Thank you, your message has been sent.</h2>
            <p className={s.resultText}>We&apos;ll reply to {fields.email}.</p>
            <button type="button" onClick={reset} className={s.again}>Send another message</button>
          </div>
        )}

        {phase === "notConnected" && (
          <div role="status" className={s.result}>
            <span className={s.badge}>Preview mode</span>
            <h2 className={s.resultTitle}>Your message was not sent.</h2>
            <p className={s.resultText}>
              The form passed validation, but it isn&apos;t connected to a delivery service yet, so nothing has left this page. Once a form endpoint is configured, messages will be delivered to the team.
            </p>
            <button type="button" onClick={() => setPhase("form")} className={s.back}>Back to the form</button>
          </div>
        )}
      </div>
    </>
  );
}
