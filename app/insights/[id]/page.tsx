import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, articleHref } from "@/lib/site";
import s from "../cards.module.css";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SITE.articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const a = SITE.articles.find((x) => x.id === id);
  if (!a) return {};
  return { title: a.title, description: a.dek, openGraph: { type: "article" } };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const a = SITE.articles.find((x) => x.id === id);
  if (!a) notFound();

  const others = SITE.articles.filter((x) => x.id !== a.id);
  const related = [...others.filter((x) => x.tags.some((t) => a.tags.includes(t))), ...others]
    .filter((x, i, arr) => arr.indexOf(x) === i)
    .slice(0, 3);

  return (
    <>
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "32px clamp(20px,4vw,40px) clamp(48px,6vw,80px)" }}>
        <nav aria-label="Breadcrumb">
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 8, fontSize: 15, color: "#3B4A50" }}>
            <li><Link href="/insights">Insights</Link></li>
            <li aria-hidden="true">/</li>
            <li>{a.category}</li>
          </ol>
        </nav>
        <div role="note" className="glass-soft" style={{ marginTop: 32, padding: "10px 16px", borderRadius: 10, background: "rgba(233,245,242,0.55)", fontSize: 15, color: "#073E38" }}>
          <b>Sample article.</b> Example content to demonstrate the reading layout.
        </div>
        <p style={{ margin: "32px 0 0", font: "700 13px/1.3 var(--fh)", letterSpacing: ".08em", textTransform: "uppercase", color: "#0A6B62" }}>{a.category}</p>
        <h1 style={{ margin: "14px 0 0", font: "700 clamp(32px,4vw,48px)/1.1 var(--fh)", letterSpacing: "-0.02em", color: "#073E38", textWrap: "balance" }}>{a.title}</h1>
        <p style={{ margin: "18px 0 0", fontSize: 21, lineHeight: 1.5, color: "#3B4A50" }}>{a.dek}</p>
        <p style={{ margin: "24px 0 0", paddingBottom: 28, borderBottom: "1px solid #D5EBE6", fontSize: 15, color: "#3B4A50" }}>{a.read} read</p>
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 22 }}>
          {a.body.map((t) => (
            <p key={t} style={{ margin: 0, fontSize: 19, lineHeight: 1.7, color: "#0E1A1F", textWrap: "pretty" }}>{t}</p>
          ))}
        </div>
        <ul style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {a.tags.map((g) => (
            <li key={g} className="glass-soft" style={{ padding: "6px 12px", borderRadius: 999, fontSize: 14, color: "#073E38" }}>{g}</li>
          ))}
        </ul>
      </article>
      <section aria-labelledby="rel-h">
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px)" }}>
          <h2 id="rel-h" style={{ margin: 0, font: "700 26px/1.2 var(--fh)", color: "#073E38" }}>Related</h2>
          <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 24 }}>
            {related.map((r) => (
              <li key={r.id} style={{ display: "flex" }}>
                <Link href={articleHref(r.id)} className={`glass-soft ${s.card}`} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, padding: 24, borderRadius: 16 }}>
                  <span style={{ font: "700 12px/1.3 var(--fh)", letterSpacing: ".08em", textTransform: "uppercase", color: "#0A6B62" }}>{r.category}</span>
                  <span style={{ font: "700 19px/1.3 var(--fh)", color: "#0E1A1F" }}>{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
