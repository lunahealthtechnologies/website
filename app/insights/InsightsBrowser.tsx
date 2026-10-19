"use client";

import Link from "next/link";
import { useState } from "react";
import { articleHref, type Article } from "@/lib/site";
import s from "./cards.module.css";

const ALL = "All";

export default function InsightsBrowser({ articles }: { articles: Article[] }) {
  const [cat, setCat] = useState(ALL);
  const [q, setQ] = useState("");

  const cats = [ALL, ...Array.from(new Set(articles.map((a) => a.category)))];
  const needle = q.trim().toLowerCase();
  const list = articles.filter(
    (a) =>
      (cat === ALL || a.category === cat) &&
      (!needle || `${a.title} ${a.dek} ${a.tags.join(" ")} ${a.body.join(" ")}`.toLowerCase().includes(needle)),
  );

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,40px) clamp(64px,8vw,104px)" }}>
      <div style={{ padding: "20px 0", borderTop: "1px solid #D5EBE6", borderBottom: "1px solid #D5EBE6", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <div role="group" aria-label="Filter by topic" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {cats.map((c) => (
            <button key={c} type="button" aria-pressed={c === cat} onClick={() => setCat(c)} className={c === cat ? `${s.chip} ${s.chipOn}` : s.chip}>
              {c}
            </button>
          ))}
        </div>
        <div style={{ flex: "0 1 300px", minWidth: 220 }}>
          <label htmlFor="search" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Search insights</label>
          <input
            id="search"
            type="search"
            placeholder="Search insights"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ width: "100%", minHeight: 44, padding: "0 16px", borderRadius: 999, border: "1.5px solid #D5EBE6", background: "#FFFFFF", font: "16px var(--fb)", color: "#0E1A1F" }}
          />
        </div>
      </div>
      <p aria-live="polite" style={{ margin: "16px 0 0", fontSize: 15, color: "#3B4A50" }}>
        {list.length} article{list.length === 1 ? "" : "s"}
      </p>

      {list.length === 0 && (
        <div style={{ marginTop: 24, padding: 48, textAlign: "center", border: "1.5px dashed #D5EBE6", borderRadius: 20 }}>
          <p style={{ margin: 0, font: "700 18px/1.3 var(--fh)" }}>No articles match your search</p>
          <p style={{ margin: "8px 0 0", color: "#3B4A50" }}>
            Try a different word or{" "}
            <button
              type="button"
              onClick={() => { setCat(ALL); setQ(""); }}
              style={{ background: "none", border: 0, padding: 0, color: "#0A6B62", font: "inherit", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}
            >
              clear filters
            </button>
            .
          </p>
        </div>
      )}

      <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,340px),1fr))", gap: 24 }}>
        {list.map((a) => (
          <li key={a.id} style={{ display: "flex" }}>
            <Link href={articleHref(a.id)} className={`glass-soft ${s.card}`} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, padding: 28, borderRadius: 16 }}>
              <span style={{ font: "700 12px/1.3 var(--fh)", letterSpacing: ".08em", textTransform: "uppercase", color: "#0A6B62" }}>{a.category}</span>
              <h2 style={{ margin: 0, font: "700 21px/1.3 var(--fh)", color: "#0E1A1F" }}>{a.title}</h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#3B4A50" }}>{a.dek}</p>
              <p style={{ margin: "auto 0 0", paddingTop: 12, fontSize: 14, color: "#3B4A50" }}>Sample · {a.read} read</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
