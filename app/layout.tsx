import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const heading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--fh",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--fb",
});

export const metadata: Metadata = {
  title: {
    default: `LunaHealthTechnologies — ${SITE.brand.name}`,
    template: `%s — ${SITE.brand.name}`,
  },
  description:
    "We design and build software that makes healthcare easier to access, easier to deliver and better connected, starting with maternal, child, reproductive and primary care.",
  icons: { icon: SITE.brand.mark },
  openGraph: {
    title: "LunaHealthTechnologies",
    description:
      "Software for people, healthcare professionals and health facilities across Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        <div className="ambient" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
