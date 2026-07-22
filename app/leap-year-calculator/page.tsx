import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import LeapYearCalculatorClient from "@/components/calculators/LeapYearCalculatorClient";
import { leapYearEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Leap Year Calculator",
    description: "Free leap year calculator. Enter any year to instantly check if it is a leap year, see which rule applies, and find the previous and next leap years.",
  alternates: { canonical: "https://datecalc.xyz/leap-year-calculator" },
};

export default function LeapYearPage() {
  return (
    <>
      <FaqJsonLd items={[...leapYearEducational.faqItems]} />
      <Suspense fallback={null}>
        <LeapYearCalculatorClient />
      </Suspense>
    </>
  );
}
