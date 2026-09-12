import Image from "next/image";
import VinCheckForm from "@/components/hero/VinCheckForm";

export default function ValuationHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-(--color-green) bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-valuations-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative">
        <Image
          src="/images/hpi-valuations-logo-white.svg"
          alt="HPI Valuations"
          width={688}
          height={113}
          className="mx-auto h-12 w-auto sm:h-14"
        />

        <h2 className="mt-8 text-2xl font-normal text-white sm:text-[27px]">Free Car Valuation - Get Yours Now</h2>

        <VinCheckForm idPrefix="valuation" />
      </div>
    </div>
  );
}
