import Image from "next/image";
import RegistrationChecker from "./RegistrationChecker";

export default function Hero() {
  return (
    <section className="bg-(--color-hero-bg)">
      <div className="container grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-4xl font-black text-(--color-heading) sm:text-5xl">Get the facts</h1>
          <p className="mt-5 max-w-md text-lg text-(--color-text)">
            If you own a car or want to buy or sell, HPI has you covered with an award winning car history check, free
            car valuation and super quick and easy MOT history check.
          </p>
          <div className="mt-8 max-w-md">
            <RegistrationChecker />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <Image
            src="/images/product-headline-image.png"
            alt="Illustration of assorted vehicles: cars, a van and a bus"
            width={800}
            height={600}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
