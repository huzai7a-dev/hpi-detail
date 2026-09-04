import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" aria-label="HPI home">
          <Image
            src="/images/vehicle-solutions-hpi-logo.svg"
            alt="Solera HPI"
            width={295}
            height={43}
            priority
            className="h-[38px] w-auto sm:h-[43px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden text-sm font-semibold text-(--color-accent) hover:underline sm:block">
            Login
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-(--radius-md) bg-(--color-green) px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-(--color-green-dark) sm:block"
          >
            Sign up
          </Link>
          <MobileNav />
        </div>
      </div>
      <DesktopNav />
    </header>
  );
}
