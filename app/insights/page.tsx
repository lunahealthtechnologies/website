import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import InsightsBrowser from "./InsightsBrowser";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing on digital health in Africa, patient-centred design, interoperability, digital health literacy and responsible health data.",
};

export default function InsightsPage() {
  return (
    <>
      <section aria-labelledby="h1" className="container" style={{ paddingTop: "clamp(56px,7vw,96px)", paddingBottom: 32 }}>
        <p className="eyebrow">Insights</p>
        <h1 id="h1" style={{ margin: 0, maxWidth: 820, font: "700 clamp(36px,4.6vw,58px)/1.06 var(--fh)", letterSpacing: "-0.025em", color: "#073E38", textWrap: "balance" }}>
          Notes on building health technology for real settings.
        </h1>
        <div role="note" className="glass-soft" style={{ marginTop: 28, display: "inline-flex", gap: 10, alignItems: "center", padding: "10px 16px", borderRadius: 10, background: "rgba(233,245,242,0.55)", fontSize: 15, color: "#073E38" }}>
          <b>Sample content.</b> These articles demonstrate the format and will be replaced before launch.
        </div>
      </section>
      <InsightsBrowser articles={SITE.articles} />
    </>
  );
}
