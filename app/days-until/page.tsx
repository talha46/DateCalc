import type { Metadata } from "next";
import { Suspense } from "react";
import DaysUntilClient from "@/components/calculators/DaysUntilClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Days Until Calculator",
  description: "Track days, hours, minutes, and seconds until your target date.",
  alternates: { canonical: "https://datecalc.xyz/days-until" },
};

export default function DaysUntilPage() {
  const faq = [
    {
      question: "Does the countdown update live?",
      answer: "Yes. The clock updates every second.",
    },
    {
      question: "Can I use predefined holidays?",
      answer: "Yes. Use quick buttons for Christmas, New Year, Eid, and Diwali.",
    },
    {
      question: "Are Eid dates exact?",
      answer: "No. Eid dates are approximate and may vary by local moon sighting.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <Suspense fallback={null}>
        <DaysUntilClient />
      </Suspense>
    </>
  );
}
