import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HPI | Car Check, Vehicle Valuations & MOT History Check",
  description:
    "If you own a car or want to buy or sell, HPI has you covered with an award winning car history check, free car valuation and super quick and easy MOT history check.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
