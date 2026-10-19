import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCS, DOC_IDS, type LegalDocId } from "../docs";
import s from "../page.module.css";

type Props = { params: Promise<{ doc: string }> };

const isDocId = (v: string): v is LegalDocId => v in DOCS;

export const dynamicParams = false;

export function generateStaticParams() {
  return DOC_IDS.map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params;
  if (!isDocId(doc)) return {};
  return {
    title: `${DOCS[doc].label} (draft)`,
    description: "Privacy notice, terms of use and accessibility statement (drafts pending legal review).",
    robots: { index: false },
  };
}

export default async function LegalDocPage({ params }: Props) {
  const { doc } = await params;
  if (!isDocId(doc)) notFound();
  const d = DOCS[doc];

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px) clamp(64px,8vw,104px)", display: "flex", flexWrap: "wrap", gap: "40px 64px", alignItems: "flex-start" }}>
      <nav aria-label="Legal pages" style={{ flex: "0 1 240px", minWidth: 200 }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
          {DOC_IDS.map((k) => (
            <li key={k}>
              <Link href={`/legal/${k}`} aria-current={k === doc ? "page" : undefined} className={s.link}>{DOCS[k].label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <article style={{ flex: "1 1 520px", minWidth: 0, maxWidth: 760 }}>
        <div role="note" style={{ padding: "16px 18px", borderRadius: 12, background: "#FFFFFF", border: "1.5px dashed #0A6B62", fontSize: 16, lineHeight: 1.5, color: "#073E38" }}>
          <b>Draft for legal and technical review.</b> This page is a structure with provisional wording. It is not a final policy and does not claim compliance with any law or standard.
        </div>
        <h1 style={{ margin: "32px 0 0", font: "700 clamp(32px,4vw,46px)/1.1 var(--fh)", letterSpacing: "-0.02em", color: "#073E38" }}>{d.label}</h1>
        <p style={{ margin: "12px 0 0", fontSize: 15, color: "#3B4A50" }}>Last updated: [date to be set on publication]</p>
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 32 }}>
          {d.sections.map((sec) => (
            <section key={sec.h}>
              <h2 style={{ margin: 0, font: "700 21px/1.3 var(--fh)", color: "#0E1A1F" }}>{sec.h}</h2>
              <p style={{ margin: "10px 0 0", fontSize: 18, lineHeight: 1.65, color: "#3B4A50" }}>{sec.p}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
