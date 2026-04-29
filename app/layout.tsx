import type { Metadata } from "next";
import Link from "next/link";
import { Mulish } from "next/font/google";
import Script from "next/script";
import AdSenseUnit from "@/components/AdSenseUnit";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://datecalc.xyz"),
  title: {
    default: "DateCalc.tools - Date & Age Calculators",
    template: "%s | DateCalc.tools",
  },
  description: "DateCalc.tools offers fast, free, and accurate date and age calculators for daily planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Age Calculator" },
    { href: "/date-difference-calculator", label: "Date Difference" },
    { href: "/days-until", label: "Days Until" },
    { href: "/birthday-calculator", label: "Birthday" },
    { href: "/weeks-between-dates", label: "Weeks Between Dates" },
    { href: "/business-days-calculator", label: "Business Days" },
    { href: "/add-days-to-date", label: "Add Days to Date" },
    { href: "/leap-year-calculator", label: "Leap Year" },
  ];

  return (
    <html lang="en" className={mulish.className}>
      <body className="min-h-screen bg-white text-gray-900">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2122654552018310"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <header className="border-b border-gray-200">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="text-xl font-bold text-teal-700">
              DateCalc.tools
            </Link>
            <nav className="flex flex-wrap gap-3 text-sm">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-700 hover:text-teal-700">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <div className="mx-auto w-full max-w-6xl px-4">
          <AdSenseUnit id="adsense-above-footer" />
        </div>
        <footer className="border-t border-gray-200">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-gray-600 lg:flex-row lg:items-center lg:justify-between">
            <p>© {new Date().getFullYear()} DateCalc.tools. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="hover:text-teal-700">
                About
              </Link>
              <Link href="/privacy-policy" className="hover:text-teal-700">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
