import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import LeapYearCalculatorClient from "@/components/calculators/LeapYearCalculatorClient";

export const metadata: Metadata = {
  title: "Leap Year Calculator",
  description: "Check if a year is leap year and find previous/next leap years.",
  alternates: { canonical: "https://datecalc.xyz/leap-year-calculator" },
};

export default function LeapYearPage() {
  const faq = [
    {
      question: "How do I know if a year is leap year?",
      answer: "This calculator checks leap-year rules and gives an instant yes/no answer.",
    },
    {
      question: "Does it show next and previous leap years?",
      answer: "Yes. It shows both previous and upcoming leap years.",
    },
    {
      question: "How many days are in a leap year?",
      answer: "Leap years have 366 days instead of 365.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <LeapYearCalculatorClient />
      </Suspense>
    </>
  );
}
