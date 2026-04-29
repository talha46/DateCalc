"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { calculateBusinessDays, calculateDateDifference, toDate } from "@/lib/dateUtils";

export default function DateDifferenceCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [startDate, setStartDate] = useState(searchParams.get("start") ?? "");
  const [endDate, setEndDate] = useState(searchParams.get("end") ?? "");
  const [includeEndDate, setIncludeEndDate] = useState(searchParams.get("includeEnd") === "true");
  const [businessOnly, setBusinessOnly] = useState(searchParams.get("businessOnly") === "true");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (startDate) params.set("start", startDate);
    else params.delete("start");
    if (endDate) params.set("end", endDate);
    else params.delete("end");
    params.set("includeEnd", String(includeEndDate));
    params.set("businessOnly", String(businessOnly));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [businessOnly, endDate, includeEndDate, pathname, router, searchParams, startDate]);

  const result = useMemo(() => {
    const start = toDate(startDate);
    const end = toDate(endDate);
    if (!start || !end) return null;
    const difference = calculateDateDifference(start, end, includeEndDate);
    const businessDays = businessOnly ? calculateBusinessDays(start, end) : null;
    return { ...difference, businessDays };
  }, [businessOnly, endDate, includeEndDate, startDate]);

  const summary = result
    ? `Between ${startDate} and ${endDate}, there are ${result.totalDays} total days, ${result.weeks} weeks, ${result.months} months, and ${result.years} years.`
    : "";

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Date Difference Calculator", href: "/date-difference-calculator" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Date Difference Calculator</h1>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="start-date" label="Start Date" value={startDate} onChange={setStartDate} required />
        <DateInput id="end-date" label="End Date" value={endDate} onChange={setEndDate} required />
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={includeEndDate} onChange={(event) => setIncludeEndDate(event.target.checked)} />
          Include end date
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={businessOnly} onChange={(event) => setBusinessOnly(event.target.checked)} />
          Count only business days
        </label>
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Total Days" value={String(result.totalDays)} copyText={summary} />
            <ResultCard label="Weeks" value={String(result.weeks)} copyText={summary} />
            <ResultCard label="Months" value={String(result.months)} copyText={summary} />
            <ResultCard label="Years" value={String(result.years)} copyText={summary} />
            {businessOnly ? (
              <ResultCard
                label="Business Days"
                value={String(result.businessDays ?? 0)}
                copyText={`Business days between ${startDate} and ${endDate}: ${result.businessDays ?? 0}.`}
              />
            ) : null}
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Add both dates to calculate.</p>
      )}
    </CalculatorLayout>
  );
}
