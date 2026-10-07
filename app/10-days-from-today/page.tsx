import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "10 Days From Today – Date Calculator",
    description: "10 days from today — find the exact date and weekday for a ten-day window. Covers billing cycles, school assignment clusters, and spans that fall between one and two weeks.",
    alternates: { canonical: "https://datecalc.xyz/10-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={10} />;
}
