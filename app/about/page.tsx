import type { Metadata } from "next";
import Link from "next/link";
import { contactHref, pad2 } from "@/lib/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Our purpose, mission, vision and values: bridging the gap between people and quality healthcare across Africa.",
};

const VALUES: [title: string, text: string][] = [
  ["Human-centred innovation", "We build solutions around the real needs of people and communities."],
  ["Clinical excellence", "Our products are grounded in medical evidence, safety and quality care."],
  ["Equity and accessibility", "We believe everyone deserves access to quality healthcare, regardless of location or income."],
  ["Trust and privacy", "We protect the confidentiality, security and dignity of every user."],
  ["Evidence-driven decisions", "We use research, data and continuous learning to guide our work."],
  ["Collaboration", "We create lasting impact by working with healthcare providers, governments, partners and communities."],
  ["Continuous learning", "We embrace curiosity, innovation and continuous improvement."],
];

const FOCUS = [
  "Improve access to quality healthcare.",
  "Strengthen health systems.",
  "Empower individuals to make informed health decisions.",
  "Support healthcare professionals with better digital tools.",
  "Generate data that drives better health outcomes and policy.",
];

const APPROACH: [title: string, text: string][] = [
  ["Our approach to innovation", "We treat innovation as solving a real problem well, not adding new technology for its own sake. We start with research in the settings where care happens, prototype with the people who will use the product, and release in small, testable steps."],
  ["Accessible and responsible technology", "We design for low-cost devices, intermittent connectivity and different levels of digital literacy. We aim for accessible interfaces, collect only the data a service needs and are open about how that data is used."],
  ["How we collaborate", "Healthcare providers, governments, researchers and communities understand problems we can't see from the outside. We look for partners who want to build and learn together over the long term."],
];

const sectionPad = "clamp(56px,7vw,96px) clamp(20px,4vw,40px)";

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="h1"
        style={{
          position: "relative", overflow: "hidden", margin: "clamp(12px,2vw,24px)", borderRadius: 32,
          background: "rgba(7,62,56,0.9)", backdropFilter: "blur(24px) saturate(1.3)", WebkitBackdropFilter: "blur(24px) saturate(1.3)",
          border: "1px solid rgba(127,232,220,0.25)",
          boxShadow: "inset 0 1px 0 rgba(127,232,220,0.25), 0 24px 60px rgba(7,62,56,0.25)", color: "#FFFFFF",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", width: "min(70vw,720px)", aspectRatio: "1", right: "-12%", top: "-30%", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #7FE8DC 0%, #0FA89A 40%, rgba(15,168,154,0) 70%)", opacity: 0.5 }} />
        <div aria-hidden="true" style={{ position: "absolute", width: "min(64vw,660px)", aspectRatio: "1", right: "-2%", top: "-36%", borderRadius: "50%", background: "rgba(7,62,56,0.45)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)" }}>
          <p style={{ margin: "0 0 20px", font: "600 16px/1 var(--fh)", color: "#7FE8DC" }}>Lighting the Way to Better Health</p>
          <h1 id="h1" style={{ margin: 0, maxWidth: 900, font: "700 clamp(36px,4.8vw,60px)/1.06 var(--fh)", letterSpacing: "-0.025em", textWrap: "balance" }}>
            We exist to bridge the gap between people and quality healthcare.
          </h1>
          <p style={{ margin: "28px 0 0", maxWidth: 640, fontSize: "clamp(18px,1.6vw,21px)", lineHeight: 1.6, color: "#E9F5F2", textWrap: "pretty" }}>
            We do this through innovative digital solutions that make healthcare more accessible, connected and equitable.
          </p>
        </div>
      </section>

      <section aria-label="Mission and vision" style={{ maxWidth: 1240, margin: "0 auto", padding: sectionPad, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 24 }}>
        <div className="glass-soft" style={{ padding: "clamp(28px,4vw,48px)", borderRadius: 20 }}>
          <h2 style={{ margin: 0, font: "700 13px/1 var(--fh)", letterSpacing: ".12em", textTransform: "uppercase", color: "#0A6B62" }}>Mission</h2>
          <p style={{ margin: "20px 0 0", font: "600 clamp(20px,2vw,25px)/1.4 var(--fh)", color: "#073E38", textWrap: "pretty" }}>
            To design and build innovative, evidence-based and human-centred digital solutions that improve access to quality maternal, child, sexual, reproductive and primary healthcare across Africa.
          </p>
        </div>
        <div className="glass-soft" style={{ padding: "clamp(28px,4vw,48px)", background: "rgba(233,245,242,0.55)", borderRadius: 20 }}>
          <h2 style={{ margin: 0, font: "700 13px/1 var(--fh)", letterSpacing: ".12em", textTransform: "uppercase", color: "#0A6B62" }}>Vision</h2>
          <p style={{ margin: "20px 0 0", font: "600 clamp(20px,2vw,25px)/1.4 var(--fh)", color: "#073E38", textWrap: "pretty" }}>
            To become Africa&apos;s leading health technology company, transforming healthcare access and outcomes through innovation.
          </p>
        </div>
      </section>

      <section aria-labelledby="values-h">
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: sectionPad }}>
          <h2 id="values-h" className="h2">Our values</h2>
          <ol style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "0 40px" }}>
            {VALUES.map(([title, text], i) => (
              <li key={title} style={{ padding: "24px 0", borderTop: "1px solid #D5EBE6" }}>
                <span style={{ font: "700 13px/1 var(--fh)", color: "#0A6B62" }}>{pad2(i)}</span>
                <h3 style={{ margin: "10px 0 0", font: "700 20px/1.3 var(--fh)" }}>{title}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 17, lineHeight: 1.55, color: "#3B4A50" }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="focus-h" style={{ maxWidth: 1240, margin: "0 auto", padding: sectionPad, display: "flex", flexWrap: "wrap", gap: "40px 72px" }}>
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <p className="eyebrow">Strategic focus</p>
          <h2 id="focus-h" className="h2-sm">We develop digital health solutions that:</h2>
        </div>
        <ul style={{ flex: "1.4 1 420px", minWidth: 0, margin: 0, padding: 0, listStyle: "none" }}>
          {FOCUS.map((t, i) => (
            <li
              key={t}
              style={{ padding: "20px 0", borderTop: "1px solid #D5EBE6", borderBottom: i === FOCUS.length - 1 ? "1px solid #D5EBE6" : undefined, font: "600 20px/1.4 var(--fh)", color: "#0E1A1F" }}
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="How we work">
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: sectionPad, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 40 }}>
          {APPROACH.map(([title, text]) => (
            <div key={title}>
              <h2 style={{ margin: 0, font: "700 22px/1.25 var(--fh)", color: "#073E38" }}>{title}</h2>
              <p style={{ margin: "14px 0 0", fontSize: 17, lineHeight: 1.6, color: "#3B4A50" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: sectionPad }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "center", justifyContent: "space-between", paddingTop: 40, borderTop: "2px solid #073E38" }}>
          <h2 style={{ margin: 0, maxWidth: 620, font: "700 clamp(26px,3vw,36px)/1.15 var(--fh)", letterSpacing: "-0.015em", color: "#073E38", textWrap: "balance" }}>
            Share our goals? Let&apos;s talk.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href={contactHref("partnership")} className={s.primary}>Explore a partnership</Link>
            <Link href="/products" className={s.outline}>See what we&apos;re building</Link>
          </div>
        </div>
      </section>
    </>
  );
}
