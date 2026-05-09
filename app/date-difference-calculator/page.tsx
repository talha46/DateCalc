import type { Metadata } from "next";
import { Suspense } from "react";
import DateDifferenceCalculatorClient from "@/components/calculators/DateDifferenceCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";
import { dateDifferenceEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Date Difference Calculator",
  description: "Find total days, weeks, months, and years between two dates instantly.",
  alternates: { canonical: "https://datecalc.xyz/date-difference-calculator" },
};

export default function DateDifferenceCalculatorPage() {
  return (
    <>
      <FaqJsonLd items={[...dateDifferenceEducational.faqItems]} />
      <Suspense fallback={null}>
        <DateDifferenceCalculatorClient />
      </Suspense>
    </>
  );
}
