import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import LeapYearCalculatorClient from "@/components/calculators/LeapYearCalculatorClient";
import { leapYearEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Leap Year Calculator",
  description: "Check if a year is leap year and find previous/next leap years.",
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
