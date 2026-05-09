import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import WeeksBetweenDatesClient from "@/components/calculators/WeeksBetweenDatesClient";
import { weeksBetweenDatesEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Weeks Between Dates Calculator",
  description: "Calculate full weeks and remaining days between two dates.",
  alternates: { canonical: "https://datecalc.xyz/weeks-between-dates" },
};

export default function WeeksBetweenDatesPage() {
  return (
    <>
      <FaqJsonLd items={[...weeksBetweenDatesEducational.faqItems]} />
      <Suspense fallback={null}>
        <WeeksBetweenDatesClient />
      </Suspense>
    </>
  );
}
