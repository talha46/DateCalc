"use client";

import { useEffect, useMemo, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorEducationalContent from "@/components/CalculatorEducationalContent";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import InternalToolsSection from "@/components/InternalToolsSection";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { daysUntilEducational } from "@/lib/educationalCopy/coreCalculators";
import { toDate } from "@/lib/dateUtils";
import { getToolLinks } from "@/lib/toolLinks";

type QuickDate = { label: string; date: string };

function getQuickDates(year: number): QuickDate[] {
  const eidByYear: Record<number, string> = { 2025: "2025-03-30", 2026: "2026-03-20" };
  const diwaliByYear: Record<number, string> = { 2025: "2025-10-20", 2026: "2026-11-08" };
  return [
    { label: `Christmas ${year}`, date: `${year}-12-25` },
    { label: `New Year ${year + 1}`, date: `${year + 1}-01-01` },
    { label: `Eid ${year}`, date: eidByYear[year] ?? `${year}-03-20` },
    { label: `Diwali ${year}`, date: diwaliByYear[year] ?? `${year}-11-01` },
  ];
}

export default function DaysUntilClient() {
  const nowYear = new Date().getFullYear();
  const quickDates = getQuickDates(nowYear);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [label, setLabel] = useState(searchParams.get("label") ?? "My Event");
  const [targetDate, setTargetDate] = useState(searchParams.get("target") ?? "");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (label) params.set("label", label);
    else params.delete("label");
    if (targetDate) params.set("target", targetDate);
    else params.delete("target");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [label, pathname, router, searchParams, targetDate]);

  const countdown = useMemo(() => {
    const target = toDate(targetDate);
    if (!target) return null;
    const seconds = Math.max(0, differenceInSeconds(target, now));
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  }, [now, targetDate]);

  const relatedTools = getToolLinks([
    "birthday-calculator",
    "add-days-to-date",
    "date-difference-calculator",
  ]);

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Days Until", href: "/days-until" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Days Until Calculator</h1>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Target Label
          <input
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          />
        </label>
        <DateInput id="target-date" label="Target Date" value={targetDate} onChange={setTargetDate} required />
      </section>
      <div className="mb-4 flex flex-wrap gap-2">
        {quickDates.map((quick) => (
          <button
            key={quick.label}
            type="button"
            onClick={() => {
              setLabel(quick.label);
              setTargetDate(quick.date);
            }}
            className="rounded-full border border-teal-200 px-3 py-1 text-sm text-teal-700 hover:bg-teal-50"
          >
            {quick.label}
          </button>
        ))}
      </div>
      <p className="mb-4 text-xs text-amber-700">Eid dates are approximate and may vary by moon sighting.</p>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {countdown ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Days" value={String(countdown.days)} copyText={`${label} is in ${countdown.days} days.`} />
            <ResultCard label="Hours" value={String(countdown.hours)} copyText={`${label} is in ${countdown.hours} hours.`} />
            <ResultCard
              label="Minutes"
              value={String(countdown.minutes)}
              copyText={`${label} is in ${countdown.minutes} minutes.`}
            />
            <ResultCard label="Seconds" value={String(countdown.secs)} copyText={`${label} is in ${countdown.secs} seconds.`} />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Set a target date to start countdown.</p>
      )}

      <CalculatorEducationalContent {...daysUntilEducational} />

      <InternalToolsSection title="Related Tools" tools={relatedTools} compact />
    </CalculatorLayout>
  );
}
