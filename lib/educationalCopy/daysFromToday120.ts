import type { EducationalSection } from "@/components/CalculatorEducationalContent";
import type { FaqItem } from "@/components/FaqSection";
import type { DaysFromTodayEducationalBase } from "@/lib/educationalCopy/daysFromToday";

export function getDays120EducationalBase(): DaysFromTodayEducationalBase {
  return {
    howToIntro:
      "One hundred twenty calendar days is a span people encounter when agencies quote processing times, insurers impose waiting periods, or project charters set phase gates roughly four months out. This page rolls forward exactly 120 midnights from today in your local timezone and prints the landing weekday, weeks equivalent, and month drift so you can paste a concrete date into email instead of saying “about four months.”",
    steps: [
      "Read the large resulting date at the top—that is the calendar day that occurs 120 full days after today on your device clock.",
      "Check weekday and weeks tiles if you need to align with payroll cycles, sprint reviews, or travel that keys off weekends.",
      "When your anchor is not today—visa receipt date, contract signature, inspection approval—open the Add Days to Date Calculator, enter that start date, and add 120 days there.",
    ],
    aboutParagraphs: [
      "One hundred twenty days is not the same as “four months” on a wall calendar. Four calendar months from June 4 might land on October 4, while 120 days lands on October 2 in the same year—small gaps become arguments in legal threads. When a PDF says “120 calendar days,” count days; when it says “four months,” confirm whether the author meant calendar months instead.",
      "The figure appears often enough that immigration forums, mortgage coordinators, and PMOs treat it as a planning bucket: long enough for substantive work, short enough to stay inside one fiscal quarter in many companies. Mapping it to an absolute date prevents teams from discovering weekend skew only at the deadline.",
      "If your policy excludes weekends, 120 calendar days still include every Saturday and Sunday in the span. Switch to the Business Days Calculator when the text says business or working days. If it says calendar days, trust the headline date here.",
      "Bookmarking helps: tomorrow both “today” and the projection advance. For a frozen anchor, use Add Days to Date and share the URL so collaborators see the same inputs.",
    ],
  };
}

export function getDays120ExtraSections(): EducationalSection[] {
  return [
    {
      heading: "What is 120 days from today used for?",
      paragraphs: [
        "Government and visa workflows sometimes publish estimates like “decision within 120 days of receipt.” That language almost always means calendar days from a named receipt or filing date—not four neat months and not business days unless stated separately. Applicants use a fixed day count to set document follow-ups and employer letters without guessing month lengths.",
        "Corporate projects split execution into phase gates: discovery, build, hardening. A 120-day phase gives leadership a checkpoint before the next funding tranche. Translating “Phase 2 ends in 120 days” into a calendar end date keeps procurement and legal reviews on the same Gantt line.",
        "Insurance and benefits impose waiting or elimination periods—“coverage begins after 120 days of employment” or “pre-existing condition waiting period.” HR needs the calendar end date for enrollment systems, not a verbal quarter.",
        "Residential real estate chains reference inspection repair windows, rate-lock extensions, or backup contract deadlines measured in days. A buyer told they have 120 days to close a renovation loop needs the exact date to schedule contractors before weather windows close.",
      ],
    },
    {
      heading: "Examples: visa, projects, insurance, and mortgage timing",
      paragraphs: [
        "Visa and status processing: some employment-based or adjustment-of-status estimates cite 120-day processing targets from biometrics or receipt notices. Track from the date on the notice, not from today, if your letter names a different anchor—use Add Days to Date with that receipt day.",
        "Project deadlines: SaaS implementations sometimes contract a 120-day go-live from kickoff. Program managers align security reviews and data migration weekends once the end date is fixed.",
        "Insurance waiting periods: short-term disability or plan eligibility may begin after 120 consecutive days. Calendar counting includes weekends; verify the policy does not mean 120 business days.",
        "Mortgage and closing: rate locks, short-sale approvals, or construction draw schedules occasionally use 120-day horizons. Loan officers coordinate appraisal and title updates against the computed date rather than “around four months.”",
      ],
    },
  ];
}

export function buildDays120Faq(
  formattedLongDate: string,
  weeksDecimal: string,
): FaqItem[] {
  return [
    {
      question: "What date is 120 days from today?",
      answer: `One hundred twenty calendar days from today lands on ${formattedLongDate} in your local timezone. That answer updates when the calendar rolls forward—refresh tomorrow if you anchored on “today.” For a fixed filing or birth date, use the Add Days to Date Calculator instead.`,
    },
    {
      question: "Is 120 days the same as four months?",
      answer:
        "Often close in conversation, but not identical on the calendar. Four months from a given day depends on which months you cross (28-, 30-, and 31-day lengths). One hundred twenty days is always exactly 120 midnights forward. Contracts that say “120 calendar days” should be calculated in days; “four months” may follow different rules—read the definitions article on our blog if both appear.",
    },
    {
      question: "How many weeks is 120 days?",
      answer: `${weeksDecimal} weeks when dividing by seven, plus you still have leftover days unless 120 divides evenly (it does not—120 ÷ 7 leaves a remainder of 1). Use weeks for sprint metaphors and total days for legal deadlines.`,
    },
    {
      question: "Do visa or immigration offices mean business days for 120 days?",
      answer:
        "Usually calendar days unless the form says business or working days. U.S. federal-style notices frequently use calendar days for response windows. If weekends should not count, run the same start and end through the Business Days Calculator and compare totals before you rely on the headline date here.",
    },
    {
      question: "Can I calculate 120 days from a date other than today?",
      answer:
        "Yes. Open the Add Days to Date Calculator, set your anchor (notice date, hire date, closing date), enter 120, and choose days as the unit. Chain into the Date Difference Calculator if you must confirm inclusive counting or compare against a second deadline. For business-day-only policies, use the Business Days Calculator with the same start and end dates.",
    },
  ];
}
