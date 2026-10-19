import Link from "next/link";
import { SITE, contactHref, productHref } from "@/lib/site";
import s from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Solutions",
    links: [
      { href: "/solutions#access", label: "Patient engagement" },
      { href: "/solutions#clinical", label: "Care-team workflows" },
      { href: "/solutions#operations", label: "Facility operations" },
      { href: "/solutions#data", label: "Health data" },
      { href: "/solutions#custom", label: "Custom software" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: productHref("consumer"), label: "Consumer apps" },
      { href: productHref("hms"), label: "Clinic management" },
      { href: productHref("ehr"), label: "Health records" },
      { href: productHref("professional"), label: "Professional tools" },
      { href: "/products", label: "All products" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
      { href: contactHref("partnership"), label: "Partnership inquiries" },
    ],
  },
];

export default function Footer() {
  const { email } = SITE.contact;
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div className={s.grid}>
          <div className={s.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.brand.logoReversed} alt={SITE.brand.name} width={110} height={68} />
            <p className={s.mission}>{SITE.brand.mission}</p>
            <p className={s.mantra}>{SITE.brand.mantra}</p>
          </div>
          {COLUMNS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className={s.colTitle}>{c.title}</h2>
              <ul className={s.colList}>
                {c.links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={s.contact}>
          {email ? (
            <p>Email <a href={`mailto:${email}`}>{email}</a></p>
          ) : (
            <p style={{ color: "var(--c-line)" }}>
              Contact details will be published here. Until then, please use the <Link href="/contact">contact form</Link>.
            </p>
          )}
          {SITE.social.length > 0 && (
            <ul className={s.social}>
              {SITE.social.map((x) => (
                <li key={x.url}><a href={x.url} rel="noopener">{x.label}</a></li>
              ))}
            </ul>
          )}
        </div>

        <div className={s.legal}>
          <p>© {new Date().getFullYear()} {SITE.brand.name}. We build healthcare technology; we do not provide medical treatment or advice.</p>
          <ul className={s.legalLinks}>
            <li><Link href="/legal/privacy">Privacy</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
            <li><Link href="/legal/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
