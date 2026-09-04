import Image from "next/image";
import type { ReactNode } from "react";

export default function AuthCard({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-lg bg-white shadow-[0_15px_35px_0_rgba(50,50,93,0.1),0_5px_15px_0_rgba(0,0,0,0.07)]">
      <div className="px-8 py-9 sm:px-[52px] sm:py-9">
        <Image
          src="/images/vehicle-solutions-hpi-logo.svg"
          alt="Solera HPI"
          width={190}
          height={28}
          className="mb-5 h-7 w-auto"
        />
        {children}
      </div>
      {footer}
    </div>
  );
}
