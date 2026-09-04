import type { Metadata } from "next";
import Link from "next/link";
import DataApiHero from "@/components/dataapi/DataApiHero";
import DataGrid from "@/components/dataapi/DataGrid";
import DataSamplePanel from "@/components/dataapi/DataSamplePanel";
import PartnerStrip from "@/components/dataapi/PartnerStrip";

export const metadata: Metadata = {
  title: "HPI | Vehicle Data API - History, Valuation, Spec, MOT, DVLA and more",
};

const benefits = [
  { title: "Single point data access", body: "Pick ‘n’ mix the data you need with logical building blocks" },
  { title: "Flexible pricing options", body: "Choose from pay-as-you-go to subscription services" },
  { title: "Fully scalable", body: "With options to suit projects of all shapes and sizes" },
];

export default function DataApiPage() {
  return (
    <>
      <DataApiHero />

      <section className="bg-(--color-surface) py-14">
        <div className="container grid grid-cols-1 gap-10 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-lg font-normal text-(--color-navy-light)">{b.title}</h3>
              <p className="mt-2 text-(--color-navy-light)">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            All the data you need to build the next big digital motoring tool
          </h2>
          <div className="mt-10">
            <DataGrid />
          </div>
        </div>
      </section>

      <section className="bg-(--color-accent) py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-lg text-white">Explore the options, see the detail with 100&rsquo;s of test vehicles</p>
          <Link
            href="#"
            className="shrink-0 rounded-[4px] border-2 border-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-(--color-accent)"
          >
            Get API key
          </Link>
        </div>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Comprehensive, well structured data</h2>
          <p className="mt-4 text-(--color-navy-light)">Select a data sample and see for yourself:</p>
          <div className="mt-8">
            <DataSamplePanel />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Finger on the pulse!</h2>
            <p className="mt-4 text-(--color-navy-light)">
              When it comes to data, accuracy and seamless implementation are everything. Plug into hpi and
              you&rsquo;re plugging straight into 80 years of vehicle data experience and expertise. Our data can
              form the backbone of your digital product, give added functionality or simply add an enhancement.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md">
            <svg viewBox="0 0 300 120" className="h-auto w-full text-(--color-accent)" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 60h40l10-40 15 80 15-60 10 20h30" />
              <path d="M150 60h30l10-40 15 80 15-60 10 20h40" />
              <circle cx="270" cy="60" r="18" />
              <path d="M4 52h20M4 68h20" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-(--color-navy) py-6 text-center">
        <p className="text-lg text-white">Proud to be working with&hellip;</p>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container">
          <PartnerStrip />
        </div>
      </section>
    </>
  );
}
