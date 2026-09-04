import Link from "next/link";

const platforms = [
  { label: "Android", icon: "M17.6 9.48l1.84-3.18a.5.5 0 00-.87-.5l-1.86 3.22a11 11 0 00-9.42 0L5.43 5.8a.5.5 0 00-.87.5L6.4 9.48A10.6 10.6 0 001 18h22a10.6 10.6 0 00-5.4-8.52zM7 15a1.25 1.25 0 111.25-1.25A1.25 1.25 0 017 15zm10 0a1.25 1.25 0 111.25-1.25A1.25 1.25 0 0117 15z" },
];

export default function DataApiHero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-3xl font-normal text-(--color-accent) sm:text-4xl">
            Plug into the next generation of vehicle data
          </h1>
          <p className="mt-5 max-w-md text-lg text-(--color-navy-light)">
            We have every UK registered vehicle mapped and coded. With millions of records covering thousands of
            different data points.
          </p>

          <div className="mt-6 flex items-center gap-5 text-(--color-navy-light)">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-label="Android">
              <path d={platforms[0].icon} />
            </svg>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-label="iOS">
              <path d="M17.05 12.34c-.02-2.2 1.8-3.26 1.88-3.31a4.3 4.3 0 00-3.38-1.83c-1.43-.15-2.8.85-3.53.85-.74 0-1.86-.83-3.06-.8a4.5 4.5 0 00-3.79 2.31c-1.63 2.83-.42 7 1.17 9.29.78 1.12 1.7 2.38 2.92 2.33 1.18-.05 1.62-.75 3.04-.75s1.82.75 3.06.73c1.27-.02 2.06-1.13 2.83-2.26a9.8 9.8 0 001.28-2.62 4 4 0 01-2.42-3.94zM14.9 5.6a4.15 4.15 0 00.96-2.98 4.25 4.25 0 00-2.76 1.43 3.94 3.94 0 00-.98 2.87 3.5 3.5 0 002.78-1.32z" />
            </svg>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-label="HTML5">
              <path d="M4 3l1.64 17.27L12 22l6.36-1.73L20 3H4zm12.6 5.7H9l.18 2h7.24l-.6 6.6-3.8 1.1-3.82-1.1-.24-2.7h2l.12 1.2 1.94.5 1.94-.5.2-2.3H8.55l-.5-5.6h9l-.18 2h-.27z" />
            </svg>
            <span className="text-sm font-bold tracking-wide">HTTP</span>
          </div>

          <Link href="#" className="mt-8 inline-block font-bold text-(--color-navy-light) hover:text-(--color-accent)">
            Contact sales
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <svg viewBox="0 0 400 400" className="h-auto w-full text-(--color-border)" fill="none" stroke="currentColor" strokeWidth={1}>
            <circle cx="200" cy="200" r="190" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="150" strokeDasharray="2 6" />
            <circle cx="230" cy="180" r="55" fill="none" stroke="var(--color-navy-light)" strokeWidth={10} />
            <circle cx="230" cy="180" r="20" fill="var(--color-accent)" />
            <circle cx="130" cy="260" r="35" fill="none" stroke="var(--color-navy-light)" strokeWidth={8} />
            <circle cx="150" cy="120" r="16" fill="var(--color-yellow)" />
            <circle cx="110" cy="180" r="10" fill="var(--color-green)" />
            <circle cx="290" cy="270" r="14" fill="var(--color-accent)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
