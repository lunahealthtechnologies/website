import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { articleHref, contactHref, productHref } from "@/lib/site";
import s from "./home.module.css";

const DARK = "#073E38";
const BRIGHT = "#0FA89A";
const LINE = "#D5EBE6";

const BARS: [number, string][] = [
  [30, LINE], [55, LINE], [80, BRIGHT], [95, BRIGHT], [70, BRIGHT], [45, LINE], [25, LINE], [15, LINE],
];

const PATHWAYS = [
  { href: productHref("consumer"), title: "Individuals and families", body: "Reliable guidance on pregnancy, child health, reproductive health and everyday care, with reminders that keep you on track.", cta: "Join the app waitlist →" },
  { href: productHref("professional"), title: "Healthcare professionals", body: "Mobile-first tools for follow-up, documentation and handover, shaped with doctors, midwives, nurses and community health workers.", cta: "Help shape our tools →" },
  { href: contactHref("facility"), title: "Hospitals and health systems", body: "Modular software for registration, scheduling, records and reporting that can be introduced one step at a time.", cta: "Discuss your facility →" },
  { href: contactHref("partnership"), title: "Partners and institutions", body: "Governments, NGOs, researchers and funders working to strengthen health systems and generate better evidence.", cta: "Explore a partnership →" },
];

const PROBLEMS = [
  ["Improving access to care", "Helping people find the right service and get there sooner."],
  ["Connecting people with professionals", "Messaging, remote consultation and follow-up between visits."],
  ["Digitising clinical and admin work", "Replacing paper registers and repeated data entry."],
  ["Supporting informed decisions", "Plain-language, evidence-based health information."],
  ["Making health information useful", "Records and reports that reach the right person in time."],
  ["Strengthening delivery", "Tools that help facilities and programmes run reliably."],
];

const STEPS = [
  ["Understand the problem", "Spend time where care happens before deciding what to build."],
  ["Research with users", "Involve patients, professionals and administrators from the first conversation."],
  ["Design around needs", "Plain language, low-bandwidth use and varied devices are starting constraints."],
  ["Build and test responsibly", "Release in small steps, protect data from the start and test in real settings."],
  ["Learn and improve", "Use evidence and feedback to decide what to change next."],
];

const PRINCIPLES = [
  ["Human-centred by default", "Every feature starts from a real person's need. If a midwife can't use it mid-shift, it isn't finished."],
  ["Grounded in evidence", "Health content and clinical features are based on medical evidence and reviewed by qualified professionals."],
  ["Accessible to more people", "We design for low-cost phones, patchy connectivity and different levels of digital literacy."],
  ["Privacy and dignity", "We collect only what a service needs, limit who can see it and explain plainly how it is used."],
  ["Made for African contexts", "Local health systems, languages, infrastructure and regulation shape what we build from the start."],
  ["Built with, not for", "We work alongside providers, governments, partners and communities affected by each product."],
];

const AIMS = [
  "Improve access to quality healthcare.",
  "Strengthen health systems.",
  "Empower individuals to make informed health decisions.",
  "Support healthcare professionals with better digital tools.",
  "Generate data that drives better health outcomes and policy.",
];

const PARTNERS = [
  "Government and public health agencies",
  "NGOs and implementers",
  "Researchers and universities",
  "Healthcare organisations",
  "Funders and investors",
  "Technology collaborators",
];

const INSIGHTS = [
  { id: "designing-for-low-bandwidth", cat: "Patient-centred design", title: "Designing health apps for patchy connectivity", dek: "Questions we ask before a single screen is drawn." },
  { id: "health-data-responsibly", cat: "Responsible health data", title: "Collecting less: a principle for health data", dek: "Why data minimisation is a design tool." },
  { id: "interoperability-basics", cat: "Interoperability", title: "What interoperability means for a small clinic", dek: "A plain-language introduction." },
];

const CYCLE = [LINE, LINE, BRIGHT, BRIGHT, LINE, LINE, LINE, LINE, DARK, LINE, LINE, LINE, LINE, LINE];

const FOLLOW_UPS = [
  ["ANC-0119", "Missed visit · call"],
  ["CH-0051", "Vaccine due Fri"],
  ["ANC-0133", "Results to review"],
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

function HeroVisual() {
  return (
    <div className={s.col} style={{ position: "relative" }}>
      <div className={s.stage}>
        <div aria-hidden="true" className={s.orbA} />
        <div aria-hidden="true" className={s.orbB} />
        <div aria-hidden="true" className={s.stageLine} />

        <div className={s.dash}>
          <div className={s.dashHead}>
            <div>
              <p className={s.dashTitle}>Maternity clinic · Today</p>
              <p className={s.dashSub}>Illustrative facility dashboard</p>
            </div>
            <span className={s.live}>Live view</span>
          </div>
          <div className={s.stats}>
            <div className={s.stat}><p className={s.statLabel}>Booked</p><p className={s.statValue}>32</p></div>
            <div className={s.stat}><p className={s.statLabel}>Checked in</p><p className={s.statValue}>18</p></div>
            <div className={s.statHot}><p className={s.statLabel}>Follow-ups due</p><p className={s.statValue}>7</p></div>
          </div>
          <div className={s.bars}>
            {BARS.map(([h, c], i) => <span key={i} style={{ height: `${h}%`, background: c }} />)}
          </div>
          <p className={s.axis}><span>08:00</span><span>Arrivals by hour</span><span>16:00</span></p>
          <div className={s.rows}>
            <div><span>ANC-0142 · Antenatal</span><span style={{ color: "var(--c-brand)", fontWeight: 600 }}>In consult</span></div>
            <div><span>PNC-0087 · Postnatal</span><span className="muted">Waiting · 12 min</span></div>
            <div><span>IMM-0311 · Immunisation</span><span className="muted">10:40</span></div>
          </div>
        </div>

        <div className={s.phone}>
          <div className={s.phoneScreen}>
            <div className={s.statusBar}><span>9:41</span><span>●●● ▮</span></div>
            <p style={{ marginTop: 2, color: "var(--c-muted)", fontSize: 10 }}>Good morning</p>
            <div className={s.preg}>
              <p className={s.pregLabel}>Your pregnancy</p>
              <p className={s.pregWeek}>Week 24</p>
              <div className={s.track}><div /></div>
            </div>
            <div className={`glass-soft ${s.tile}`}>
              <p className={s.tileKicker}>NEXT VISIT</p>
              <p className={s.tileTitle}>Antenatal check · Thu 10:00</p>
              <p className={s.tileSub}>Reminder set for Wednesday</p>
            </div>
            <div className={s.tileTint}>
              <p className={s.tileKicker}>TODAY&apos;S GUIDE</p>
              <p className={s.tileTitle}>Staying active safely</p>
              <p className={s.tileSub}>3 min read · Reviewed content</p>
            </div>
            <div className={s.phoneCta}>Message a midwife</div>
          </div>
        </div>
      </div>
      <p className={s.caption}>Illustrative concept interfaces with fictional data. Not a released product.</p>
    </div>
  );
}

function Schedule() {
  const slot = (kind: "dark" | "tint" | "open", code?: string, label?: string) => (
    <div className={s.schedCell}>
      {kind === "open" ? (
        <div className={`${s.slot} ${s.slotOpen}`}>Open slot</div>
      ) : (
        <div className={`${s.slot} ${kind === "dark" ? s.slotDark : s.slotTint}`}>
          <b>{code}</b>
          <br />
          {kind === "dark" ? <span style={{ color: "var(--c-mint)" }}>{label}</span> : label}
        </div>
      )}
    </div>
  );
  return (
    <div className={`glass-soft ${s.sched}`}>
      <div className={s.schedBar}>
        <span className={s.schedDot} /><span className={s.schedDot} /><span className={s.schedDot} />
        <span style={{ marginLeft: 10, fontWeight: 600, color: "var(--c-muted)" }}>Appointments · Tuesday</span>
      </div>
      <div className={s.schedGrid}>
        <div className={s.schedTime} style={{ borderBottom: "1px solid var(--c-tint)" }} />
        <div className={s.schedHead}>Antenatal</div>
        <div className={s.schedHead}>Child health</div>
        <div className={s.schedTime}>09:00</div>
        {slot("dark", "ANC-0142", "Checked in")}
        {slot("tint", "IMM-0298", "Immunisation")}
        <div className={s.schedTime}>09:30</div>
        {slot("tint", "ANC-0157", "First visit")}
        {slot("open")}
        <div className={s.schedTime}>10:00</div>
        {slot("open")}
        {slot("tint", "CH-0064", "Growth check")}
      </div>
      <p className={s.schedFoot}>Illustrative concept · fictional data</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-h" style={{ position: "relative", overflow: "hidden" }}>
        <div className={`container ${s.heroInner}`}>
          <div className={s.col}>
            <p className={s.kicker}><span aria-hidden="true" className={s.kickerDot} />Health technology for Africa</p>
            <h1 id="hero-h" className="h1">Software that brings people and quality healthcare closer.</h1>
            <p className={s.heroLead}>
              We design and build digital tools for patients, healthcare professionals and health facilities, starting with maternal, child, sexual, reproductive and primary healthcare.
            </p>
            <div className={s.ctaRow}>
              <TrackedLink href="/solutions" props={{ cta: "hero_explore_solutions" }} className="btn btn-primary">
                Explore our solutions <span aria-hidden="true">→</span>
              </TrackedLink>
              <TrackedLink href={contactHref("partnership")} props={{ cta: "hero_partner" }} className="btn btn-outline">
                Partner with us
              </TrackedLink>
            </div>
            <p className={s.note}>We build technology. Care is delivered by qualified professionals and facilities.</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section aria-labelledby="paths-h">
        <div className={`container ${s.secPaths}`}>
          <div className={s.headRow}>
            <h2 id="paths-h" className="h2" style={{ maxWidth: 620 }}>Built for everyone involved in care.</h2>
            <p className={s.sideLead}>Choose where you fit to see what we are working on for you.</p>
          </div>
          <div className={s.paths}>
            {PATHWAYS.map((p, i) => (
              <Link key={p.title} href={p.href} className={`glass card-link ${s.path}`}>
                <span className={s.num}>{pad(i)}</span>
                <h3 className={s.pathTitle}>{p.title}</h3>
                <p className={s.pathBody}>{p.body}</p>
                <span className={s.pathCta}>{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="sol-h">
        <div className={`container ${s.sec} ${s.split}`}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <p className="eyebrow">What we work on</p>
            <h2 id="sol-h" className="h2">Healthcare should be easier to reach, easier to deliver and better connected.</h2>
            <p style={{ margin: "24px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--c-muted)", textWrap: "pretty" }}>
              These are the problems we focus on. Some are the subject of products in development; others are areas we are exploring with partners.
            </p>
            <Link href="/solutions" className="btn btn-sm btn-outline-brand" style={{ marginTop: 32 }}>See all solutions</Link>
          </div>
          <ol className={`glass ${s.problems}`}>
            {PROBLEMS.map(([h, p]) => (
              <li key={h}><h3>{h}</h3><p>{p}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="prod-h">
        <div className={`container ${s.sec}`}>
          <div className={s.headRow}>
            <div style={{ maxWidth: 640 }}>
              <p className="eyebrow">Products</p>
              <h2 id="prod-h" className="h2">What we are building first.</h2>
            </div>
            <p className={s.sideLead} style={{ fontSize: 17 }}>
              Every product carries a status label so you always know whether it is available, in pilot, in development or still a concept.
            </p>
          </div>

          <article className={`glass ${s.feature}`}>
            <div className={s.featureText}>
              <div className={s.tagRow}>
                <span className={s.tag}>Area of focus</span>
                <span style={{ fontSize: 14, color: "var(--c-muted)" }}>For hospitals, clinics and maternity facilities</span>
              </div>
              <h3 className={s.featureTitle}>Hospital and clinic management</h3>
              <dl className={s.dl}>
                <div><dt>The problem</dt><dd>Manual registration, scheduling and billing slow down care and make facilities hard to plan.</dd></div>
                <div><dt>What changes</dt><dd>A clearer view of each day, shorter queues and less time lost to paperwork, introduced one module at a time.</dd></div>
              </dl>
              <div className={s.featureActions}>
                <Link href={productHref("hms")} className="btn btn-sm btn-primary">Explore clinic management</Link>
                <Link href={contactHref("facility")} style={{ fontWeight: 700 }}>Discuss your facility</Link>
              </div>
            </div>
            <div className={s.featureVisual}>
              <Schedule />
            </div>
          </article>

          <div className={s.duo}>
            <article className={`glass ${s.duoCard}`}>
              <div className={s.duoText}>
                <span className={s.tag}>Area of focus</span>
                <h3 className={s.duoTitle}>Consumer and patient apps</h3>
                <p className={s.duoAud}>For women, families and individuals</p>
                <p className={s.duoBody}>Trustworthy guidance for pregnancy, child health and reproductive health, plus reminders for the next visit.</p>
                <Link href={productHref("consumer")} className={s.duoLink}>Learn more and join the waitlist →</Link>
              </div>
              <div aria-hidden="true" className={s.mini}>
                <div className={s.miniScreen}>
                  <p className={s.miniTitle}>Cycle and wellbeing</p>
                  <div className={s.cal}>
                    {CYCLE.map((c, i) => <span key={i} style={{ background: c }} />)}
                  </div>
                  <div className={`glass-soft ${s.miniTile}`}><b>Learn</b><br /><span className="muted">Family planning options</span></div>
                  <div className={`glass-soft ${s.miniTile}`}><b>Find care</b><br /><span className="muted">Clinics near you</span></div>
                  <div className={s.miniBtn} style={{ background: "var(--c-brand)", color: "#fff" }}>Private by default</div>
                </div>
              </div>
            </article>
            <article className={`glass ${s.duoCard}`}>
              <div className={s.duoText}>
                <span className={s.tag}>Area of focus</span>
                <h3 className={s.duoTitle}>Tools for healthcare professionals</h3>
                <p className={s.duoAud}>For midwives, nurses, doctors and community health workers</p>
                <p className={s.duoBody}>Follow-up lists, quick documentation and handover notes that fit into a working shift.</p>
                <Link href={productHref("professional")} className={s.duoLink}>Help shape these tools →</Link>
              </div>
              <div aria-hidden="true" className={s.mini}>
                <div className={s.miniScreen} style={{ gap: 6 }}>
                  <p className={s.miniTitle}>Follow-ups · 5</p>
                  <div className={s.miniItem} style={{ background: DARK, color: "#fff" }}>
                    <b>PNC-0087</b><br /><span style={{ color: "var(--c-mint)" }}>Day 3 postnatal · due today</span>
                  </div>
                  {FOLLOW_UPS.map(([code, note]) => (
                    <div key={code} className={`glass-soft ${s.miniItem}`}><b>{code}</b><br /><span className="muted">{note}</span></div>
                  ))}
                  <div className={s.miniBtn} style={{ background: "var(--c-tint)", color: DARK }}>Hand over shift</div>
                </div>
              </div>
            </article>
          </div>
          <div className={s.footRow}>
            <p>Interfaces are illustrative concepts with fictional data.</p>
            <Link href="/products" className={s.textLink}>View the full product ecosystem →</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-h" className="band-dark">
        <div aria-hidden="true" className={s.ringA} />
        <div aria-hidden="true" className={s.ringB} />
        <div className={`container ${s.sec}`} style={{ position: "relative" }}>
          <p className="eyebrow" style={{ color: "var(--c-mint)" }}>How we build</p>
          <h2 id="how-h" className="h2" style={{ maxWidth: 760, color: "inherit" }}>
            We start with the people doing the work and the people receiving care.
          </h2>
          <ol className={s.steps}>
            {STEPS.map(([h, p], i) => (
              <li key={h}><span className={s.num}>{pad(i)}</span><h3>{h}</h3><p>{p}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="why-h">
        <div className={`container ${s.sec}`}>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow">Our principles</p>
            <h2 id="why-h" className="h2">Healthcare technology needs more care than ordinary software.</h2>
          </div>
          <div className={s.principles}>
            {PRINCIPLES.map(([h, p]) => (
              <div key={h} className={`glass ${s.principle}`}><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="vision-h">
        <div className={`container ${s.sec} ${s.vision}`}>
          <div style={{ flex: "1 1 440px", minWidth: 0 }}>
            <p className="eyebrow">Where we are going</p>
            <h2 id="vision-h" className={s.visionH}>
              Our vision is to become Africa&apos;s leading health technology company, transforming healthcare access and outcomes through innovation.
            </h2>
            <div className={s.evidence}>
              <p>Evidence of impact</p>
              <p>We will publish measured results here once our products are in use. We won&apos;t show outcome figures until they come from real deployments.</p>
            </div>
          </div>
          <div style={{ flex: "1 1 400px", minWidth: 0 }}>
            <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.55, color: "var(--c-muted)" }}>The solutions we build are meant to:</p>
            <ul className={s.aims}>
              {AIMS.map((a) => (
                <li key={a}><span aria-hidden="true" className={s.aimDot} />{a}</li>
              ))}
            </ul>
            <Link href="/about" className={s.textLink} style={{ marginTop: 28, display: "inline-block" }}>
              Our purpose, mission and values →
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-h">
        <div className={`container ${s.secPartner}`}>
          <div className={`glass ${s.partner}`}>
            <div style={{ flex: "1.3 1 420px", minWidth: 0 }}>
              <p className="eyebrow">Collaborate with us</p>
              <h2 id="partner-h" className="h2-sm">The best health technology is built together.</h2>
              <p style={{ margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--c-muted)", textWrap: "pretty" }}>
                We want to work with institutions, researchers, healthcare professionals and funders who share the goal of more accessible, connected and equitable healthcare.
              </p>
              <TrackedLink href={contactHref("partnership")} props={{ cta: "home_partnership" }} className="btn btn-primary" style={{ marginTop: 28 }}>
                Explore a partnership
              </TrackedLink>
            </div>
            <ul className={s.chips}>
              {PARTNERS.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ins-h">
        <div className={`container ${s.secInsights}`}>
          <div className={s.headRow} style={{ gap: 16 }}>
            <h2 id="ins-h" className="h2-sm" style={{ textWrap: "wrap" }}>Insights</h2>
            <Link href="/insights" className={s.textLink}>All insights →</Link>
          </div>
          <p style={{ margin: "12px 0 0", fontSize: 15, color: "var(--c-muted)" }}>Sample articles showing the editorial format. Replace before launch.</p>
          <div className={s.articles}>
            {INSIGHTS.map((a) => (
              <Link key={a.id} href={articleHref(a.id)} className={`glass card-link-border ${s.article}`} style={{ color: "inherit", textDecoration: "none" }}>
                <span>{a.cat} · Sample</span>
                <h3>{a.title}</h3>
                <p>{a.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="band-brand">
        <div aria-hidden="true" className={s.ctaCircleA} />
        <div aria-hidden="true" className={s.ctaCircleB} />
        <div className={`container ${s.sec}`} style={{ position: "relative" }}>
          <p style={{ margin: "0 0 16px", font: "600 15px/1 var(--fh)", color: "var(--c-tint)" }}>Lighting the Way to Better Health</p>
          <h2 id="cta-h" style={{ margin: 0, maxWidth: 760, font: "700 clamp(32px,4vw,52px)/1.08 var(--fh)", letterSpacing: "-0.02em", textWrap: "balance" }}>
            Have a healthcare problem technology could help solve?
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--c-tint)" }}>
            Tell us about your facility, programme or idea. We&apos;ll reply to arrange a conversation.
          </p>
          <div className={s.ctaRow}>
            <TrackedLink href="/contact" props={{ cta: "home_final_cta" }} className="btn btn-white">Start a conversation</TrackedLink>
            <Link href="/products" className="btn btn-ghost-light">Explore products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
