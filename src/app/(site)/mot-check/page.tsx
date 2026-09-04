import type { Metadata } from "next";
import MotCheckHero from "@/components/motcheck/MotCheckHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "HPI | MOT History Check, MOT Car & Vehicle Checks Online, MOT Test Check",
};

const reportItems = [
  "MOT test date",
  "Recorded mileages",
  "Previous MOT test results",
  "Current MOT status",
  "MOT due date",
  "Refusal notes",
  "Advisory notes",
  "Current road tax status",
  "Road tax renewal date",
];

const testChecks = [
  "Examination of the steering, suspension, brakes and battery",
  "Ensuring fully-working lights",
  "Any signs of damage or corrosion on the car’s exterior body",
  "Legal tyre tread",
  "Wheels in good condition",
  "No cracks or chips on the windscreen",
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto max-w-2xl space-y-4 text-left md:ml-[16.66%]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon name="tick" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-green)" strokeWidth={2} />
          <span className="text-(--color-navy-light)">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MotCheckPage() {
  return (
    <>
      <MotCheckHero />

      <section className="relative pb-[100px] pt-14">
        <div className="container max-w-4xl">
          <h2 className="text-center text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Our MOT History report will provide you with:
          </h2>
          <span className="heading-underline" />

          <div className="mt-8">
            <Checklist items={reportItems} />
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left md:ml-[16.66%]">
            <p className="text-(--color-navy-light)">
              Our MOT History Check sources information directly from the DVLA database for any car registered in
              the UK that has had an MOT test since 2005.
            </p>
            <p className="text-(--color-navy-light)">
              A healthy MOT History can suggest a car has been well looked after by its previous owners. A car with
              a history of MOT test fails and lots of advisory notes could point to a higher risk of mechanical
              issues and financial outlay in the future.
            </p>
            <p className="text-(--color-navy-light)">
              Check MOT history on any car, it&rsquo;s a free to use service with optional MOT and road tax renewal
              reminders.
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" width="106" height="26" viewBox="0 0 106 26" aria-hidden="true">
          <path d="M0 0 A53 26 0 0 0 106 0 Z" fill="var(--color-surface)" />
        </svg>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-4xl">
          <h2 className="text-center text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            MOT History Check
          </h2>
          <span className="heading-underline" />

          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-left md:ml-[16.66%]">
            <p className="text-(--color-navy-light)">
              It is a legal requirement for a vehicle to have a valid a MOT certificate, yet it is one that is often
              ignored by some drivers on the road in the UK. A vehicle MOT check ensures a car is roadworthy – as a
              result, any car with a questionable MOT History may need expensive repairs going forward, even if the
              MOT Check shows the car currently has a valid MOT status. It&rsquo;s also worth remembering that a car
              without an MOT cannot be taxed or insured by the owner.
            </p>
            <p className="text-(--color-navy-light)">
              It&rsquo;s extremely important to conduct an MOT history check before purchasing a used vehicle as it
              can be used as an indication the overall condition of the car. A car without a valid MOT certificate
              should not be considered roadworthy and may be dangerous to drive.
            </p>
            <p className="text-(--color-navy-light)">
              A car that has undergone an MOT check on a regular basis is a good example of a car that&rsquo;s been
              properly maintained by its previous owner(s).
            </p>
          </div>

          <h2 className="mt-12 text-center text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Why Check Your Car&rsquo;s MOT History?
          </h2>
          <span className="heading-underline" />

          <p className="mx-auto mt-8 max-w-2xl text-left text-(--color-navy-light) md:ml-[16.66%]">
            Some of the checks involved in an MOT test include:
          </p>

          <div className="mt-6">
            <Checklist items={testChecks} />
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left md:ml-[16.66%]">
            <p className="text-(--color-navy-light)">
              An MOT check will reveal a vehicle&rsquo;s mileage at the time of the test, which parts may have
              failed each test and if any parts have had minor problems.
            </p>
            <p className="text-(--color-navy-light)">
              An MOT History Check is easy to do and it&rsquo;s free. You simply enter the car&rsquo;s reg and we
              check DVLA records for the car&rsquo;s entire MOT History and provide you with an instant MOT Check
              report.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
