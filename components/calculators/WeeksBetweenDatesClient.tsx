"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import InternalToolsSection from "@/components/InternalToolsSection";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { calculateWeeksBreakdown, toDate } from "@/lib/dateUtils";
import { getToolLinks } from "@/lib/toolLinks";

export default function WeeksBetweenDatesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [startDate, setStartDate] = useState(searchParams.get("start") ?? "");
  const [endDate, setEndDate] = useState(searchParams.get("end") ?? "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (startDate) params.set("start", startDate);
    else params.delete("start");
    if (endDate) params.set("end", endDate);
    else params.delete("end");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [endDate, pathname, router, searchParams, startDate]);

  const result = useMemo(() => {
    const start = toDate(startDate);
    const end = toDate(endDate);
    if (!start || !end) return null;
    return calculateWeeksBreakdown(start, end);
  }, [endDate, startDate]);

  const text = result
    ? `Between ${startDate} and ${endDate} there are ${result.fullWeeks} full weeks and ${result.remainingDays} remaining days.`
    : "";

  const relatedTools = getToolLinks([
    "date-difference-calculator",
    "business-days-calculator",
    "add-days-to-date",
  ]);

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Weeks Between Dates", href: "/weeks-between-dates" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Weeks Between Dates</h1>
      <p className="mb-4 text-sm text-gray-600">Useful for planning and pregnancy tracking timelines.</p>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="start-week" label="Start Date" value={startDate} onChange={setStartDate} required />
        <DateInput id="end-week" label="End Date" value={endDate} onChange={setEndDate} required />
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Full Weeks" value={String(result.fullWeeks)} copyText={text} />
            <ResultCard label="Remaining Days" value={String(result.remainingDays)} copyText={text} />
            <ResultCard label="Total Days" value={String(result.totalDays)} copyText={text} />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Provide both dates to calculate weeks.</p>
      )}
      <InternalToolsSection title="Related Tools" tools={relatedTools} compact />
    </CalculatorLayout>
  );
}
