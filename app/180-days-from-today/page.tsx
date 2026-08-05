import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "180 Days From Today – Date Calculator",
    description: "180 days from today — find the exact date approximately six months out. Covers half-year planning, six-month performance improvement plans, and insurance review cycles.",
    alternates: { canonical: "https://datecalc.xyz/180-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={180} />;
}
