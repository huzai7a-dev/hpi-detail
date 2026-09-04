import type { Metadata } from "next";
import GlossaryHero from "@/components/glossary/GlossaryHero";
import { glossaryCategories } from "@/components/glossary/glossaryData";

export const metadata: Metadata = {
  title: "Glossary | Understand all the terms used in a vehicle check - HPI",
};

function slugify(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function GlossaryPage() {
  return (
    <>
      <GlossaryHero />

      <section className="py-16">
        <div className="container">
          <h1 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Jargon Buster - Glossary of Terms</h1>
          <p className="mt-4 max-w-2xl text-(--color-navy-light)">
            Our glossary includes the most common words and phrases you&rsquo;re likely to encounter, and provides a
            definition, to help you understand the used car purchase.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {glossaryCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-lg font-normal text-(--color-navy-light)">{category.title}</h2>
                <ul className="mt-3 space-y-1.5">
                  {category.terms.map((t) => (
                    <li key={t.term}>
                      <a href={`#${slugify(t.term)}`} className="text-sm text-(--color-accent) hover:underline">
                        {t.term}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-3xl space-y-12">
          {glossaryCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">{category.title}</h2>

              <div className="mt-6 space-y-6">
                {category.terms.map((t) => (
                  <div key={t.term} id={slugify(t.term)} className="scroll-mt-24 border-b border-(--color-border) pb-6">
                    <h3 className="text-lg font-semibold text-(--color-navy-light)">{t.term}</h3>
                    <p className="mt-2 text-(--color-navy-light)">{t.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
