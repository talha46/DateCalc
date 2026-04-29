import type { Metadata } from "next";
import { Suspense } from "react";
import AgeCalculatorClient from "@/components/calculators/AgeCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Age Calculator",
  description:
    "Calculate your exact age in years, months, days, hours, and minutes with DateCalc.tools age calculator.",
  alternates: { canonical: "https://datecalc.xyz/" },
};

export default function HomePage() {
  const faq = [
    {
      question: "How does this age calculator work?",
      answer: "It uses your birth date and an optional as-of date to calculate exact elapsed time.",
    },
    {
      question: "Can I calculate age for a past date?",
      answer: "Yes. Set the optional as-of date and results will update automatically.",
    },
    {
      question: "Is timezone considered?",
      answer: "Yes. Calculations run in your local timezone automatically.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <AgeCalculatorClient />
      </Suspense>
    </>
  );
}
