import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInBusinessDays,
  differenceInCalendarDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
  format,
  getDay,
  getDaysInYear,
  isAfter,
  isBefore,
  isLeapYear,
  isValid,
  parseISO,
  startOfDay,
} from "date-fns";

export type AgeBreakdown = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  totalDaysAlive: number;
  nextBirthdayInDays: number;
  summary: string;
};

export function toDate(value?: string): Date | null {
  if (!value) return null;
  const parsed = parseISO(value);
  if (!isValid(parsed)) return null;
  return parsed;
}

export function calculateAge(dob: Date, asOf: Date): AgeBreakdown {
  const safeAsOf = isBefore(asOf, dob) ? dob : asOf;
  const years = differenceInYears(safeAsOf, dob);
  const months = differenceInMonths(safeAsOf, dob) - years * 12;
  const anchor = addMonths(addYears(dob, years), months);
  const days = differenceInCalendarDays(safeAsOf, anchor);
  const totalDaysAlive = differenceInCalendarDays(startOfDay(safeAsOf), startOfDay(dob));
  const hours = differenceInHours(safeAsOf, dob);
  const minutes = differenceInMinutes(safeAsOf, dob);
  const upcoming = getUpcomingBirthday(dob, safeAsOf);
  const nextBirthdayInDays = differenceInCalendarDays(startOfDay(upcoming), startOfDay(safeAsOf));
  return {
    years,
    months,
    days,
    hours,
    minutes,
    totalDaysAlive,
    nextBirthdayInDays,
    summary: `You are ${years} years, ${months} months, and ${days} days old.`,
  };
}

function getUpcomingBirthday(dob: Date, reference: Date) {
  const year = reference.getFullYear();
  let upcoming = new Date(year, dob.getMonth(), dob.getDate());
  if (isBefore(upcoming, startOfDay(reference))) {
    upcoming = new Date(year + 1, dob.getMonth(), dob.getDate());
  }
  return upcoming;
}

export function calculateDateDifference(start: Date, end: Date, includeEndDate: boolean) {
  const adjustedEnd = includeEndDate ? addDays(end, 1) : end;
  const totalDays = differenceInCalendarDays(adjustedEnd, start);
  const weeks = differenceInWeeks(adjustedEnd, start);
  const months = differenceInMonths(adjustedEnd, start);
  const years = differenceInYears(adjustedEnd, start);
  return { totalDays, weeks, months, years };
}

export function calculateBusinessDays(start: Date, end: Date, holidayDates: Date[] = []) {
  let businessDays = differenceInBusinessDays(end, start);
  const minDate = isAfter(start, end) ? end : start;
  const maxDate = isAfter(start, end) ? start : end;
  const holidayCount = holidayDates.filter((holiday) => {
    const day = getDay(holiday);
    return !isBefore(holiday, minDate) && !isAfter(holiday, maxDate) && day !== 0 && day !== 6;
  }).length;
  businessDays -= holidayCount;
  return businessDays;
}

export function calculateWeeksBreakdown(start: Date, end: Date) {
  const totalDays = differenceInCalendarDays(end, start);
  const fullWeeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;
  return { totalDays, fullWeeks, remainingDays };
}

export function getResultDate(start: Date, amount: number, unit: "days" | "weeks" | "months" | "years") {
  if (unit === "days") return addDays(start, amount);
  if (unit === "weeks") return addWeeks(start, amount);
  if (unit === "months") return addMonths(start, amount);
  return addYears(start, amount);
}

export function zodiacSign(date: Date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const signs = [
    { sign: "Capricorn", from: [1, 1], to: [1, 19] },
    { sign: "Aquarius", from: [1, 20], to: [2, 18] },
    { sign: "Pisces", from: [2, 19], to: [3, 20] },
    { sign: "Aries", from: [3, 21], to: [4, 19] },
    { sign: "Taurus", from: [4, 20], to: [5, 20] },
    { sign: "Gemini", from: [5, 21], to: [6, 20] },
    { sign: "Cancer", from: [6, 21], to: [7, 22] },
    { sign: "Leo", from: [7, 23], to: [8, 22] },
    { sign: "Virgo", from: [8, 23], to: [9, 22] },
    { sign: "Libra", from: [9, 23], to: [10, 22] },
    { sign: "Scorpio", from: [10, 23], to: [11, 21] },
    { sign: "Sagittarius", from: [11, 22], to: [12, 21] },
    { sign: "Capricorn", from: [12, 22], to: [12, 31] },
  ];
  const match = signs.find(
    ({ from, to }) => (month === from[0] && day >= from[1]) || (month === to[0] && day <= to[1]),
  );
  return match?.sign ?? "Unknown";
}

export function lifePathNumber(date: Date) {
  const digits = format(date, "yyyyMMdd").split("").map(Number);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum)
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  return sum;
}

export function leapYearDetails(year: number) {
  const current = new Date(year, 0, 1);
  let prev = year - 1;
  while (!isLeapYear(new Date(prev, 0, 1))) prev -= 1;
  let next = year + 1;
  while (!isLeapYear(new Date(next, 0, 1))) next += 1;
  return {
    isLeap: isLeapYear(current),
    previousLeapYear: prev,
    nextLeapYear: next,
    daysInYear: getDaysInYear(current),
  };
}

export function weekday(date: Date) {
  return format(date, "EEEE");
}

export function formatDateLong(date: Date) {
  return format(date, "EEEE, MMMM d, yyyy");
}

export function secondsOld(dob: Date, asOf: Date) {
  return differenceInSeconds(asOf, dob);
}
