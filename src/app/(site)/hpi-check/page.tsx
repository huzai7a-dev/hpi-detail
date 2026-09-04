import type { Metadata } from "next";
import HpiCheckHero from "@/components/hpicheck/HpiCheckHero";
import ReportAccordion from "@/components/hpicheck/ReportAccordion";
import StatsGrid from "@/components/hpicheck/StatsGrid";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Official HPI Check® | Vehicle Check | Car History Checks Online",
};

const checklist = [
  "Comprehensive, accurate and up-to-date car check data from HPI with a £30,000 data guarantee as standard",
  "The HPI Car Check is your first line of defence against car scams and motor fraud, including: stolen, cut ‘n’ shut & clocked cars",
  "We check for previous accident damage, tell you if the car has been written off and the extent of the damage according to the insurer",
  "The HPI Car Check does what it says on the tin and gives protection from buying a vehicle with outstanding debt such as logbook loans and car finance",
];

export default function HpiCheckPage() {
  return (
    <>
      <HpiCheckHero />

      <section className="relative pb-[100px] pt-10">
        <div className="container max-w-3xl text-center">
          <h1 className="text-3xl font-normal text-(--color-navy-light) sm:text-[38.8px]">
            80 years of HPI Car Check experience and expertise
          </h1>
          <span className="heading-underline" />

          <p className="mx-auto mt-8 max-w-2xl text-lg text-(--color-navy-light)">
            In 1938 HPI&reg; created the HPI Car Check to arm car buyers with vital information about the history of
            the car they&rsquo;re looking to buy. The HPI Car Check has gone from strength to strength ever since.
          </p>

          <h2 className="mt-10 text-2xl font-normal text-(--color-navy-light)">
            HPI Check &ndash; the original vehicle history check
          </h2>

          <ul className="mx-auto mt-6 max-w-xl space-y-4 text-left">
            {checklist.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Icon name="tick" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-green)" strokeWidth={2} />
                <span className="text-(--color-navy-light)">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" width="106" height="26" viewBox="0 0 106 26" aria-hidden="true">
          <path d="M0 0 A53 26 0 0 0 106 0 Z" fill="var(--color-surface)" />
        </svg>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            What&rsquo;s included in your HPI Car Check Report
          </h2>
          <span className="heading-underline" />
        </div>

        <div className="mt-10">
          <ReportAccordion />
        </div>

        <p className="mt-8 text-center text-lg text-(--color-navy-light)">
          &hellip;And much more &ndash; Up to 80 data points in total!
        </p>
      </section>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Why an HPI Car Check is important
          </h2>
          <span className="heading-underline" />
          <p className="mt-8 text-(--color-navy-light)">HPI Car Check stats:</p>
        </div>

        <div className="container mt-10">
          <StatsGrid />
        </div>
      </section>
    </>
  );
}
