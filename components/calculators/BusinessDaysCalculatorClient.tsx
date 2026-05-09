"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorEducationalContent from "@/components/CalculatorEducationalContent";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import InternalToolsSection from "@/components/InternalToolsSection";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { businessDaysEducational } from "@/lib/educationalCopy/coreCalculators";
import { calculateBusinessDays, toDate } from "@/lib/dateUtils";
import { getToolLinks } from "@/lib/toolLinks";

export default function BusinessDaysCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [startDate, setStartDate] = useState(searchParams.get("start") ?? "");
  const [endDate, setEndDate] = useState(searchParams.get("end") ?? "");
  const [holidayInput, setHolidayInput] = useState("");
  const [holidays, setHolidays] = useState<string[]>(
    searchParams.get("holidays") ? searchParams.get("holidays")!.split(",").filter(Boolean) : [],
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (startDate) params.set("start", startDate);
    else params.delete("start");
    if (endDate) params.set("end", endDate);
    else params.delete("end");
    if (holidays.length) params.set("holidays", holidays.join(","));
    else params.delete("holidays");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [endDate, holidays, pathname, router, searchParams, startDate]);

  const businessDays = useMemo(() => {
    const start = toDate(startDate);
    const end = toDate(endDate);
    if (!start || !end) return null;
    const holidayDates = holidays.map((holiday) => toDate(holiday)).filter((date): date is Date => Boolean(date));
    return calculateBusinessDays(start, end, holidayDates);
  }, [endDate, holidays, startDate]);

  const relatedTools = getToolLinks([
    "date-difference-calculator",
    "weeks-between-dates",
    "add-days-to-date",
  ]);

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Business Days Calculator", href: "/business-days-calculator" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Business Days Calculator</h1>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="start-business" label="Start Date" value={startDate} onChange={setStartDate} required />
        <DateInput id="end-business" label="End Date" value={endDate} onChange={setEndDate} required />
      </section>

      <section className="mb-5 rounded-xl border border-gray-200 p-4">
        <h2 className="mb-3 text-lg font-semibold">Optional Holidays</h2>
        <div className="mb-3 flex flex-wrap items-end gap-2">
          <DateInput id="holiday-date" label="Holiday Date" value={holidayInput} onChange={setHolidayInput} />
          <button
            type="button"
            onClick={() => {
              if (holidayInput && !holidays.includes(holidayInput)) {
                setHolidays((prev) => [...prev, holidayInput]);
                setHolidayInput("");
              }
            }}
            className="rounded-md bg-teal-700 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Add Holiday
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {holidays.map((holiday) => (
            <button
              key={holiday}
              type="button"
              onClick={() => setHolidays((prev) => prev.filter((item) => item !== holiday))}
              className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
            >
              {holiday} ×
            </button>
          ))}
        </div>
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {businessDays !== null ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard
              label="Business Days"
              value={String(businessDays)}
              copyText={`There are ${businessDays} business days between ${startDate} and ${endDate} excluding weekends and selected holidays.`}
            />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Enter start and end dates to calculate.</p>
      )}

      <CalculatorEducationalContent {...businessDaysEducational} />

      <InternalToolsSection title="Related Tools" tools={relatedTools} compact />
    </CalculatorLayout>
  );
}
