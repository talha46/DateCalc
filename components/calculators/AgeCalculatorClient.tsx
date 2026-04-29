"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import InternalToolsSection from "@/components/InternalToolsSection";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { calculateAge, toDate } from "@/lib/dateUtils";
import { getToolLinks } from "@/lib/toolLinks";

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export default function AgeCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [dob, setDob] = useState(searchParams.get("dob") ?? "");
  const [asOf, setAsOf] = useState(searchParams.get("asOf") ?? "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (dob) params.set("dob", dob);
    else params.delete("dob");
    if (asOf) params.set("asOf", asOf);
    else params.delete("asOf");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [asOf, dob, pathname, router, searchParams]);

  const result = useMemo(() => {
    const dobDate = toDate(dob);
    const asOfDate = toDate(asOf || todayISO()) ?? new Date();
    if (!dobDate) return null;
    return calculateAge(dobDate, asOfDate);
  }, [asOf, dob]);

  const moreTools = getToolLinks([
    "date-difference-calculator",
    "days-until",
    "birthday-calculator",
    "weeks-between-dates",
    "business-days-calculator",
    "add-days-to-date",
    "leap-year-calculator",
  ]);

  return (
    <CalculatorLayout>
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Age Calculator</h1>
      <p className="mb-6 text-gray-600">
        Enter your date of birth to get instant age details with years, months, days, and next birthday countdown.
      </p>

      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="dob" label="Date of Birth" value={dob} onChange={setDob} required />
        <DateInput id="asOf" label={`As Of Date (optional, default ${todayISO()})`} value={asOf} onChange={setAsOf} />
      </section>

      <div className="mb-5 flex items-center justify-end">
        <ShareButton />
      </div>

      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Years" value={String(result.years)} copyText={result.summary} />
            <ResultCard label="Months" value={String(result.months)} copyText={result.summary} />
            <ResultCard label="Days" value={String(result.days)} copyText={result.summary} />
            <ResultCard label="Hours" value={String(result.hours)} copyText={result.summary} />
            <ResultCard label="Minutes" value={String(result.minutes)} copyText={result.summary} />
            <ResultCard label="Total Days Alive" value={String(result.totalDaysAlive)} copyText={result.summary} />
            <ResultCard
              label="Next Birthday In"
              value={`${result.nextBirthdayInDays} days`}
              copyText={`Your next birthday is in ${result.nextBirthdayInDays} days.`}
            />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">
          Add a valid date of birth to view results.
        </p>
      )}

      <InternalToolsSection title="More Free Date Tools" tools={moreTools} />
    </CalculatorLayout>
  );
}
