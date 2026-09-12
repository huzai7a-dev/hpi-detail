import Image from "next/image";
import VinCheckForm from "@/components/hero/VinCheckForm";

export default function HpiCheckHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-(--color-accent) bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-check-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative">
        <Image
          src="/images/hpi-check-logo-white.svg"
          alt="HPI Check"
          width={803}
          height={202}
          className="mx-auto h-14 w-auto sm:h-16"
        />

        <h2 className="mt-8 text-2xl font-normal text-white sm:text-[27px]">
          Get an instant HPI Car Check<sup>&reg;</sup> now
        </h2>

        <VinCheckForm idPrefix="hpi-check" />
      </div>
    </div>
  );
}
