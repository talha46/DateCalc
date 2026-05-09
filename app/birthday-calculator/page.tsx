import type { Metadata } from "next";
import { Suspense } from "react";
import BirthdayCalculatorClient from "@/components/calculators/BirthdayCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";
import { birthdayCalculatorEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Birthday Calculator",
  description: "Find birthday weekday, zodiac sign, life path number, and more.",
  alternates: { canonical: "https://datecalc.xyz/birthday-calculator" },
};

export default function BirthdayCalculatorPage() {
  return (
    <>
      <FaqJsonLd items={[...birthdayCalculatorEducational.faqItems]} />
      <Suspense fallback={null}>
        <BirthdayCalculatorClient />
      </Suspense>
    </>
  );
}
