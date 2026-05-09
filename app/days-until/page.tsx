import type { Metadata } from "next";
import { Suspense } from "react";
import DaysUntilClient from "@/components/calculators/DaysUntilClient";
import FaqJsonLd from "@/components/FaqJsonLd";
import { daysUntilEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Days Until Calculator",
  description: "Track days, hours, minutes, and seconds until your target date.",
  alternates: { canonical: "https://datecalc.xyz/days-until" },
};

export default function DaysUntilPage() {
  return (
    <>
      <FaqJsonLd items={[...daysUntilEducational.faqItems]} />
      <Suspense fallback={null}>
        <DaysUntilClient />
      </Suspense>
    </>
  );
}
