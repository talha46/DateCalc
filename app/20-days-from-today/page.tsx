import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "20 Days From Today – Date Calculator",
    description: "20 days from today — find the exact date for a span between two and three weeks. Covers accelerated certification timelines, short-term performance plans, and shipping deadlines.",
    alternates: { canonical: "https://datecalc.xyz/20-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={20} />;
}
