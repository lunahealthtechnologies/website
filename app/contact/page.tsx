import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact and partnerships",
  description: "Talk to our team about a health facility, a product, a custom software project or a research and implementation partnership.",
  openGraph: { title: "Contact us" },
};

export default function ContactPage() {
  return (
    <div className={s.wrap}>
      <ContactForm
        intro={
          <>
            <p className="eyebrow">Contact</p>
            <h1 className={s.title}>Let&apos;s talk about what you need.</h1>
            <p className={s.lede}>Choose the option closest to your question. It helps us route your message to the right person.</p>
          </>
        }
      />
    </div>
  );
}
