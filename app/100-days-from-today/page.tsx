import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "100 Days From Today – Date Calculator",
    description: "100 days from today — find the exact date for a round-number milestone between three and four months. Covers political benchmarks, school-year milestones, and fitness streak tracking.",
    alternates: { canonical: "https://datecalc.xyz/100-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={100} />;
}
