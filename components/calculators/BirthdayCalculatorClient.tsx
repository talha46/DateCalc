"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import DateInput from "@/components/DateInput";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { formatDateLong, lifePathNumber, secondsOld, toDate, weekday, zodiacSign } from "@/lib/dateUtils";

function nextBirthdayDate(dob: Date, now: Date) {
  const currentYearBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
  if (currentYearBirthday >= now) return currentYearBirthday;
  return new Date(now.getFullYear() + 1, dob.getMonth(), dob.getDate());
}

export default function BirthdayCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [birthDate, setBirthDate] = useState(searchParams.get("dob") ?? "");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (birthDate) params.set("dob", birthDate);
    else params.delete("dob");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [birthDate, pathname, router, searchParams]);

  const result = useMemo(() => {
    const dob = toDate(birthDate);
    if (!dob) return null;
    const upcoming = nextBirthdayDate(dob, now);
    return {
      weekday: weekday(dob),
      zodiac: zodiacSign(dob),
      lifePath: lifePathNumber(dob),
      nextBirthday: formatDateLong(upcoming),
      ageInSeconds: secondsOld(dob, now),
    };
  }, [birthDate, now]);

  const sentence = result
    ? `You were born on ${result.weekday}, your zodiac sign is ${result.zodiac}, and your life path number is ${result.lifePath}.`
    : "";

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Birthday Calculator", href: "/birthday-calculator" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Birthday Calculator</h1>
      <section className="mb-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <DateInput id="birth-date" label="Birth Date" value={birthDate} onChange={setBirthDate} required />
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard label="Day of Week" value={result.weekday} copyText={sentence} />
            <ResultCard label="Zodiac Sign" value={result.zodiac} copyText={sentence} />
            <ResultCard label="Life Path Number" value={String(result.lifePath)} copyText={sentence} />
            <ResultCard label="Upcoming Birthday" value={result.nextBirthday} copyText={`Your next birthday is on ${result.nextBirthday}.`} />
            <ResultCard label="Age in Seconds" value={String(result.ageInSeconds)} copyText={`You are ${result.ageInSeconds} seconds old.`} />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Select your birth date to view details.</p>
      )}
    </CalculatorLayout>
  );
}
