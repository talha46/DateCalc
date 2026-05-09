import type { CalculatorEducationalContentProps } from "@/components/CalculatorEducationalContent";
import type { FaqItem } from "@/components/FaqSection";
import { daysFromTodayStaticValues } from "@/lib/programmaticPages";

export type DaysFromTodayEducationalBase = Pick<
  CalculatorEducationalContentProps,
  "howToIntro" | "steps" | "aboutParagraphs"
>;

export type DaysFromTodayExtraCopy = {
  commonReasons: string;
  timeframeParagraph: string;
};

const timeframeByDays: Record<(typeof daysFromTodayStaticValues)[number], DaysFromTodayExtraCopy> = {
  7: {
    commonReasons:
      "People often count one week forward for short trial extensions, medication titration schedules, quick shipping guarantees, sprint checkpoints, or follow-up calls after service appointments. Event planners use seven-day lookahead to confirm RSVPs, finalize catering headcounts, or verify venue walk-through timing without cramming tasks into the final weekend.",
    timeframeParagraph:
      "Seven days equals exactly one calendar week, making mental conversion between days and weeks effortless on this page. That alignment helps compare supplier promises quoted in weeks against internal trackers maintained in days—especially when weekends sit inside the window and you still need absolute calendar certainty.",
  },
  10: {
    commonReasons:
      "Ten-day horizons appear in school assignment clusters, short immigration appointment spacing, sports recovery protocols, and finance billing cycles that avoid aligning strictly with weekends. Retail buyers sometimes review inventory ten days out to balance truck schedules that do not line up with seven-day multiples.",
    timeframeParagraph:
      "Ten-day spans bridge a week-plus buffer without rounding to two full weeks—useful when instructions say “within ten days” rather than “two weeks.” Tracking ten discrete days prevents accidentally counting only business periods unless your policy explicitly demands that narrower interpretation.",
  },
  14: {
    commonReasons:
      "Two-week windows dominate pay cycles, biweekly agile milestones, rental approval timelines, and clinical follow-ups tied to outpatient protocols. Travelers booking overlapping itineraries compare fourteen-day quarantine or testing norms across jurisdictions even when rules evolve seasonally.",
    timeframeParagraph:
      "Fourteen days equals two weeks on standard Gregorian calendars, so translating plans between HR phrases (“next paycheck”) and rigid calendar arithmetic stays consistent. When policies exclude weekends, fourteen calendar days still advances faster than ten business days—double-check which definition your notice requires.",
  },
  15: {
    commonReasons:
      "Mid-month checkpoints help payroll corrections, subscription renewal reminders halfway through billing cycles, and sports league registration phases that split months evenly. Marketing teams schedule creative reviews roughly fifteen days before month-end publishing freezes.",
    timeframeParagraph:
      "Fifteen-day lookahead lands near the midpoint of a thirty-day month—handy for pacing monthly quotas without waiting for calendar month rollovers. It also mirrors some statutory windows expressed as half of a thirty-day maximum when legislators approximate fortnight-scale buffers.",
  },
  20: {
    commonReasons:
      "Twenty-day spans appear in accelerated certification refreshers, short-term performance improvement plans, and shipping lanes that promise delivery before a full month elapses. Product teams sometimes allocate twenty coding days informally even though calendar spans include non-working days unless scoped explicitly.",
    timeframeParagraph:
      "Twenty days sits between two and three weeks, offering breathing room beyond a single sprint without crossing month boundaries that trigger finance closes. That middle ground helps stakeholders negotiate compromise timelines when one side demands ten days and another prefers thirty.",
  },
  21: {
    commonReasons:
      "Three-week plans align with many medication titration guides, agile epics broken into three weekly iterations, and visa appointment spacing templates that avoid holiday crunch weeks. Educators schedule three-week modules so exams land before major seasonal breaks.",
    timeframeParagraph:
      "Twenty-one days equals three exact weeks—multiples of seven simplify coordination with weekly standups or classroom schedules. When converting to business days only, remember twenty-one calendar days may span fifteen weekdays depending on where weekends fall—use the Business Days Calculator if weekends should not count.",
  },
  25: {
    commonReasons:
      "Twenty-five-day intervals appear when policies approximate “about a month” without referencing calendar months directly—credit dispute timelines, warranty extensions, or grace periods after missed payments sometimes adopt this length to avoid anchoring to irregular month ends.",
    timeframeParagraph:
      "Twenty-five calendar days usually crosses partial weeks plus an extra handful—making it distinct from neat four-week blocks. Document whether inclusive counting applies so off-by-one disagreements do not appear near holidays that extend perceived leniency.",
  },
  30: {
    commonReasons:
      "Thirty-day windows underpin retail return policies, free-trial marketing funnels, probationary performance checkpoints, and rental payment grace notices framed as “one month” colloquially. Software trials and gym intros frequently exploit thirty calendar days because consumers intuitively map them to monthly budgeting.",
    timeframeParagraph:
      "Thirty days is commonly used for return policies, trial periods, and monthly deadlines even though calendar months vary from twenty-eight to thirty-one days—contracts leaning on “thirty days” reduce ambiguity compared with saying “one month.” Legal teams still clarify business-day versus calendar-day meanings because consumer expectations differ by jurisdiction.",
  },
  45: {
    commonReasons:
      "Forty-five-day cycles show up in quarterly planning subdivisions, immigration processing estimates, construction punch-list remediation, and extended clinical observation protocols halfway between months two and three. Schools schedule mid-quarter progress reviews around six-week-plus spacing.",
    timeframeParagraph:
      "Forty-five days covers roughly one-and-a-half average months—long enough for substantive projects yet short enough to stay inside single fiscal reporting periods in many organizations. Teams translate this span into six full weeks plus three extra days when aligning sprint planners that think strictly in weeks.",
  },
  60: {
    commonReasons:
      "Sixty-day horizons fuel probation reviews, short-term lease riders, vehicle registration grace stacks layered atop thirty-day notices, and wellness challenges marketed as two-month transformations. Enterprise procurement quotes compare sixty-day payment terms against net-thirty cash-flow assumptions.",
    timeframeParagraph:
      "Sixty calendar days approximates two months but exceeds February-length pairs—always specify calendar math when precision affects interest accrual or statutory windows. Two neat months rarely equal sixty days unless you cherry-pick July–August style pairings.",
  },
  90: {
    commonReasons:
      "Ninety-day goals anchor quarterly OKRs, probationary job evaluations, immigration appointment spacing, and clinical rehab benchmarks. Retailers seasonally rotate inventory roughly every ninety days to align with fiscal quarters even when consumer holidays disrupt smooth pacing.",
    timeframeParagraph:
      "Ninety days equals roughly one fiscal quarter on the calendar—helpful shorthand for corporate planning even though fiscal quarters defined by companies may misalign slightly with pure ninety-day counts. Convert consciously when anchoring to quarter-close deadlines versus raw day totals.",
  },
  100: {
    commonReasons:
      "Hundred-day countdowns energize political benchmarks, school-year milestones after semester starts, fitness transformations marketed as triple-digit streaks, and baby-photo challenges celebrating infants’ first hundred days in some cultures. Project sponsors mention triple digits to signal seriousness without committing to a full quarter.",
    timeframeParagraph:
      "One hundred days sits between three and four months—large enough for measurable progress yet emotionally sticky as a round-number milestone. Historical political administrations often spotlight first-hundred-day agendas; personal planners borrow the motif for habit formation analytics.",
  },
  120: {
    commonReasons:
      "One-hundred-twenty-day windows appear in extended warranty promotions, academic semesters spanning partial summers, and phased construction stages awaiting inspections. Environmental monitoring sometimes samples quarterly plus a month for seasonal comparisons spanning extra weather variability.",
    timeframeParagraph:
      "One hundred twenty days covers about four average months—close to one-third of a year for mental proportional reasoning. When aligning with semester-length academic calendars, verify whether finals weeks truncate instructional days differently than raw calendar spans.",
  },
  180: {
    commonReasons:
      "Half-year planning horizons split fiscal years evenly, structure six-month performance improvement plans, or pace immigration workflows whose estimates cluster near six multiples of thirty-day approximations. Insurance policies sometimes trigger six-month reviews for high-risk coverage tiers.",
    timeframeParagraph:
      "One hundred eighty days approximates six months but differs from calendar half-years anchored on January–June splits unless your endpoints align intentionally. Use explicit dates—not verbal “six months”—when contracts must survive audit trails.",
  },
  365: {
    commonReasons:
      "Year-ahead projections underpin anniversary planning, insurance renewals, subscription lifecycle analytics, and estate planning reminders pegged to annual tax cycles. Athletes schedule annual physicals while HR systems automate 365-day certification expirations unless leap days intervene.",
    timeframeParagraph:
      "Three hundred sixty-five days represents a common year before accounting for leap day insertion—anniversary calculations crossing February in leap years may need an extra day compared with flat 365 math. Financial interest sometimes uses 365-day conventions explicitly versus actual/actual day-count conventions—terminology matters when money compounds.",
  },
};

function isSupportedDays(days: number): days is (typeof daysFromTodayStaticValues)[number] {
  return (daysFromTodayStaticValues as readonly number[]).includes(days);
}

export function getDaysFromTodayExtraCopy(days: number): DaysFromTodayExtraCopy {
  if (isSupportedDays(days)) return timeframeByDays[days];
  return {
    commonReasons:
      "Forward-looking day counts help with return policies, trial expirations, visa appointments, construction milestones, and travel planning—any scenario where anchoring from “today” beats guessing month boundaries.",
    timeframeParagraph:
      "When your duration does not match a neat week or month multiple, specify calendar-day versus business-day counting in your plans so collaborators interpret the same window you do.",
  };
}

export function getDaysFromTodayEducationalBase(days: number): DaysFromTodayEducationalBase {
  return {
    howToIntro:
      `This page instantly projects ${days} calendar days forward from “today” on your device, showing the landing weekday plus helper stats like weeks and months of drift. Use it when someone cites “${days} days from now” and you want to anchor the exact calendar date without manual counting across month lengths.`,
    steps: [
      `Review the highlighted resulting date—this is the calendar day that occurs ${days} full days after today’s date in your local timezone.`,
      `Scan companion tiles for weekday context, remaining days left in the year, approximate weeks, and whole-month deltas useful for comparisons.`,
      `If you need a different starting point than today, follow the linked Add Days to Date Calculator to choose any anchor while preserving the same duration logic.`,
    ],
    aboutParagraphs: [
      `Forward projection matters because everyday planning—shipping slogans, cooling-off clauses, trial timers, and clinic schedules—often states durations instead of naming the final calendar day. Rolling forward ${days} successive local midnights yields an unambiguous landing date you can paste into tickets or calendar invites.`,
      "Calendar-month shortcuts mislead when policies say “30 days” versus “one month,” especially crossing February. Showing both the concrete calendar answer and derived week/month approximations helps you translate legal calendar-day language into agile weekly planning without silent rounding errors.",
      `Companion metrics contextualize what ${days} days feels like in adjacent units: weeks clarify sprint cadences, month differences hint at billing cycles, and weekday names expose weekend crossings that matter when someone mistakenly counts only business days.`,
    ],
  };
}

export function buildDaysFromTodayFaqDetailed(
  days: number,
  formattedLongDate: string,
  weeksDecimal: string,
): [FaqItem, FaqItem, FaqItem] {
  return [
    {
      question: `What date is ${days} days from today?`,
      answer: `${days} days from today lands on ${formattedLongDate}. That value reflects rolling forward one calendar day at a time from today’s date in your local timezone, which matters when your deadline crosses midnight near international collaboration.`,
    },
    {
      question: `How many weeks are in ${days} days?`,
      answer: `${days} days equals ${weeksDecimal} weeks when dividing by seven—use whole-week conversation for sprint planning, but remember leftover days when aligning with month-end finance freezes.`,
    },
    {
      question: `Can I calculate ${days} days from a custom start date?`,
      answer:
        "Yes. Use the Add Days to Date Calculator to pick any anchor—historical filings, contract signatures, or shipment departures—then add the same duration with explicit units. Chain outputs into the Date Difference Calculator when you must reconcile inclusive versus exclusive endpoints.",
    },
  ];
}

