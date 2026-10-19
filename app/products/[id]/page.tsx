import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, contactHref, pad2 } from "@/lib/site";
import { CtaLink, Faq, ViewTracker } from "./ProductClient";

type Params = { id: string };

const heading = "var(--fh)";
const glass = {
  border: "1px solid rgba(255,255,255,0.85)",
  backdropFilter: "blur(20px) saturate(1.4)",
  WebkitBackdropFilter: "blur(20px) saturate(1.4)",
  boxShadow: "0 10px 40px rgba(7,62,56,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
} as const;
const sectionPad = "clamp(48px,6vw,80px) 0";
const h2Style = { margin: 0, font: `700 clamp(24px,2.6vw,32px)/1.15 ${heading}`, color: "#073E38" } as const;
const h2Small = { margin: 0, font: `700 22px/1.25 ${heading}`, color: "#073E38" } as const;
const bodyText = { margin: "12px 0 0", fontSize: 17, lineHeight: 1.55, color: "#3B4A50" } as const;

export function generateStaticParams(): Params[] {
  return SITE.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const p = SITE.products.find((x) => x.id === id);
  return p ? { title: p.name } : {};
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const p = SITE.products.find((x) => x.id === id);
  if (!p) notFound();

  const st = SITE.statuses[p.status] ?? SITE.statuses.focus;
  const ctaHref = contactHref(p.cta.type, p.id);
  const waitlist = p.cta.type === "waitlist";

  return (
    <>
      <ViewTracker product={p.id} />
      <section
        aria-labelledby="h1"
        style={{
          position: "relative", overflow: "hidden", margin: "clamp(12px,2vw,24px)", borderRadius: 32, background: "rgba(7,62,56,0.9)",
          backdropFilter: "blur(24px) saturate(1.3)", WebkitBackdropFilter: "blur(24px) saturate(1.3)", border: "1px solid rgba(127,232,220,0.25)",
          boxShadow: "inset 0 1px 0 rgba(127,232,220,0.25), 0 24px 60px rgba(7,62,56,0.25)", color: "#FFFFFF",
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", width: 560, height: 560, right: -180, top: -220, borderRadius: "50%", background: "radial-gradient(circle at 40% 40%, #0FA89A, rgba(15,168,154,0) 70%)", opacity: 0.45 }}
        />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "32px clamp(20px,4vw,40px) clamp(56px,7vw,88px)" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 8, fontSize: 15, color: "#D5EBE6" }}>
              <li><Link href="/products" style={{ color: "#7FE8DC" }}>Products</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{p.name}</li>
            </ol>
          </nav>
          <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <span style={{ padding: "7px 14px", borderRadius: 999, background: "#7FE8DC", color: "#073E38", font: `700 12px/1 ${heading}` }}>
              {p.future ? "Future ambition" : st.label}
            </span>
            <span style={{ fontSize: 15, color: "#D5EBE6" }}>{p.group}</span>
          </div>
          <h1
            id="h1"
            style={{ margin: "20px 0 0", maxWidth: 860, font: `700 clamp(34px,4.4vw,56px)/1.06 ${heading}`, letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            {p.name}
          </h1>
          <p style={{ margin: "20px 0 0", maxWidth: 640, fontSize: "clamp(18px,1.6vw,21px)", lineHeight: 1.55, color: "#E9F5F2" }}>{p.value}</p>
          <p style={{ margin: "16px 0 0", maxWidth: 640, fontSize: 16, color: "#D5EBE6" }}>
            <b style={{ color: "#FFFFFF" }}>Built for</b> {p.audience}
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <CtaLink href={ctaHref} className="btn btn-white" product={p.id} waitlist={waitlist}>{p.cta.label}</CtaLink>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <section aria-labelledby="prob-h" style={{ padding: sectionPad, display: "flex", flexWrap: "wrap", gap: "24px 64px", borderBottom: "1px solid #D5EBE6" }}>
          <h2 id="prob-h" style={{ ...h2Style, flex: "1 1 260px" }}>The problem</h2>
          <div style={{ flex: "2 1 440px", minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "clamp(19px,1.8vw,23px)", lineHeight: 1.5, color: "#0E1A1F", textWrap: "pretty" }}>{p.problem}</p>
            <p style={{ margin: "20px 0 0", fontSize: 18, lineHeight: 1.55, color: "#3B4A50" }}>
              <b style={{ color: "#0A6B62" }}>What we aim to change:</b> {p.benefit}
            </p>
          </div>
        </section>

        <section aria-labelledby="cap-h" style={{ padding: sectionPad, borderBottom: "1px solid #D5EBE6" }}>
          <h2 id="cap-h" style={h2Style}>Key capabilities</h2>
          <p style={{ margin: "12px 0 0", fontSize: 16, color: "#3B4A50" }}>Planned scope for this area. Final features will be confirmed per product.</p>
          <ul
            style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}
          >
            {p.capabilities.map((t, i) => (
              <li
                key={t}
                style={{ ...glass, display: "flex", gap: 14, alignItems: "flex-start", padding: 20, background: "rgba(255,255,255,0.55)", borderRadius: 14 }}
              >
                <span
                  aria-hidden="true"
                  style={{ flex: "0 0 28px", height: 28, borderRadius: "50%", background: "#E9F5F2", color: "#0A6B62", display: "flex", alignItems: "center", justifyContent: "center", font: `700 12px/1 ${heading}` }}
                >
                  {pad2(i)}
                </span>
                <span style={{ fontSize: 17, lineHeight: 1.4, fontWeight: 600 }}>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="ui-h" style={{ padding: sectionPad, borderBottom: "1px solid #D5EBE6", display: "flex", flexWrap: "wrap", gap: "32px 64px" }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <h2 id="ui-h" style={h2Style}>How it works</h2>
            <ol style={{ margin: "28px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
              {p.workflow.map((t, i) => (
                <li key={t} style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid #D5EBE6" }}>
                  <span style={{ font: `700 14px/1.6 ${heading}`, color: "#0A6B62" }}>{pad2(i)}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.5 }}>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div
            style={{ ...glass, flex: "1.3 1 420px", minWidth: 0, borderRadius: 20, background: "rgba(233,245,242,0.55)", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div
              style={{ flex: 1, minHeight: 300, borderRadius: 14, background: "#FFFFFF", border: "1.5px dashed #0FA89A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 32, gap: 10 }}
            >
              <img src={SITE.brand.mark} alt="" width={48} height={48} style={{ width: 48, height: 48, opacity: 0.9 }} />
              <p style={{ margin: 0, font: `700 17px/1.3 ${heading}`, color: "#073E38" }}>Product screenshots</p>
              <p style={{ margin: 0, maxWidth: 340, fontSize: 15, lineHeight: 1.5, color: "#3B4A50" }}>
                Real interface screens and demonstrations will appear here once this product is ready to show.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="trust-h"
          style={{ padding: sectionPad, borderBottom: "1px solid #D5EBE6", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 32 }}
        >
          <div>
            <h2 id="trust-h" style={h2Small}>Integration</h2>
            <p style={bodyText}>{p.integration}</p>
          </div>
          <div>
            <h2 style={h2Small}>Privacy and responsible use</h2>
            <p style={bodyText}>
              We design to collect only the data a service needs, restrict access by role and explain data use in plain language. Security measures and regulatory requirements will be documented for each product before launch.
            </p>
          </div>
          <div>
            <h2 style={h2Small}>Evidence and outcomes</h2>
            <div style={{ marginTop: 12, padding: 16, borderRadius: 12, border: "1.5px dashed #D5EBE6", fontSize: 16, lineHeight: 1.55, color: "#3B4A50" }}>
              No results to report yet. Case studies and measured outcomes will be published here when available.
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-h" style={{ padding: sectionPad, display: "flex", flexWrap: "wrap", gap: "24px 64px" }}>
          <h2 id="faq-h" style={{ ...h2Style, flex: "1 1 260px" }}>Questions</h2>
          <div style={{ flex: "2 1 440px", minWidth: 0, borderTop: "1px solid #D5EBE6" }}>
            <Faq items={p.faq} />
          </div>
        </section>

        <section
          style={{
            ...glass, marginBottom: "clamp(56px,7vw,96px)", borderRadius: 24, background: "rgba(233,245,242,0.55)", padding: "clamp(28px,5vw,56px)",
            display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "center", justifyContent: "space-between",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ margin: 0, font: `700 clamp(24px,2.8vw,34px)/1.15 ${heading}`, color: "#073E38" }}>Interested in {p.name}?</h2>
            <p style={{ margin: "12px 0 0", fontSize: 18, lineHeight: 1.55, color: "#3B4A50" }}>
              Tell us what you need. We&apos;ll keep you updated and involve you where we can.
            </p>
          </div>
          <CtaLink href={ctaHref} className="btn btn-primary" product={p.id} waitlist={waitlist}>{p.cta.label}</CtaLink>
        </section>
      </div>
    </>
  );
}
