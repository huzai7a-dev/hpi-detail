import Link from "next/link";

const columns = [
  {
    heading: "About",
    body: "HPI is the market leading supplier of technology driven data solutions to the automotive market, combining industry and unique data sets to create innovative and powerful solutions underpinned by outstanding customer service.",
  },
];

const getACheck = [
  { label: "The HPI Check", href: "/hpi-check" },
  { label: "Safety Recall Check", href: "/safety-recall-check" },
  { label: "HPI Vehicle Valuation", href: "/valuation" },
  { label: "Free HPI Check", href: "/free-hpi-check" },
  { label: "Vehicle Check", href: "/vehicle-check" },
  { label: "What is an HPI Check", href: "/what-is-an-hpi-check" },
];

const contactHpi = [
  { label: "Contact us", href: "/contact" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "Data API", href: "/data-api" },
];

const legal = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Exercise Your Rights", href: "/exercise-your-rights" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Privacy Notice", href: "/privacy-notice" },
  { label: "Trademark", href: "/trademark" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Modern Slavery Statement", href: "/modern-slavery-statement" },
];

const developers = [{ label: "Vehicle Data API", href: "/data-api" }];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="bg-(--color-accent)">
        <Link href="/trade" className="container flex items-center justify-between py-4 text-sm font-bold text-white">
          HPI Trade Customers
          <span aria-hidden="true">&gt;&gt;&gt;</span>
        </Link>
      </div>

      <div className="bg-(--color-navy) py-14 text-white">
        <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-base font-bold">About</h3>
            <p className="text-sm leading-relaxed text-white/70">{columns[0].body}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-base font-bold">Get a Check</h3>
              <LinkList links={getACheck} />
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold">Contact HPI</h3>
              <LinkList links={contactHpi} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-base font-bold">Legal</h3>
              <LinkList links={legal} />
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold">Developers</h3>
              <LinkList links={developers} />
            </div>
          </div>
        </div>

        <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          Part of <span className="font-semibold text-white">Solera.</span> The global leader in data &amp; software for
          automotive, home ownership and digital identity management.
        </div>

        <div className="container mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center">
          <span>&copy;{new Date().getFullYear()} HPI Ltd. A Solera Company.</span>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" aria-label="Instagram" className="text-white/70 transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="text-white/70 transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.2 4a4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.2 8.2 0 012 18.4a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook" className="text-white/70 transition-colors hover:text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.2C16.3 4.1 15.3 4 14.2 4c-2.4 0-4 1.5-4 4.1v2.3H7.6v3H10.2V21h3.3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
