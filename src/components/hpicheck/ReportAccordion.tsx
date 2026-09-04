"use client";

import { useState } from "react";
import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";

type ReportItem = {
  title: string;
  icon: IconName;
  body: string;
  href: string;
};

const items: ReportItem[] = [
  { title: "Stolen", icon: "shield", body: "Is the car recorded as stolen on the police national computer?", href: "/stolen-car-check" },
  { title: "Finance", icon: "briefcase", body: "Are there any outstanding loans and finance agreements secured on the car?", href: "/car-finance-check" },
  { title: "Written off", icon: "edit", body: "Has the car been in a serious accident and written off by an insurance company?", href: "/car-write-off" },
  { title: "Clocked*", icon: "gauge", body: "We check the car's mileage – has the car been clocked? *Provided where available", href: "/mileage-check" },
  { title: "MOT history*", icon: "mot", body: "What does the car’s MOT history look like? Did it pass/fail and why? What was the registered mileage? *Provided where available", href: "/mot-history-check" },
  {
    title: "Valuation*",
    icon: "moneybag",
    body: "4 market values including: trade-in, private sale, forecourt value and price at new. Additionally, we’ll tell you the car’s past and future values. *Provided where available",
    href: "/car-valuation",
  },
  { title: "Previous owners", icon: "people", body: "How many previous owners are registered on the logbook?", href: "/car-ownership-check" },
  { title: "Plate changes", icon: "plate", body: "Are there any previous number plate changes on the car that might be hiding a murky past?", href: "/car-registration-check" },
  { title: "Import/Export", icon: "plane", body: "Has the car been imported or exported?", href: "/imported-car-check" },
  { title: "Scrapped", icon: "scrap", body: "Has the car been officially scrapped and destroyed?", href: "/car-write-off" },
  { title: "Logbook check*", icon: "clipboard", body: "Does the logbook (V5C) match our records? *Provided where available", href: "/logbook-checker" },
  { title: "VIN/Chassis check", icon: "edit", body: "Does the VIN/chassis number match what's expected for this vehicle?", href: "/vin-check" },
  { title: "Logbook/VIN match", icon: "clipboard", body: "Does the logbook match the VIN/chassis number recorded for the car?", href: "/vin-check" },
  { title: "Estimated fuel costs", icon: "fuel", body: "See the estimated annual fuel cost for this vehicle.", href: "#" },
  { title: "£30,000 data guarantee*", icon: "moneybag", body: "Our data is backed by a £30,000 guarantee. *Terms apply", href: "#" },
];

export default function ReportAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-(--color-border) border-y border-(--color-border)">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-(--color-surface)"
            >
              <span className="flex items-center gap-4 text-base text-(--color-navy-light)">
                <Icon name={item.icon} className="h-6 w-6 shrink-0" strokeWidth={1.4} />
                {item.title}
              </span>
              <span className="relative h-4 w-4 shrink-0 text-(--color-navy-light)">
                <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
                <span
                  className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform ${isOpen ? "scale-y-0" : ""}`}
                />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pl-[60px] text-(--color-navy-light)">
                <p>{item.body}</p>
                {item.href !== "#" && (
                  <Link href={item.href} className="mt-1 inline-block font-semibold text-(--color-accent) hover:underline">
                    find out more
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
