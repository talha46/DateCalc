import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "45 Days From Today – Date Calculator",
    description: "45 days from today — find the exact date for a mid-quarter window. Covers quarterly planning subdivisions, immigration processing estimates, and construction punch-list timelines.",
    alternates: { canonical: "https://datecalc.xyz/45-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={45} />;
}
