import type { Metadata } from "next";
import { Suspense } from "react";
import AgeCalculatorClient from "@/components/calculators/AgeCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ageCalculatorEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Age Calculator",
  description:
    "Calculate your exact age in years, months, days, hours, and minutes with DateCalc.tools age calculator.",
  alternates: { canonical: "https://datecalc.xyz/" },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={[...ageCalculatorEducational.faqItems]} />
      <Suspense fallback={null}>
        <AgeCalculatorClient />
      </Suspense>
    </>
  );
}
