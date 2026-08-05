import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "365 Days From Today – Date Calculator",
    description: "365 days from today — find the exact date one year ahead. Covers anniversary planning, insurance renewals, subscription lifecycle tracking, and annual certification expirations.",
    alternates: { canonical: "https://datecalc.xyz/365-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={365} />;
}
