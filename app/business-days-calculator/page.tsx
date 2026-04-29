import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import BusinessDaysCalculatorClient from "@/components/calculators/BusinessDaysCalculatorClient";

export const metadata: Metadata = {
  title: "Business Days Calculator",
  description: "Calculate business days between dates excluding weekends and custom holidays.",
  alternates: { canonical: "https://datecalc.xyz/business-days-calculator" },
};

export default function BusinessDaysCalculatorPage() {
  const faq = [
    {
      question: "What counts as a business day?",
      answer: "Business days are Monday to Friday and exclude weekends.",
    },
    {
      question: "Can I add custom holidays?",
      answer: "Yes. Add holiday dates and the calculator removes them from the count.",
    },
    {
      question: "Can I remove holidays later?",
      answer: "Yes. Click a holiday tag to remove it from the list.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <BusinessDaysCalculatorClient />
      </Suspense>
    </>
  );
}
