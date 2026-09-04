"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqCategory = { title: string; items: FaqItem[] };

const categories: FaqCategory[] = [
  {
    title: "General Questions",
    items: [
      {
        q: "How long does it take to get my HPI Check results and how will I receive them?",
        a: "The report is delivered on screen to you immediately after you purchase it. You will also get an email. You should save this email for future reference as you will require the reference number to update your check.",
      },
      {
        q: "Will I receive a copy of my HPI Check in the post?",
        a: "No, your HPI Check report is provided digitally. You can view it on screen straight away and it's also emailed to you so you have a permanent copy.",
      },
      {
        q: "What do I do if I have difficulty in obtaining my HPI Check results?",
        a: "If you have any trouble accessing your report, our UK-based customer care team is available 7 days a week to help you retrieve your results.",
      },
      {
        q: "What type of information does an HPI Check provide?",
        a: "Your report covers outstanding finance, stolen vehicle records, write-off and mileage history, plate changes, import/export status, previous keepers and more.",
      },
      {
        q: "What type of information does an HPI Check NOT provide?",
        a: "An HPI Check cannot tell you about the mechanical condition of a vehicle - we always recommend an independent inspection alongside your check.",
      },
      {
        q: "Where does HPI Check information come from?",
        a: "We combine data from the Police National Computer, DVLA, finance houses, insurers and our own National Mileage Register to build your report.",
      },
      {
        q: "What should I do if an interest is recorded?",
        a: "If a finance, stolen or write-off interest is recorded, we recommend you do not proceed with the purchase until you've contacted the relevant party listed in your report.",
      },
      {
        q: "Can I get a report for a non-UK registered vehicle?",
        a: "HPI Check only covers vehicles registered with the DVLA in the UK.",
      },
    ],
  },
  {
    title: "Technical Questions",
    items: [
      {
        q: "What if my Internet connection is lost before I view my report?",
        a: "Don't worry - your report is saved against your reference number and the email confirmation, so you can log back in and retrieve it at any time.",
      },
      {
        q: "Is my on-line transaction safe?",
        a: "Yes, all payments are processed through a secure, encrypted checkout so your card details are always protected.",
      },
      {
        q: "Can I order over the phone?",
        a: "Yes, our customer care team can take your order and payment details over the phone if you'd prefer not to order online.",
      },
      {
        q: "What about my privacy?",
        a: "We only use your details to process your check and never share your personal information with third parties for marketing purposes.",
      },
    ],
  },
  {
    title: "HPI Valuation Questions",
    items: [
      {
        q: "Where are these valuations sourced from?",
        a: "Our valuations are compiled from live UK market data covering trade, private and forecourt sale prices.",
      },
      {
        q: "Why is a dealer offering me a different part exchange price?",
        a: "Dealers factor in reconditioning costs and their own margin, so a part-exchange offer will usually be lower than our private sale valuation.",
      },
      {
        q: "Can I get a historic valuation?",
        a: "Yes, your HPI Check includes past and future estimated values in addition to the current market value.",
      },
      {
        q: "Why can't I find a value for my car?",
        a: "Valuations aren't available for every make, model and age combination - if we don't hold sufficient market data, no valuation will be shown.",
      },
    ],
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">{category.title}</h2>

          <div className="mt-6 divide-y divide-(--color-border) border-y border-(--color-border)">
            {category.items.map((item) => {
              const key = `${category.title}-${item.q}`;
              const isOpen = open === key;
              return (
                <div key={key} className="bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-(--color-surface)"
                  >
                    <span className="text-base text-(--color-navy-light)">{item.q}</span>
                    <span className="relative h-4 w-4 shrink-0 text-(--color-navy-light)">
                      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
                      <span
                        className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform ${isOpen ? "scale-y-0" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-(--color-navy-light)">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
