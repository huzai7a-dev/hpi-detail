import Image from "next/image";

const logos = [
  { name: "The Guardian", src: "/images/guardian-logo.png" },
  { name: "Car Dealer", src: "/images/cardealer-2023-logo.png" },
  { name: "Carbuyer", src: "/images/carbuyer-logo.png" },
  { name: "Motor Trader", src: "/images/motortrader-logo.png" },
];

export default function MediaSection() {
  return (
    <section className="bg-(--color-surface) pb-16 sm:pb-20">
      <div className="container text-center">
        <h2 className="text-2xl font-bold text-(--color-heading) sm:text-3xl">As seen in</h2>
        <span className="heading-underline" />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={140}
              height={91}
              className="h-auto w-28 opacity-80 grayscale sm:w-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
