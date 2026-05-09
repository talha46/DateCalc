import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import BusinessDaysCalculatorClient from "@/components/calculators/BusinessDaysCalculatorClient";
import { businessDaysEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Business Days Calculator",
  description: "Calculate business days between dates excluding weekends and custom holidays.",
  alternates: { canonical: "https://datecalc.xyz/business-days-calculator" },
};

export default function BusinessDaysCalculatorPage() {
  return (
    <>
      <FaqJsonLd items={[...businessDaysEducational.faqItems]} />
      <Suspense fallback={null}>
        <BusinessDaysCalculatorClient />
      </Suspense>
    </>
  );
}
