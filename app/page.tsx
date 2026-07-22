import type { Metadata } from "next";
import { Suspense } from "react";
import AgeCalculatorClient from "@/components/calculators/AgeCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ageCalculatorEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Age Calculator",
  description:
    "Free age calculator. Find your exact age in years, months, days, and hours. No signup required.",
  alternates: { canonical: "https://datecalc.xyz" },
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
