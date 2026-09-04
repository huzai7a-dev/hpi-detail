import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";

export const metadata: Metadata = {
  title: "Log in | HPI",
};

export default function LoginPage() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10">
      <Image
        src="/images/login-bg.jpg"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
        aria-hidden="true"
      />

      <div className="w-full max-w-[400px]">
        <div className="mb-2 text-right text-base text-white">
          Trader?{" "}
          <Link href="/trade" className="text-(--color-green-dark) hover:underline">
            Click here
          </Link>
        </div>

        <AuthCard
          footer={
            <div className="bg-[#455269] px-8 py-4 text-center sm:px-[52px]">
              <p className="text-sm text-white">Don&apos;t have an account?</p>
              <Link
                href="/signup"
                className="mt-2 inline-block rounded-[3.2px] bg-(--color-green) px-2 py-1 text-sm font-bold text-white transition-colors hover:bg-(--color-green-dark)"
              >
                Register here
              </Link>
            </div>
          }
        >
          <h1 className="mb-6 text-2xl font-normal text-[#474747]">Log in</h1>

          <form className="space-y-4">
            <AuthInput type="email" name="email" placeholder="Enter e-mail" autoComplete="email" />
            <div>
              <AuthInput type="password" name="password" placeholder="Password" autoComplete="current-password" />
              <Link href="/forgot-password" className="mt-2 inline-block text-xs text-(--color-green-dark) hover:underline">
                Forgot your password?
              </Link>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="rounded-[4px] bg-[#535e78] px-4 py-2 text-[17.6px] font-medium text-white transition-colors hover:bg-[#46506a]"
              >
                Login to myhpi
              </button>
            </div>
          </form>
        </AuthCard>

        <AuthFooterLinks />
      </div>
    </div>
  );
}
