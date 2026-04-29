import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import WeeksBetweenDatesClient from "@/components/calculators/WeeksBetweenDatesClient";

export const metadata: Metadata = {
  title: "Weeks Between Dates Calculator",
  description: "Calculate full weeks and remaining days between two dates.",
  alternates: { canonical: "https://datecalc.xyz/weeks-between-dates" },
};

export default function WeeksBetweenDatesPage() {
  const faq = [
    {
      question: "What does full weeks mean?",
      answer: "Full weeks are complete 7-day blocks in the selected date range.",
    },
    {
      question: "Does this help with pregnancy tracking?",
      answer: "Yes. It provides full weeks plus extra days for easy tracking.",
    },
    {
      question: "Can I share the selected range?",
      answer: "Yes. The page URL updates live with your input values.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <WeeksBetweenDatesClient />
      </Suspense>
    </>
  );
}
