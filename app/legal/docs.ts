export type LegalDocId = "privacy" | "terms" | "accessibility";
export type LegalDoc = { label: string; sections: { h: string; p: string }[] };

export const DOCS: Record<LegalDocId, LegalDoc> = {
  privacy: { label: "Privacy notice", sections: [
    { h: "Who we are", p: "[Legal entity name, registration details and contact address to be inserted.] We are the data controller for personal data collected through this website." },
    { h: "What we collect on this website", p: "When you use our contact form we collect your name, email address, optional organisation, inquiry type and message. We ask you not to include patient or personal health information in website forms." },
    { h: "Why we use it", p: "We use these details only to respond to your inquiry and keep a record of our correspondence. We do not sell personal data." },
    { h: "Analytics and cookies", p: "Analytics are currently disabled. If enabled in future, we intend to use privacy-conscious measurement and will update this notice and any consent mechanism before doing so." },
    { h: "Retention", p: "[Retention periods to be defined.] We will keep inquiry data only as long as needed for the purpose it was collected." },
    { h: "Your rights", p: "You may ask to access, correct or delete personal data we hold about you. [Process and contact details to be inserted.]" },
    { h: "Applicable law", p: "[To be confirmed by counsel.] For operations in Ghana, review is needed against the Data Protection Act, 2012 (Act 843), including registration with the Data Protection Commission and the stricter handling of health information as special personal data." },
  ] },
  terms: { label: "Terms of use", sections: [
    { h: "About this website", p: "This website describes our company, our approach and the products we are building. Product descriptions may refer to concepts or products in development, and are labelled accordingly." },
    { h: "Not medical advice", p: "We are a technology company. Content on this website is for general information and is not a substitute for advice from a qualified healthcare professional. In an emergency, contact local emergency services." },
    { h: "Intellectual property", p: "[To be drafted.] Website content, branding and interface designs belong to the company unless stated otherwise." },
    { h: "Links to other sites", p: "We are not responsible for the content of external websites we link to." },
    { h: "Changes", p: "We may update these terms. The date above shows when they were last changed." },
  ] },
  accessibility: { label: "Accessibility statement", sections: [
    { h: "Our commitment", p: "We want this website to be usable by as many people as possible, including people using assistive technology, small screens and slower connections." },
    { h: "Target standard", p: "We are working towards the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. This is a design target, not a claim of conformance; an independent audit has not yet been carried out." },
    { h: "What we have done", p: "Semantic page structure, keyboard-operable navigation and menus, visible focus indicators, labelled form fields with clear error messages, colour contrast checks on text and controls, and respect for reduced-motion settings." },
    { h: "Known limitations", p: "[To be completed after testing with assistive technology users.]" },
    { h: "Feedback", p: "If you find a barrier on this website, please tell us through the contact form so we can fix it." },
  ] },
};

export const DOC_IDS = Object.keys(DOCS) as LegalDocId[];
