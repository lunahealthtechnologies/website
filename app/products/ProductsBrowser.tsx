"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, contactHref, productHref, track } from "@/lib/site";
import styles from "./page.module.css";

const heading = "var(--fh)";
const all = SITE.products.filter((p) => !p.future);
const groups = ["All", ...Array.from(new Set(all.map((p) => p.group)))];

export default function ProductsBrowser() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? all : all.filter((p) => p.group === filter);

  return (
    <>
      <div
        style={{ padding: "20px 0", borderTop: "1px solid #D5EBE6", borderBottom: "1px solid #D5EBE6", display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between" }}
      >
        <div role="group" aria-label="Filter by audience" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {groups.map((g) => (
            <button key={g} type="button" aria-pressed={g === filter} onClick={() => setFilter(g)} className={styles.filter}>
              {g}
            </button>
          ))}
        </div>
        <p aria-live="polite" style={{ margin: 0, fontSize: 15, color: "#3B4A50" }}>
          Showing {shown.length} of {all.length} product areas
        </p>
      </div>

      <details style={{ marginTop: 20, fontSize: 15, color: "#3B4A50" }}>
        <summary style={{ cursor: "pointer", fontWeight: 600, color: "#073E38", minHeight: 32 }}>How status labels work</summary>
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          {Object.entries(SITE.statuses).map(([id, k]) => (
            <span key={id} style={{ padding: "6px 12px", borderRadius: 999, background: k.bg, color: k.fg, border: "1px solid #D5EBE6", font: `700 12px/1 ${heading}` }}>
              {k.label}
            </span>
          ))}
        </div>
        <p style={{ margin: "12px 0 0", maxWidth: 720, lineHeight: 1.55 }}>
          &quot;Area of focus&quot; means we are researching or designing in this area but have not announced a specific product. Labels change only when a status is confirmed.
        </p>
      </details>

      {shown.length === 0 && (
        <div style={{ margin: "40px 0", padding: 48, textAlign: "center", border: "1.5px dashed #D5EBE6", borderRadius: 20 }}>
          <p style={{ margin: 0, font: `700 18px/1.3 ${heading}` }}>Nothing here yet</p>
          <p style={{ margin: "8px 0 0", color: "#3B4A50" }}>
            No products match this filter.{" "}
            <button
              type="button"
              onClick={() => setFilter("All")}
              style={{ background: "none", border: 0, padding: 0, color: "#0A6B62", font: "inherit", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}
            >
              Show all
            </button>
          </p>
        </div>
      )}

      <ul
        style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,360px),1fr))", gap: 24 }}
      >
        {shown.map((p) => {
          const st = SITE.statuses[p.status] ?? SITE.statuses.focus;
          return (
            <li key={p.id} style={{ display: "flex" }}>
              <article className={styles.card}>
                <div
                  style={{
                    padding: "28px 28px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        font: `700 12px/1 ${heading}`,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "#0A6B62",
                      }}
                    >
                      {p.group}
                    </span>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: st.bg,
                        color: st.fg,
                        font: `700 12px/1 ${heading}`,
                      }}
                    >
                      {st.label}
                    </span>
                  </div>
                  <h2
                    style={{
                      margin: "4px 0 0",
                      font: `700 22px/1.25 ${heading}`,
                      color: "#0E1A1F",
                    }}
                  >
                    {p.name}
                  </h2>
                  <p style={{ margin: 0, fontSize: 15, color: "#3B4A50" }}>
                    <b style={{ color: "#0E1A1F" }}>For</b> {p.audience}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "#3B4A50",
                    }}
                  >
                    {p.problem}
                  </p>
                </div>
                <ul
                  style={{
                    margin: "20px 28px 0",
                    padding: "16px 0 0",
                    borderTop: "1px solid #E9F5F2",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  {p.capabilities.slice(0, 4).map((c) => (
                    <li
                      key={c}
                      style={{
                        padding: "5px 10px",
                        borderRadius: 6,
                        background: "#E9F5F2",
                        fontSize: 14,
                        color: "#073E38",
                      }}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: "auto",
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px 20px",
                    alignItems: "center",
                  }}
                >
                  {/* <Link href={productHref(p.id)} className={styles.explore} onClick={() => track("product_card_click", { product: p.id })}>
                    Explore
                  </Link> */}
                  <Link
                    href={contactHref(p.cta.type, p.id)}
                    className={styles.explore}
                    // style={{ fontWeight: 700, fontSize: 15 }}
                  >
                    {p.cta.label}
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
