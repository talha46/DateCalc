import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import AddDaysToDateClient from "@/components/calculators/AddDaysToDateClient";

export const metadata: Metadata = {
  title: "Add Days to Date Calculator",
  description: "Add or subtract days, weeks, months, or years from any date.",
  alternates: { canonical: "https://datecalc.xyz/add-days-to-date" },
};

export default function AddDaysToDatePage() {
  const faq = [
    {
      question: "Can I subtract days from a date?",
      answer: "Yes. Enter a negative number to subtract.",
    },
    {
      question: "Can I switch units?",
      answer: "Yes. Choose days, weeks, months, or years.",
    },
    {
      question: "Does it show the weekday too?",
      answer: "Yes. The output includes the resulting day of the week.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <AddDaysToDateClient />
      </Suspense>
    </>
  );
}
