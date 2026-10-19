"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE, contactHref, productHref, track } from "@/lib/site";
import s from "./Header.module.css";

type Section = "solutions" | "products" | "about" | "insights" | "contact" | null;
type Menu = "sol" | "prod" | "mob" | null;

const SOLUTION_LINKS = SITE.solutions.map((x) => ({ href: `/solutions#${x.id}`, label: x.title }));

const PRODUCT_LINKS = [
  { id: "consumer", label: "Consumer and patient apps" },
  { id: "hms", label: "Hospital and clinic management" },
  { id: "ehr", label: "Electronic health records" },
  { id: "professional", label: "Tools for professionals" },
  { id: "telehealth", label: "Telehealth and digital care" },
  { id: "data", label: "Health data and intelligence" },
  { id: "custom", label: "Custom healthcare software" },
  { id: "hardware", label: "Hardware (future ambition)", muted: true },
];

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function sectionOf(pathname: string): Section {
  const first = pathname.split("/")[1];
  switch (first) {
    case "solutions":
    case "products":
    case "about":
    case "insights":
    case "contact":
      return first;
    default:
      return null;
  }
}

export default function Header() {
  const pathname = usePathname();
  const active = sectionOf(pathname);
  const [open, setOpen] = useState<Menu>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen((m) => (m === "mob" ? m : null));
    };
    const onResize = () => setOpen(null);
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onDoc);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDoc);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggle = (m: Exclude<Menu, null>) => () => setOpen((cur) => (cur === m ? null : m));
  const bar = (on: boolean) => on && <span aria-hidden="true" className={s.activeBar} />;

  return (
    <header ref={ref} className={s.header}>
      <a href="#main" className={s.skip}>Skip to content</a>
      <div className={`container ${s.bar}`}>
        <Link href="/" aria-label={`${SITE.brand.name} home`} className={s.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.brand.logo} alt={SITE.brand.name} width={74} height={46} />
        </Link>

        <nav aria-label="Primary" className={`${s.nav} ${s.desktopOnly}`}>
          <button type="button" aria-expanded={open === "sol"} aria-controls="menu-solutions" onClick={toggle("sol")} className={s.navItem}>
            Solutions <span aria-hidden="true" className={s.caret}>▾</span>
            {bar(active === "solutions")}
          </button>
          <button type="button" aria-expanded={open === "prod"} aria-controls="menu-products" onClick={toggle("prod")} className={s.navItem}>
            Products <span aria-hidden="true" className={s.caret}>▾</span>
            {bar(active === "products")}
          </button>
          {(["about", "insights", "contact"] as const).map((k) => (
            <Link key={k} href={`/${k}`} aria-current={active === k ? "page" : undefined} className={s.navItem}>
              {k[0].toUpperCase() + k.slice(1)}
              {bar(active === k)}
            </Link>
          ))}
        </nav>

        <div className={s.actions}>
          <Link href="/contact" onClick={() => track("cta_click", { cta: "header_talk" })} className={s.cta}>
            Talk to our team
          </Link>
          <button
            type="button"
            aria-expanded={open === "mob"}
            aria-controls="menu-mobile"
            aria-label="Menu"
            onClick={toggle("mob")}
            className={`glass-soft ${s.burger} ${s.mobileOnly}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open === "sol" && (
        <div id="menu-solutions" className={`${s.mega} ${s.desktopOnly}`}>
          <div className={`container ${s.megaInner}`} style={{ width: "100%" }}>
            <div>
              <p className={s.megaLabel}>Solutions</p>
              <p className={s.megaIntro}>Organised by the problems we work on, not the technology behind them.</p>
              <Link href="/solutions" className={s.megaAll}>All solutions →</Link>
            </div>
            <ul className={s.megaList}>
              {SOLUTION_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className={s.megaLink}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {open === "prod" && (
        <div id="menu-products" className={`${s.mega} ${s.desktopOnly}`}>
          <div className={`container ${s.megaInner}`} style={{ width: "100%" }}>
            <div>
              <p className={s.megaLabel}>Products</p>
              <p className={s.megaIntro}>The product areas we are building toward. Each is labelled with its current status.</p>
              <Link href="/products" className={s.megaAll}>Product ecosystem →</Link>
            </div>
            <ul className={s.megaList}>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.id}>
                  <Link href={productHref(l.id)} className={`${s.megaLink} ${l.muted ? s.megaLinkMuted : ""}`}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {open === "mob" && (
        <nav id="menu-mobile" aria-label="Mobile" className={s.mobile}>
          <ul className={s.mobileList}>
            {MOBILE_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className={s.mobileLink}>{l.label}</Link></li>
            ))}
          </ul>
          <p className={s.mobileLabel}>Start a conversation</p>
          <div className={s.mobileCtas}>
            <Link href={contactHref("facility")} className={`glass-soft ${s.mobileCta}`}>For hospitals and facilities</Link>
            <Link href={contactHref("partnership")} className={`glass-soft ${s.mobileCta}`}>For partners and researchers</Link>
            <Link href={contactHref("custom")} className={`glass-soft ${s.mobileCta}`}>Custom software projects</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
