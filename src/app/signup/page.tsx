import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";

export const metadata: Metadata = {
  title: "Register | HPI",
};

export default function SignupPage() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10">
      <Image
        src="/images/auth-bg.jpg"
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
            <div className="bg-white px-8 py-4 text-center sm:px-[52px]">
              <p className="text-sm text-(--color-text)">
                Already have an account?{" "}
                <Link href="/login" className="text-(--color-green-dark) hover:underline">
                  Log in here
                </Link>
              </p>
            </div>
          }
        >
          <p className="mb-5 text-base text-(--color-text)">
            Buying, selling and owning a car made simple. Everything you need to know about your car at your
            fingertips
          </p>
          <h1 className="mb-6 text-xl font-normal text-[#474747]">Register to claim your garage</h1>

          <form className="space-y-4">
            <AuthInput type="email" name="email" placeholder="Enter e-mail" autoComplete="email" />
            <AuthInput type="password" name="password" placeholder="Password" autoComplete="new-password" />

            <label className="flex cursor-pointer items-start gap-3">
              <span className="relative mt-0.5 inline-block h-5 w-9 shrink-0 rounded-full bg-[#dcdcdc] transition-colors has-[:checked]:bg-(--color-green)">
                <input type="checkbox" name="terms" className="peer sr-only" />
                <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
              </span>
              <small className="text-xs text-(--color-muted)">
                I agree to the{" "}
                <Link href="/terms" className="text-(--color-green-dark) hover:underline">
                  Terms of Service
                </Link>{" "}
                &amp;{" "}
                <Link href="/privacy-policy" className="text-(--color-green-dark) hover:underline">
                  Privacy Policy
                </Link>
              </small>
            </label>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="rounded-[4px] bg-(--color-green) px-4 py-2 text-[17.6px] font-medium text-white transition-colors hover:bg-(--color-green-dark)"
              >
                Register
              </button>
            </div>
          </form>
        </AuthCard>

        <AuthFooterLinks />
      </div>
    </div>
  );
}
