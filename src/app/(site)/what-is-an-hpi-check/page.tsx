import type { Metadata } from "next";
import Link from "next/link";
import WhatIsHpiCheckHero from "@/components/whatishpicheck/WhatIsHpiCheckHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "What is an HPI check? | Accurate Car History Data - HPI",
};

const warnings = [
  "Be cautious of companies offering free or cheap “hpi checks” – they are not providing the real product",
  "These imitations often use outdated or incomplete data and may miss critical issues such as outstanding finance, theft, or write-off status",
  "Relying on inaccurate information can lead to costly mistakes",
];

export default function WhatIsAnHpiCheckPage() {
  return (
    <>
      <WhatIsHpiCheckHero />

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Stay Safe and Informed</h2>
          <span className="heading-underline" />

          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {warnings.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Icon name="exclamation" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-accent)" strokeWidth={2} />
                <span className="text-(--color-navy-light)">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 text-(--color-navy-light)">
            Always look for the official hpi check&reg; name and trademark.
          </p>

          <Link
            href="/hpi-check"
            className="mt-8 inline-block rounded-[4px] bg-(--color-accent) px-6 py-3 font-semibold text-white transition-colors hover:bg-(--color-accent)/90"
          >
            Get Your HPI Check
          </Link>
        </div>
      </section>
    </>
  );
}
