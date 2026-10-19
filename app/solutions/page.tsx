import type { Metadata } from "next";
import Link from "next/link";
import { SITE, contactHref, pad2 } from "@/lib/site";
import TrackedLink from "@/components/TrackedLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How we approach patient engagement, clinical workflows, facility operations, health records, health data, custom software and integration.",
  openGraph: { title: "Solutions" },
};

const heading = "var(--fh)";

export default function SolutionsPage() {
  return (
    <>
      <section aria-labelledby="h1" style={{ background: "transparent" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <p className="eyebrow">Solutions</p>
          <h1
            id="h1"
            style={{ margin: 0, maxWidth: 860, font: `700 clamp(36px,4.6vw,58px)/1.06 ${heading}`, letterSpacing: "-0.025em", color: "#073E38", textWrap: "balance" }}
          >
            Organised around the problems healthcare teams and patients face.
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: 640, fontSize: 19, lineHeight: 1.6, color: "#3B4A50", textWrap: "pretty" }}>
            Each area below describes who it is for, the challenge, how we approach it and the benefit we aim for. They describe our capabilities and focus areas; specific products and services are labelled with their status on the Products page.
          </p>
          <nav aria-label="On this page" style={{ marginTop: 36 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SITE.solutions.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={styles.chip}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(24px,4vw,48px) clamp(20px,4vw,40px) clamp(64px,8vw,104px)" }}>
        {SITE.solutions.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`h-${s.id}`}
            style={{ scrollMarginTop: 96, padding: "48px 0", borderBottom: "1px solid #D5EBE6", display: "flex", flexWrap: "wrap", gap: "24px 64px" }}
          >
            <div style={{ flex: "1 1 300px", minWidth: 0 }}>
              <p style={{ margin: "0 0 12px", font: `700 14px/1 ${heading}`, color: "#0A6B62" }}>{pad2(i)}</p>
              <h2
                id={`h-${s.id}`}
                style={{ margin: 0, font: `700 clamp(24px,2.6vw,32px)/1.15 ${heading}`, letterSpacing: "-0.015em", color: "#073E38", textWrap: "balance" }}
              >
                {s.title}
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: 15, color: "#3B4A50" }}>
                <b style={{ color: "#0E1A1F" }}>For:</b> {s.audience}
              </p>
            </div>
            <dl
              style={{ flex: "2 1 480px", minWidth: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "24px 32px" }}
            >
              <div>
                <dt style={{ font: `700 13px/1.3 ${heading}`, color: "#0A6B62" }}>The challenge</dt>
                <dd style={{ margin: "8px 0 0", fontSize: 17, lineHeight: 1.55, color: "#3B4A50" }}>{s.challenge}</dd>
              </div>
              <div>
                <dt style={{ font: `700 13px/1.3 ${heading}`, color: "#0A6B62" }}>Our approach</dt>
                <dd style={{ margin: "8px 0 0", fontSize: 17, lineHeight: 1.55, color: "#3B4A50" }}>{s.approach}</dd>
              </div>
              <div>
                <dt style={{ font: `700 13px/1.3 ${heading}`, color: "#0A6B62" }}>The aim</dt>
                <dd style={{ margin: "8px 0 0", fontSize: 17, lineHeight: 1.55, color: "#0E1A1F", fontWeight: 600 }}>{s.benefit}</dd>
              </div>
            </dl>
          </section>
        ))}

        <div
          style={{
            marginTop: 56, borderRadius: 28, background: "rgba(7,62,56,0.9)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(127,232,220,0.25)", boxShadow: "inset 0 1px 0 rgba(127,232,220,0.25), 0 24px 60px rgba(7,62,56,0.2)",
            color: "#FFFFFF", padding: "clamp(28px,5vw,56px)", display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ margin: 0, font: `700 clamp(26px,3vw,36px)/1.15 ${heading}`, letterSpacing: "-0.015em" }}>Not sure which area fits?</h2>
            <p style={{ margin: "14px 0 0", fontSize: 18, lineHeight: 1.55, color: "#D5EBE6" }}>
              Describe the problem in your own words. We&apos;ll help work out whether technology is the right answer and what it might look like.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <TrackedLink href={contactHref("facility")} className="btn btn-white" props={{ cta: "solutions_discuss" }}>
              Discuss a solution
            </TrackedLink>
            <Link
              href={contactHref("custom")}
              style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 22px", color: "#7FE8DC", font: `600 16px/1 ${heading}` }}
            >
              Custom project →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
