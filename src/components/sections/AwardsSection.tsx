import Image from "next/image";

const awards = [
  {
    title: "Best Car Check Provider",
    years: "2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021, 2022 & 2023",
    logo: "/images/car-dealer-power-logo.png",
  },
  {
    title: "Best Valuations Provider",
    years: "2013, 2014, 2015, 2016, 2017, 2018, 2021, 2022 & 2023",
    logo: "/images/car-dealer-power-logo.png",
  },
];

export default function AwardsSection() {
  return (
    <section className="section pt-0">
      <div className="container grid grid-cols-1 gap-12 sm:grid-cols-2">
        {awards.map((award) => (
          <div key={award.title} className="flex flex-col items-center gap-5 text-center">
            <Image src={award.logo} alt="Car Dealer Power" width={160} height={104} className="h-auto w-40" />
            <div>
              <p className="text-lg font-bold text-(--color-navy-light)">{award.title}</p>
              <p className="mt-1 max-w-xs text-sm text-(--color-text)">{award.years}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
