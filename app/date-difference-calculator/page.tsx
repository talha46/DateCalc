import type { Metadata } from "next";
import { Suspense } from "react";
import DateDifferenceCalculatorClient from "@/components/calculators/DateDifferenceCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Date Difference Calculator",
  description: "Find total days, weeks, months, and years between two dates instantly.",
  alternates: { canonical: "https://datecalc.xyz/date-difference-calculator" },
};

export default function DateDifferenceCalculatorPage() {
  const faq = [
    {
      question: "How is date difference calculated?",
      answer: "The tool compares start and end dates and returns elapsed days, weeks, months, and years.",
    },
    {
      question: "Can I include the end date?",
      answer: "Yes. Enable the include end date toggle to count the final day as part of the range.",
    },
    {
      question: "Can I count only weekdays?",
      answer: "Yes. Turn on business days mode to exclude weekends.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <DateDifferenceCalculatorClient />
      </Suspense>
    </>
  );
}
