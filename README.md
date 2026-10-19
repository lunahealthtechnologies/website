# Luna Health Technologies website

Next.js (App Router, TypeScript) implementation of the Claude Design prototypes in `../project`. It builds to a static site with no server.

## Commands

- `npm run dev` starts the development server at http://localhost:3000.
- `npm run build` writes the static site to `out/`. Upload that folder to any static host.
- `npm run lint` runs ESLint.

## Where things live

- `lib/site.ts` holds brand details, contact details, the form endpoint, analytics, solutions, products and articles. Edit content here.
- `app/globals.css` holds the colour tokens and the shared classes (`.glass`, `.btn`, `.eyebrow` and others).
- `components/` holds the Header, the Footer and `TrackedLink`.
- Each route is in `app/<route>/`.

## Before launch

- Set `SITE.forms.endpoint` to connect the contact form. Until then, the form shows a "not sent" notice.
- Set `SITE.contact.email` and `SITE.social` to show them in the footer.
- Replace the sample articles, and fill in the bracketed placeholders in `app/legal/docs.ts`.
