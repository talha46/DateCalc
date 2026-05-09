import type { Metadata } from "next";
import { Suspense } from "react";
import FaqJsonLd from "@/components/FaqJsonLd";
import AddDaysToDateClient from "@/components/calculators/AddDaysToDateClient";
import { addDaysToDateEducational } from "@/lib/educationalCopy/coreCalculators";

export const metadata: Metadata = {
  title: "Add Days to Date Calculator",
  description: "Add or subtract days, weeks, months, or years from any date.",
  alternates: { canonical: "https://datecalc.xyz/add-days-to-date" },
};

export default function AddDaysToDatePage() {
  return (
    <>
      <FaqJsonLd items={[...addDaysToDateEducational.faqItems]} />
      <Suspense fallback={null}>
        <AddDaysToDateClient />
      </Suspense>
    </>
  );
}
