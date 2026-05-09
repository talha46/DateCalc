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
import { addDaysToDateEducational } from "@/lib/educationalCopy/coreCalculators";
import { formatDateLong, getResultDate, weekday, toDate } from "@/lib/dateUtils";
import { getToolLinks } from "@/lib/toolLinks";

type Unit = "days" | "weeks" | "months" | "years";

export default function AddDaysToDateClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [startDate, setStartDate] = useState(searchParams.get("start") ?? "");
  const [amount, setAmount] = useState(searchParams.get("amount") ?? "0");
  const [unit, setUnit] = useState<Unit>((searchParams.get("unit") as Unit) ?? "days");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (startDate) params.set("start", startDate);
    else params.delete("start");
    params.set("amount", amount);
    params.set("unit", unit);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [amount, pathname, router, searchParams, startDate, unit]);

  const result = useMemo(() => {
    const start = toDate(startDate);
    const parsedAmount = Number(amount);
    if (!start || Number.isNaN(parsedAmount)) return null;
    const date = getResultDate(start, parsedAmount, unit);
    return {
      date: formatDateLong(date),
      day: weekday(date),
      sentence: `Starting from ${startDate}, adding ${parsedAmount} ${unit} gives ${formatDateLong(date)}.`,
    };
  }, [amount, startDate, unit]);

  const relatedTools = getToolLinks([
    "date-difference-calculator",
    "days-until",
    "leap-year-calculator",
  ]);

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Add Days to Date", href: "/add-days-to-date" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Add Days to Date Calculator</h1>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="start-add" label="Starting Date" value={startDate} onChange={setStartDate} required />
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Number (use negative to subtract)
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Unit
          <select
            value={unit}
            onChange={(event) => setUnit(event.target.value as Unit)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        </label>
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Resulting Date" value={result.date} copyText={result.sentence} />
            <ResultCard label="Day of Week" value={result.day} copyText={result.sentence} />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Provide a date and amount to calculate.</p>
      )}

      <CalculatorEducationalContent {...addDaysToDateEducational} />

      <InternalToolsSection title="Related Tools" tools={relatedTools} compact />
    </CalculatorLayout>
  );
}
