import type { Metadata } from "next";
import { Suspense } from "react";
import BirthdayCalculatorClient from "@/components/calculators/BirthdayCalculatorClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Birthday Calculator",
  description: "Find birthday weekday, zodiac sign, life path number, and more.",
  alternates: { canonical: "https://datecalc.xyz/birthday-calculator" },
};

export default function BirthdayCalculatorPage() {
  const faq = [
    {
      question: "What details does this birthday calculator show?",
      answer: "It shows weekday of birth, zodiac sign, life path number, upcoming birthday, and age in seconds.",
    },
    {
      question: "Does age in seconds update live?",
      answer: "Yes. It updates every second.",
    },
    {
      question: "Can I share my result?",
      answer: "Yes. The URL updates live and can be copied with the share button.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <BirthdayCalculatorClient />
      </Suspense>
    </>
  );
}
