import type { Metadata } from "next";
import Link from "next/link";
import { contactHref, productHref } from "@/lib/site";
import ProductsBrowser from "./ProductsBrowser";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Our healthcare product ecosystem: consumer health apps, clinic management, health records, professional tools, telehealth, health data and custom software.",
  openGraph: { title: "Product ecosystem" },
};

const heading = "var(--fh)";

export default function ProductsPage() {
  return (
    <>
      <section aria-labelledby="h1" style={{ background: "transparent" }}>
        <div
          style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px) 40px", display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "flex-end" }}
        >
          <div style={{ flex: "1.4 1 480px", minWidth: 0 }}>
            <p className="eyebrow">Product ecosystem</p>
            <h1
              id="h1"
              style={{ margin: 0, font: `700 clamp(36px,4.6vw,58px)/1.06 ${heading}`, letterSpacing: "-0.025em", color: "#073E38", textWrap: "balance" }}
            >
              Connected tools for people, professionals and health systems.
            </h1>
          </div>
          <p style={{ flex: "1 1 320px", minWidth: 0, margin: 0, fontSize: 18, lineHeight: 1.6, color: "#3B4A50", textWrap: "pretty" }}>
            Software is our present priority. Each area is labelled with its status so you know what exists today and what is still being explored.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
        <ProductsBrowser />

        <section
          aria-labelledby="hw-h"
          style={{ margin: "48px 0 0", padding: "clamp(28px,4vw,48px)", borderRadius: 20, border: "1.5px dashed #D5EBE6", display: "flex", flexWrap: "wrap", gap: "16px 48px", alignItems: "center" }}
        >
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <p style={{ margin: "0 0 10px", font: `700 12px/1 ${heading}`, letterSpacing: ".08em", textTransform: "uppercase", color: "#3B4A50" }}>Future ambition</p>
            <h2 id="hw-h" style={{ margin: 0, font: `700 24px/1.25 ${heading}`, color: "#073E38" }}>Healthcare hardware and connected systems</h2>
            <p style={{ margin: "12px 0 0", fontSize: 17, lineHeight: 1.55, color: "#3B4A50" }}>
              Some problems need devices as well as software. Hardware is part of our long-term ambition; it is not a current product line.
            </p>
          </div>
          <Link href={productHref("hardware")} style={{ font: `600 16px/1 ${heading}` }}>Read about this ambition →</Link>
        </section>
      </div>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "center", justifyContent: "space-between", paddingTop: 40, borderTop: "2px solid #073E38" }}
        >
          <h2
            style={{ margin: 0, maxWidth: 620, font: `700 clamp(26px,3vw,36px)/1.15 ${heading}`, letterSpacing: "-0.015em", color: "#073E38", textWrap: "balance" }}
          >
            Need something that doesn&apos;t exist yet?
          </h2>
          <Link href={contactHref("custom")} className="btn btn-primary">Discuss a project</Link>
        </div>
      </section>
    </>
  );
}
