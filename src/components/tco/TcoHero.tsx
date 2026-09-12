import Image from "next/image";
import Link from "next/link";
import VinCheckForm from "@/components/hero/VinCheckForm";

export default function TcoHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-[#3fafd8] bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-valuations-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative">
        <Image src="/images/hpi-tco-logo-white.svg" alt="TCO Check" width={484} height={101} className="mx-auto h-10 w-auto sm:h-12" />

        <p className="mx-auto mt-8 max-w-xl text-lg text-white">
          Use our car running costs calculator to find the cheapest car to run
        </p>

        <VinCheckForm idPrefix="tco" />

        <p className="mt-3 text-sm text-white">
          or{" "}
          <Link href="#" className="text-(--color-accent) hover:underline">
            find by make/model
          </Link>
        </p>
      </div>
    </div>
  );
}
