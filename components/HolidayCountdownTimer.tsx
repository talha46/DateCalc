"use client";

import { useEffect, useMemo, useState } from "react";
import { differenceInSeconds } from "date-fns";

type HolidayCountdownTimerProps = {
  holidayName: string;
  targetDateIso: string;
};

export default function HolidayCountdownTimer({ holidayName, targetDateIso }: HolidayCountdownTimerProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(() => {
    const target = new Date(targetDateIso);
    const seconds = Math.max(0, differenceInSeconds(target, now));
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  }, [now, targetDateIso]);

  return (
    <section className="mt-6">
      <h2 className="mb-3 text-xl font-semibold text-teal-700">Live Countdown to {holidayName}</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Days</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{countdown.days}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Hours</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{countdown.hours}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Minutes</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{countdown.minutes}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Seconds</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{countdown.secs}</p>
        </div>
      </div>
    </section>
  );
}
