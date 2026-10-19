import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "120px clamp(20px,4vw,40px)", textAlign: "center" }}>
      <h1 style={{ margin: 0, font: "700 36px/1.15 var(--fh)", color: "var(--c-deep)" }}>We couldn&apos;t find that page</h1>
      <p style={{ margin: "16px 0 0", fontSize: 18, color: "var(--c-muted)" }}>It may have been renamed or not yet published.</p>
      <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        <Link href="/" className="btn btn-sm btn-primary">Back to home</Link>
        <Link href="/products" className="btn btn-sm btn-outline-brand">Browse all products</Link>
      </div>
    </section>
  );
}
