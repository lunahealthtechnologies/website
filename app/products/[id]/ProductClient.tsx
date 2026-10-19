"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { track } from "@/lib/site";

export function ViewTracker({ product }: { product: string }) {
  useEffect(() => {
    track("product_detail_view", { product });
  }, [product]);
  return null;
}

export function CtaLink({ href, className, product, waitlist, children }: { href: string; className: string; product: string; waitlist: boolean; children: ReactNode }) {
  return (
    <Link href={href} className={className} onClick={() => track(waitlist ? "waitlist_cta_click" : "cta_click", { product })}>
      {children}
    </Link>
  );
}

export function Faq({ items }: { items: [question: string, answer: string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} style={{ borderBottom: "1px solid #D5EBE6" }}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={`faq-b-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-p-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%", minHeight: 64, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0",
                  background: "none", border: 0, textAlign: "left", font: "600 18px/1.35 var(--fh)", color: "#0E1A1F", cursor: "pointer",
                }}
              >
                {q}
                <span
                  aria-hidden="true"
                  style={{ flex: "0 0 28px", height: 28, borderRadius: "50%", background: "#E9F5F2", color: "#0A6B62", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={`faq-p-${i}`}
                role="region"
                aria-labelledby={`faq-b-${i}`}
                style={{ padding: "0 44px 20px 0", fontSize: 17, lineHeight: 1.6, color: "#3B4A50" }}
              >
                {a}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
