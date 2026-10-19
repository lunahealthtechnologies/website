export type StatusId = "available" | "pilot" | "development" | "soon" | "concept" | "focus";
export type InquiryTypeId = "facility" | "product" | "waitlist" | "custom" | "partnership" | "general";

export type Status = { label: string; bg: string; fg: string };

export type Solution = {
  id: string;
  title: string;
  audience: string;
  challenge: string;
  approach: string;
  benefit: string;
};

export type Product = {
  id: string;
  group: string;
  name: string;
  status: StatusId;
  future?: boolean;
  audience: string;
  problem: string;
  benefit: string;
  value: string;
  capabilities: string[];
  workflow: string[];
  integration: string;
  cta: { label: string; type: InquiryTypeId };
  faq: [question: string, answer: string][];
};

export type Article = {
  id: string;
  category: string;
  title: string;
  dek: string;
  read: string;
  tags: string[];
  body: string[];
};

type SiteConfig = {
  brand: { name: string; shortName: string; logo: string; logoReversed: string; mark: string; mantra: string; mission: string };
  contact: { email: string | null; phone: string | null; address: string | null };
  social: { label: string; url: string }[];
  forms: { endpoint: string | null };
  analytics: { enabled: boolean };
  statuses: Record<StatusId, Status>;
  solutions: Solution[];
  products: Product[];
  articles: Article[];
  inquiryTypes: { id: InquiryTypeId; label: string }[];
};

export const SITE: SiteConfig = {
  brand: {
    // Working name taken from the supplied logo and mission document. Replace when the final name is confirmed.
    name: "Luna Health Technologies",
    shortName: "Luna Health",
    logo: "assets/logo.png",
    logoReversed: "assets/logo-reversed.png",
    mark: "assets/mark.png",
    mantra: "Lighting the Way to Better Health",
    mission: "We design and build evidence-based, human-centred digital solutions that improve access to quality maternal, child, sexual, reproductive and primary healthcare across Africa.",
  },
  contact: {
    email: null,        // e.g. "hello@example.com" — shown only when set
    phone: null,
    address: null,
  },
  social: [],           // e.g. [{ label: "LinkedIn", url: "https://…" }] — rendered only when configured
  forms: {
    endpoint: null,     // POST endpoint (e.g. Formspree, a serverless function or CRM webhook). Null = not connected.
  },
  analytics: {
    enabled: false,     // Privacy-conscious analytics are off until a provider is configured.
  },


  statuses: {
    available: { label: "Available", bg: "#0A6B62", fg: "#FFFFFF" },
    pilot: { label: "Pilot", bg: "#073E38", fg: "#7FE8DC" },
    development: { label: "In development", bg: "#D5EBE6", fg: "#073E38" },
    soon: { label: "Coming soon", bg: "#E9F5F2", fg: "#0A6B62" },
    concept: { label: "Concept", bg: "#FFFFFF", fg: "#3B4A50" },
    focus: { label: "Area of focus", bg: "#E9F5F2", fg: "#073E38" },
  },

  solutions: [
    { id: "access", title: "Digital access and patient engagement", audience: "Individuals, families, clinics", challenge: "People often struggle to find reliable health information, know where to go for care, or stay in touch between visits.", approach: "Mobile-first tools for health education, care navigation, reminders and communication with professionals, designed for varied connectivity and literacy levels.", benefit: "People arrive at care better informed and are less likely to fall out of follow-up." },
    { id: "clinical", title: "Clinical and care-team workflows", audience: "Doctors, midwives, nurses, community health workers", challenge: "Paper registers, scattered messaging and repeated data entry take time away from patients.", approach: "Focused tools for documentation, follow-up lists, referrals and team coordination that fit how care is already delivered.", benefit: "Less administrative load and clearer handovers between professionals." },
    { id: "operations", title: "Hospital and facility operations", audience: "Hospitals, clinics, maternity facilities, administrators", challenge: "Registration queues, appointment gaps and manual billing make facilities hard to run and hard to plan.", approach: "Modular systems for registration, scheduling, billing and operational reporting that can be introduced step by step.", benefit: "Shorter waits, fewer lost records and a clearer view of daily operations." },
    { id: "records", title: "Health information management", audience: "Facilities, health networks", challenge: "Patient histories are often incomplete or locked in one place, so care starts from scratch each visit.", approach: "Structured digital records and clinical documentation with role-based access.", benefit: "Professionals see the information they need, when they need it, without compromising confidentiality." },
    { id: "data", title: "Health data and analytics", audience: "Programme managers, public health institutions, researchers", challenge: "Reporting is slow and data often arrives too late to guide decisions.", approach: "Dashboards and reporting built on well-governed data, with clear rules on who can see what.", benefit: "Timelier, more useful information for planning, programmes and policy." },
    { id: "custom", title: "Custom healthcare software", audience: "Healthcare organisations, NGOs, programmes", challenge: "Off-the-shelf software rarely fits local workflows, languages or infrastructure.", approach: "Bespoke web and mobile applications, internal systems and workflow automation, built with the people who will use them.", benefit: "Software that fits the work, rather than work bent around software." },
    { id: "integration", title: "Digital infrastructure and integration", audience: "Health networks, technology partners", challenge: "Systems that cannot share information create duplicate work and gaps in care.", approach: "APIs, integrations and modernisation of existing systems, guided by recognised health data standards where appropriate.", benefit: "Connected systems that reduce duplication and support continuity of care." },
  ],

  // Product categories. `status` stays "focus" until a specific product and its status are confirmed by the company.
  products: [
    {
      id: "consumer", group: "People and families", name: "Consumer and patient apps", status: "focus",
      audience: "Women, families and individuals managing their health",
      problem: "Reliable, relevant health information is hard to find, and it is easy to lose track of appointments and next steps.",
      benefit: "Clear, trustworthy guidance and reminders in the user's pocket.",
      value: "Mobile tools that help people understand their health and stay connected to care.",
      capabilities: ["Health education", "Maternal and child health support", "Menstrual and reproductive health tools", "Appointment and care navigation", "Communication with healthcare professionals", "Personalised health information"],
      workflow: ["Set up a private profile", "Receive guidance suited to your stage of life or pregnancy", "Get reminders for visits and checks", "Reach a professional or find care when you need it"],
      integration: "Designed to connect with facility scheduling and records systems where a facility chooses to do so.",
      cta: { label: "Join the waitlist", type: "waitlist" },
      faq: [["Is this a replacement for seeing a health professional?", "No. Consumer tools are intended to support, not replace, care from qualified professionals."], ["Will it work on low-cost phones?", "Mobile-first design for varied devices and connectivity is a core design requirement. Specific device support will be published with each product."]],
    },
    {
      id: "hms", group: "Facilities", name: "Hospital and clinic management", status: "focus",
      audience: "Hospitals, clinics, maternity facilities and their administrators",
      problem: "Manual registration, scheduling and billing slow down care and make facilities hard to plan.",
      benefit: "A clearer view of daily operations and less time lost to paperwork.",
      value: "Modular software for the day-to-day running of a health facility.",
      capabilities: ["Patient registration and records", "Appointment scheduling", "Facility operations", "Clinical workflow coordination", "Billing and administrative workflows", "Reporting and operational dashboards"],
      workflow: ["Register or find a patient", "Book and manage appointments and queues", "Coordinate care between departments", "Bill, report and review the day"],
      integration: "Intended to work alongside existing records, laboratory and payment systems through integrations agreed with each facility.",
      cta: { label: "Discuss your facility", type: "facility" },
      faq: [["Can we adopt one module at a time?", "The approach is modular, so facilities can start with the area that needs it most. Scope is agreed in consultation."], ["Who owns our facility's data?", "Data ownership and access terms are agreed with each facility in writing before any deployment."]],
    },
    {
      id: "ehr", group: "Facilities", name: "Electronic health records and clinical systems", status: "focus",
      audience: "Clinicians and facilities that need a reliable patient history",
      problem: "Incomplete or paper-based records mean care often starts from scratch.",
      benefit: "The right information available to the right professional at the point of care.",
      value: "Structured digital records that support safe, continuous care.",
      capabilities: ["Digital patient records", "Clinical documentation", "Care coordination", "Referral workflows", "Interoperability with other systems"],
      workflow: ["Capture a structured record during the visit", "Share relevant information with the care team", "Refer and track the referral", "Review history at the next visit"],
      integration: "Where appropriate, built around recognised health data standards so records can move between systems.",
      cta: { label: "Talk to our team", type: "product" },
      faq: [["Who can see a patient's record?", "Access is designed to be role-based, so each person sees only what their role requires."]],
    },
    {
      id: "professional", group: "Professionals", name: "Tools for healthcare professionals", status: "focus",
      audience: "Doctors, midwives, nurses, allied professionals and community health workers",
      problem: "Follow-up, communication and reference material are spread across notebooks, messaging apps and memory.",
      benefit: "Simple tools that save time on the ward, in the clinic and in the community.",
      value: "Mobile-first utilities that fit into a working shift.",
      capabilities: ["Mobile-first clinical utilities", "Patient follow-up workflows", "Communication and collaboration", "Care management support", "Continuing education and knowledge resources"],
      workflow: ["See today's follow-ups", "Record an update in seconds", "Hand over to a colleague", "Refresh knowledge between shifts"],
      integration: "Can operate on its own or connect to a facility's records system.",
      cta: { label: "Help shape these tools", type: "partnership" },
      faq: [["Can professionals take part in user research?", "Yes. We want to hear from practitioners. Use the contact form and choose 'Research or implementation partnership'."]],
    },
    {
      id: "telehealth", group: "People and families", name: "Telehealth and digital care", status: "focus",
      audience: "Patients and the professionals and facilities that care for them",
      problem: "Distance, cost and time make it hard to see a professional, especially for follow-up.",
      benefit: "Appropriate care reached sooner, with continuity between visits.",
      value: "Remote consultation and follow-up that keeps people connected to their care team.",
      capabilities: ["Remote consultations", "Patient-provider communication", "Follow-up and continuity-of-care workflows", "Digital access to appropriate healthcare services"],
      workflow: ["Request a consultation", "Speak with a professional", "Receive a care plan and follow-up", "Get referred in person when needed"],
      integration: "Designed to link with facility scheduling and records.",
      cta: { label: "Talk to our team", type: "product" },
      faq: [["Does the company provide medical consultations?", "No. We build the technology. Consultations are delivered by qualified professionals and facilities using it."]],
    },
    {
      id: "data", group: "Health systems", name: "Health data and intelligence", status: "focus",
      audience: "Facility leaders, programme managers, public health institutions and researchers",
      problem: "Decision-makers often wait weeks for data that is incomplete when it arrives.",
      benefit: "Timely, trustworthy information to plan services and programmes.",
      value: "Dashboards and reporting built on responsibly governed data.",
      capabilities: ["Operational dashboards", "Health programme monitoring", "Reporting and analytics", "Decision-support tools", "Research and population health insights, where appropriate and responsibly governed"],
      workflow: ["Agree what questions the data should answer", "Connect sources with clear access rules", "Monitor and report", "Review and improve"],
      integration: "Draws from facility and programme systems under written data-sharing agreements.",
      cta: { label: "Explore a partnership", type: "partnership" },
      faq: [["Is personal data used for analytics?", "Analytics are designed around the minimum data needed, with de-identification and governance agreed per project."]],
    },
    {
      id: "custom", group: "Organisations", name: "Custom healthcare software", status: "focus",
      audience: "Healthcare organisations, NGOs and programmes with specific needs",
      problem: "Generic software rarely fits local workflows, languages and infrastructure.",
      benefit: "Software designed around how your team actually works.",
      value: "Bespoke healthcare software, built with the people who will use it.",
      capabilities: ["Bespoke web applications", "Mobile applications", "Internal healthcare systems", "APIs and integrations", "Workflow automation", "Software modernisation"],
      workflow: ["Discovery: understand the problem and users", "Design and prototype together", "Build and test in stages", "Launch, support and improve"],
      integration: "Integration with your existing systems is scoped during discovery.",
      cta: { label: "Discuss a project", type: "custom" },
      faq: [["How does a project start?", "With a short conversation about the problem, the people involved and any constraints. From there we propose a discovery phase."]],
    },
    {
      id: "hardware", group: "Future", name: "Healthcare hardware and connected systems", status: "focus", future: true,
      audience: "Facilities and programmes, in future",
      problem: "Some healthcare challenges need devices as well as software.",
      benefit: "Software and hardware designed to work together.",
      value: "A longer-term ambition. Software is our present priority.",
      capabilities: ["Future medical or healthcare-support devices", "Connected monitoring technologies", "Software-hardware integrations", "Supporting infrastructure"],
      workflow: ["Identify problems that need devices", "Research with clinicians and users", "Prototype responsibly", "Integrate with our software"],
      integration: "Not yet in development.",
      cta: { label: "Start a conversation", type: "partnership" },
      faq: [["Do you sell hardware today?", "No. Hardware is part of our long-term ambition, not a current product line."]],
    },
  ],

  // SAMPLE CONTENT — illustrative articles to demonstrate the editorial layout. Replace before launch.
  articles: [
    { id: "designing-for-low-bandwidth", category: "Patient-centred design", title: "Designing health apps for patchy connectivity", dek: "Questions we ask before a single screen is drawn.", read: "5 min", tags: ["Design", "Mobile"],
      body: ["A health app that only works on fast, constant connections excludes many of the people who might benefit from it most. Designing for intermittent connectivity is a starting constraint, not a later optimisation.", "In practice that means asking early: what must work offline? What can wait to sync? How does the app tell someone, plainly, that their information has or has not been saved?", "It also means testing on the phones people actually use, at the data costs they actually pay. These are design decisions as much as engineering ones."] },
    { id: "health-data-responsibly", category: "Responsible health data", title: "Collecting less: a principle for health data", dek: "Why data minimisation is a design tool.", read: "6 min", tags: ["Privacy", "Data"],
      body: ["Every field on a form is a decision. In healthcare, each piece of information collected carries a duty to protect it.", "Data minimisation asks a simple question for each item: do we need this to deliver the service? If not, we should not collect it.", "Collecting less reduces risk, shortens forms and builds trust. It is one of the most practical privacy measures a product team can take."] },
    { id: "interoperability-basics", category: "Health systems and interoperability", title: "What interoperability means for a small clinic", dek: "A plain-language introduction.", read: "7 min", tags: ["Interoperability", "Facilities"],
      body: ["Interoperability is the ability of different systems to exchange information and use it. For a small clinic, it is the difference between re-typing a referral and sending it.", "Standards help, but interoperability is also about agreements: who may share what, with whom, and why.", "Starting small, with one high-value exchange such as referrals, is often more useful than trying to connect everything at once."] },
    { id: "digital-health-literacy", category: "Digital health literacy", title: "Writing health information people can act on", dek: "Notes on plain language in sensitive topics.", read: "4 min", tags: ["Content", "Literacy"],
      body: ["Health information is only useful if people can understand it and act on it. Plain language is a clinical-safety concern, not a matter of style.", "Short sentences, familiar words and a clear next step make content usable across literacy levels. Testing content with the people it is written for is essential.", "In sensitive topics such as reproductive health, tone matters too: respectful, non-judgemental language encourages people to keep reading."] },
    { id: "building-with-midwives", category: "Research and lessons", title: "Why we start with the people doing the work", dek: "On involving practitioners from day one.", read: "5 min", tags: ["Research", "Professionals"],
      body: ["Midwives, nurses and community health workers know where the friction is. They are the people who will decide, shift by shift, whether a tool is worth using.", "Involving practitioners from the first conversation changes what gets built. It surfaces constraints early and keeps the product honest.", "This is the approach we intend to follow on every product: understand first, then design, then build and test together."] },
    { id: "digital-health-africa", category: "Digital health in Africa", title: "Building for context, not just for scale", dek: "Local context as the starting point.", read: "6 min", tags: ["Strategy", "Africa"],
      body: ["Digital health across Africa is diverse: different health systems, languages, infrastructure and regulations. One-size-fits-all products often struggle.", "Building for context means understanding a specific setting well before generalising from it.", "Scale can follow from solving a real problem well in one place."] },
  ],

  inquiryTypes: [
    { id: "facility", label: "Hospital or health facility" },
    { id: "product", label: "Product inquiry or demonstration" },
    { id: "waitlist", label: "Product waitlist" },
    { id: "custom", label: "Custom software project" },
    { id: "partnership", label: "Research or implementation partnership" },
    { id: "general", label: "General question" },
  ],
};

export const productHref = (id: string) => `/products/${id}`;
export const articleHref = (id: string) => `/insights/${id}`;
export const contactHref = (type?: InquiryTypeId, product?: string) => {
  const qs = new URLSearchParams();
  if (type) qs.set("type", type);
  if (product) qs.set("product", product);
  const s = qs.toString();
  return s ? `/contact?${s}` : "/contact";
};

export const pad2 = (i: number) => String(i + 1).padStart(2, "0");

// Privacy-conscious analytics hook. No-op until SITE.analytics.enabled is true and a provider is wired up.
// Never pass form contents, names, emails or health information as event properties.
export function track(event: string, props: Record<string, unknown> = {}) {
  if (!SITE.analytics.enabled || typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  (w.dataLayer = w.dataLayer || []).push({ event, ...props });
}
