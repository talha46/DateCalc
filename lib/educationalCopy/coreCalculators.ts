import type { CalculatorEducationalContentProps } from "@/components/CalculatorEducationalContent";

type EducationalBundle = Pick<
  CalculatorEducationalContentProps,
  "howToIntro" | "steps" | "aboutParagraphs" | "faqItems"
>;

export const ageCalculatorEducational: EducationalBundle = {
  howToIntro:
    "This age calculator turns two calendar dates into a precise elapsed-time breakdown so you can report age beyond whole years. Pick your birth date first, then optionally change the “as of” date when you need age on a milestone, deadline, or historical day. Results appear instantly as you adjust inputs—nothing else is required.",
  steps: [
    "Enter your date of birth using the date picker (use the calendar control if your browser provides one).",
    "Optionally set an “as of” date if you need age on a specific day; leave it blank to use today’s date automatically.",
    "Read the breakdown for years, months, days, hours, minutes, total days lived, and how many days remain until your next birthday.",
  ],
  aboutParagraphs: [
    "Age is computed by measuring elapsed calendar time between midnight anchors for your birth date and the as-of date in your local timezone. That means the tool counts full calendar months and remaining days after complete months, rather than averaging month lengths or treating every month as 30 days. The approach mirrors how people normally describe age in conversation while remaining precise enough for milestones like birthdays, anniversaries, and eligibility checks.",
    "Exact age matters whenever subtle timing affects outcomes: school enrollment cutoffs, sports divisions, legal thresholds, medical dosing by age bands, insurance quotes, employment eligibility, and prize competitions that define age “as of” a posted date. Saying “25 years old” is convenient, but planners often need the remainder in months and days to compare against notices that spell out deadlines or qualifying windows.",
    "Typical uses include calculating age for forms and profiles, figuring “how old was I when…” by setting a past as-of date, preparing speeches or scrapbook milestones, tracking childhood development milestones, and sharing fun facts like total days alive. Because the tool includes hours and minutes, it also supports lightweight storytelling around birthdays without editing spreadsheets manually.",
  ],
  faqItems: [
    {
      question: "How does this age calculator decide my age?",
      answer:
        "It measures the time between your birth date and the as-of date using calendar-aware logic: complete years, then complete months within the remainder, then leftover days, plus finer units like hours and minutes based on the underlying timestamps. This avoids crude shortcuts like dividing total days by 365.25 when you need results aligned with how humans count birthdays.",
    },
    {
      question: "Can I calculate my age as of a past or future date?",
      answer:
        "Yes. Change the optional as-of date to any valid day you want to measure against—past dates answer “how old was I on graduation day,” while future dates help with projected eligibility or planned milestones. Leave the field empty to anchor calculations to today, which updates whenever you revisit the page.",
    },
    {
      question: "Is timezone handled, and why does it matter here?",
      answer:
        "Calculations use your browser’s local timezone because daily clocks—and birthday transitions—depend on where you are at midnight. If you compare notes with someone far away on the same calendar date, small differences near midnight are normal; pick consistent dates for forms rather than relying on UTC-only math.",
    },
  ],
};

export const dateDifferenceEducational: EducationalBundle = {
  howToIntro:
    "Use this tool whenever you need the span between two dates expressed as total days plus weeks, months, and years for planning or validation. Enter a start and end date, decide whether the last day should count, and optionally switch to business-day counting when weekends should disappear from your totals.",
  steps: [
    "Choose the starting date and ending date that bound the period you care about (contracts, trips, projects, or school terms).",
    "Toggle “include end date” when your policy or agreement counts both the first and last calendar day in the range.",
    "Enable business-days mode if you need weekday-only counts for SLAs or office schedules, then read totals alongside optional holiday exclusions elsewhere if needed.",
  ],
  aboutParagraphs: [
    "Calendar-day differences count every day on the wall calendar between two dates, including weekends and holidays. Business days (often called working days) typically mean Monday through Friday in many Western schedules, excluding weekends and sometimes public holidays depending on your employer, jurisdiction, or carrier. That distinction matters because legal notice periods, shipping estimates, and court deadlines regularly specify one style or the other—mixing them silently can push you past an important cutoff.",
    "Many contracts phrase deadlines as “within 30 calendar days” or “within 10 business days.” Calendar-day windows move faster because Saturdays and Sundays still decrement the counter; business-day windows stretch across weekends and sometimes holidays. When two parties interpret the same phrase differently, date math becomes the quickest ground truth check—provided you align on whether the start or end day counts inclusively.",
    "Common use cases include verifying apartment move-out windows, software trial lengths, return policies, payroll cycles, warranty periods, visa appointment spacing, research study visits, and sports registration ranges. If your workflow excludes holidays beyond weekends, pair date-difference totals with your organization’s official holiday calendar rather than assuming federal observances alone.",
  ],
  faqItems: [
    {
      question: "What is the difference between calendar days and business days here?",
      answer:
        "Calendar-day mode counts every day between your dates (subject to your inclusive/exclusive setting). Business-day mode counts Monday–Friday within the span, skipping weekends; combine this tool’s outputs with your own holiday list when statutes or SLAs exclude specific public holidays.",
    },
    {
      question: "When should I include the end date?",
      answer:
        "Include it when language like “through,” “inclusive,” or “both dates count” applies—leases and notices sometimes specify inclusive counting. Exclude it when measuring pure spans similar to subtraction between timestamps or when policies mirror “after day one” conventions—when unsure, confirm against your document’s worked example.",
    },
    {
      question: "Why might totals differ from a mental estimate?",
      answer:
        "Months have unequal lengths, leap years add February days, and inclusive versus exclusive endpoints shift totals by one. Different tools also vary on whether month/year rollups are approximate breakdowns versus strict calendar-month arithmetic—use total days when you need an exact bridge between distant dates.",
    },
  ],
};

export const daysUntilEducational: EducationalBundle = {
  howToIntro:
    "This countdown turns any future target into days, hours, minutes, and seconds so you can visualize proximity to launches, celebrations, or compliance deadlines. Label the event for clarity, pick the exact target date, or tap a quick preset when you want to jump to common holidays without typing.",
  steps: [
    "Give your countdown a friendly label so copied snippets and screenshots stay recognizable when you share them.",
    "Select the precise target date—your browser supplies timezone-aware midnight transitions automatically.",
    "Watch the live counters tick downward every second; adjust the label or date anytime without refreshing manually.",
  ],
  aboutParagraphs: [
    "Countdowns convert abstract calendar targets into tangible urgency: seeing days remaining helps teams prioritize backlog work, families coordinate travel, and individuals pace savings or study plans. Breaking time into multiple units matters because humans perceive “three weeks” differently than “504 hours,” even though both describe the same horizon.",
    "Event planners pair countdowns with milestones—booking venues early when hundreds of days remain, shifting to daily tasks inside the final week. Product teams align launch countdowns with marketing beats, freeze windows, and compliance submissions that must precede public release. Personal finance workflows use countdowns to schedule final mortgage payments, graduation dates, or retirement targets.",
    "Deadline tracking benefits from seconds-level granularity when automation hooks are sensitive near cutoffs—registration systems closing at midnight, auction timers, or broadcast slots. Pair countdown outputs with named labels so stakeholders know which obligation you reference when multiple deadlines overlap during busy seasons.",
  ],
  faqItems: [
    {
      question: "Does the countdown update automatically?",
      answer:
        "Yes. The component refreshes every second using your device clock, so leaving the page open keeps the timer current without manual reloads. If you suspend your laptop or lose focus for long stretches, expect a quick catch-up when the tab wakes.",
    },
    {
      question: "Can I reuse holiday shortcuts instead of typing dates?",
      answer:
        "Quick buttons preload widely observed holidays for convenience, but civic and religious calendars shift—Islamic holidays especially depend on moon sighting communities. Treat preset religious dates as planning aids and verify against authoritative announcements when precision matters.",
    },
    {
      question: "Why might my countdown differ from someone else’s?",
      answer:
        "Timezone offsets split the calendar near midnight, so two people celebrating “the same day” might disagree about remaining seconds around boundaries. Align on the timezone assumed by your official deadline source—venue contracts, airline itineraries, or regulatory postings—when coordinating remotely.",
    },
  ],
};

export const businessDaysEducational: EducationalBundle = {
  howToIntro:
    "Measure Monday-through-Friday spans between two dates when weekends should not consume your allowance of working days. Optional holiday dates remove additional non-working days—useful when corporate closures or statutory observances differ from generic weekend skipping alone.",
  steps: [
    "Enter the inclusive start and end dates representing your SLA window, notice period, or shipping timeline.",
    "Add each holiday date your organization treats as closed using the optional holiday picker plus list chips.",
    "Review the single business-day total that excludes weekends and every holiday you explicitly recorded.",
  ],
  aboutParagraphs: [
    "A business day typically means a weekday when normal commerce occurs—often Monday to Friday—while Saturdays and Sundays fall outside that cadence in many countries. Financial institutions, government offices, and logistics carriers frequently cite business-day turnaround exactly because weekends would distort expectations if counted blindly. Some industries adopt Sunday–Thursday patterns regionally, so align terminology with your counterpart before debating totals.",
    "Contracts rely on business-day math for escrow funding windows, insurance claim acknowledgments, arbitration responses, and vendor penalties. Shipping carriers quote business days separately from transit calendars because warehouses may sit idle weekends even while trucks move. HR teams interpret paid-time-off policies using business days so partial weeks reflect actual shifts scheduled.",
    "Because statutory holidays vary by nation, province, and employer, this calculator lets you subtract bespoke closures rather than guessing a universal federal list. Banks observing Juneteenth or regional festivals can mirror reality precisely—critical when missing even one removed day invalidates compliance.",
  ],
  faqItems: [
    {
      question: "What counts as a business day in this tool?",
      answer:
        "Weekdays Monday through Friday inside your selected date span count toward the total; Saturdays and Sundays never count. Provide explicit holiday dates to exclude additional closures—otherwise only weekends are removed.",
    },
    {
      question: "How do I add or remove custom holidays?",
      answer:
        "Pick a holiday date, click Add Holiday to append it to the removable chip list, and tap any chip to delete mistaken entries. Holidays are interpreted using the same local-date semantics as your start and end inputs.",
    },
    {
      question: "Why doesn’t this guess public holidays automatically?",
      answer:
        "Observances shift by jurisdiction and sometimes by employer discretion—automatic guessing risks silent errors near statutory debates or union contracts. Explicit holiday tags keep accountability aligned with your official calendar.",
    },
  ],
};

export const birthdayCalculatorEducational: EducationalBundle = {
  howToIntro:
    "Explore fun birthday math—weekday you were born, zodiac grouping, numerology-style life path digits, upcoming celebration timing, and even how many seconds you have been alive for trivia threads. Enter once and skim cards without exporting spreadsheets.",
  steps: [
    "Select your complete birth date using the date picker so downstream symbolism references the correct calendar day.",
    "Glance at cards showing weekday, zodiac label, life path number, upcoming birthday string, and seconds lived.",
    "Share or screenshot responsibly—use authoritative sources for legal identity documents rather than playful numerology outputs.",
  ],
  aboutParagraphs: [
    "Western zodiac signs partition the tropical year into twelve roughly month-long slices tied to the Sun’s apparent path; each slice inherits symbolic traits used culturally for personality shorthand—not astronomy-grade predictions. People enjoy comparing signs at parties because the categories spark conversation even when individuals interpret them loosely.",
    "Life path numbers come from digit-reduction traditions associated with numerology: birth dates collapse through repeated summing until a single digit (or master numbers in some schools) emerges. Practitioners treat the result as a reflective lens rather than deterministic fate—think journaling prompts rather than verified science.",
    "Knowing your weekday birth anchors memories (“born on a Tuesday”) while upcoming birthday countdowns coordinate surprises. Seconds-old counters dramatize scale for social posts; pairing them with timezone awareness avoids awkward mismatches near midnight during celebrations.",
  ],
  faqItems: [
    {
      question: "Are zodiac and life path results scientific facts?",
      answer:
        "They are cultural and numerological frameworks meant for entertainment or reflection. Astrological signs follow seasonal slices; life path numbers follow traditional reduction recipes—neither replaces medical, legal, or financial advice grounded in verified documentation.",
    },
    {
      question: "Why does “seconds old” change continuously?",
      answer:
        "Seconds increment live based on the ticking clock between your birth instant and now, so values grow while the page stays open. Large integers suit curiosity or novelty contests rather than precise statutory definitions of age.",
    },
    {
      question: "How should I reconcile this with the dedicated Age Calculator?",
      answer:
        "Use the Age Calculator when you need structured years/months/days for milestone tracking or eligibility framing. Use this Birthday Calculator when symbolism, weekday trivia, or playful counters matter more than formal breakdown tables.",
    },
  ],
};

export const weeksBetweenDatesEducational: EducationalBundle = {
  howToIntro:
    "Translate two endpoints into whole seven-day bundles plus leftover days—ideal when milestones measure progress weekly (gestational schedules, agile sprints, training rotations). Supply both dates and read full weeks alongside remainder context immediately.",
  steps: [
    "Enter the earlier boundary date first and the later boundary second so directionality matches your narrative.",
    "Confirm both dates capture the intended calendar day—especially around midnight edits near timezone boundaries.",
    "Interpret full weeks plus remaining days; pair with the Date Difference Calculator when month-based language dominates instead.",
  ],
  aboutParagraphs: [
    "Week-based intervals chunk continuous timelines into repeatable seven-day modules humans track easily—school cycles, payroll cadences, fitness challenges, and agile retrospectives all speak “weeks” naturally. Medical contexts frequently cite gestational age in weeks because fetal development guidelines publish weekly milestones, making leftover days secondary but still logged.",
    "Project planners stack weeks against burn charts: knowing twenty full weeks remain highlights staffing sufficiency differently than saying 140 calendar days when weekends might be non-working. Coaches schedule deload weeks and athletes taper using week counts more than raw day totals.",
    "When bridging legal or contractual phrases referencing weeks, verify inclusive/exclusive endpoints separately—some statutes describe spans inclusively while agile math treats sprint boundaries as half-open intervals. If stakeholders disagree, publish both week counts and raw day counts side by side for clarity.",
  ],
  faqItems: [
    {
      question: "Why show both full weeks and remaining days?",
      answer:
        "Many real-world schedules stack whole weeks but still log stray days—pregnancy tracking and partial sprint spillover being classic examples. Surfacing both prevents rounding seven-day multiples incorrectly when an endpoint lands midweek.",
    },
    {
      question: "How is this different from dividing total days by seven?",
      answer:
        "Integer weeks plus remainder preserve intuitive grouping tied to calendar landmarks; naive division yields similar arithmetic but obscures whether weekends inside the span matter for your policy. Choose the representation that matches your contract language.",
    },
    {
      question: "Can I use this for pregnancy week tracking?",
      answer:
        "It offers mechanical week/day decomposition between two dates you supply. Clinical gestational age follows protocols defined by your care team—always defer to provider guidance when medical decisions hang on timing.",
    },
  ],
};

export const addDaysToDateEducational: EducationalBundle = {
  howToIntro:
    "Start from any anchor date and march forward (or backward with negative amounts) across days, weeks, months, or years. This mirrors mental math people perform for warranties, immigration appointments, or phased rollouts—without hand-counting on wall calendars.",
  steps: [
    "Pick the calendar date that anchors your calculation—activation day, filing date, surgery date, or contract signature.",
    "Enter the numeric offset and choose units (days, weeks, months, years); use negative numbers to subtract time.",
    "Read the resulting calendar date and weekday to confirm against official notices or ticketing systems.",
  ],
  aboutParagraphs: [
    "Adding calendar months or years follows date-picker semantics: month-end anchors snap to the last valid day in shorter months—January 31 plus one month lands in late February rather than throwing errors. That behavior tracks how banking systems schedule recurring transfers when users say “same day next month.”",
    "Warranty expirations often read “one year from purchase” but returns policies sometimes say “30 days from delivery”—both translate cleanly into anchored offsets when you know which timestamp counts. Visa pathways and immigration notices similarly describe filing windows relative to notice dates or entry stamps.",
    "Project managers chain offsets to build Gantt dependencies: design finishes plus ten business days might feed manufacturing, while marketing waits calendar-month boundaries for budget closes. Expressing offsets numerically reduces ambiguity compared to verbal phrases like “early next quarter.”",
  ],
  faqItems: [
    {
      question: "How do negative amounts work?",
      answer:
        "Negative numbers subtract time along the same unit you selected—useful for backtracking from a known deadline to infer the latest start date that preserves buffer. Double-check unit choice because subtracting months versus subtracting thirty days diverges near month ends.",
    },
    {
      question: "Why might adding one month differ from adding thirty days?",
      answer:
        "Calendar months vary in length; rolling forward by months preserves day-of-month intent where possible, while rolling by days counts uniform twenty-four-hour slices. Legal documents sometimes specify which interpretation applies—verify rather than assuming.",
    },
    {
      question: "Can I combine this with leap year checks?",
      answer:
        "Yes—after projecting dates across February boundaries, spot-check February lengths using the Leap Year Calculator when contracts hinge on whether an anniversary exists in a given year.",
    },
  ],
};

export const leapYearEducational: EducationalBundle = {
  howToIntro:
    "Determine whether a Gregorian year includes February 29 and inspect neighboring leap years for storytelling or validation. Enter any positive year to see yes/no output plus previous/next leap anchors and total day counts.",
  steps: [
    "Type the four-digit year you want to audit—historical research, software tests, or birthday curiosity.",
    "Read whether it qualifies as a leap year along with computed neighbors for quick sequencing.",
    "Cross-check unusual centuries mentally: recall that century years must clear extra divisibility hurdles unless they satisfy the 400-year exception.",
  ],
  aboutParagraphs: [
    "Leap years exist because Earth’s orbit lasts roughly 365.2422 solar days while calendars insist on integer day counts. Accumulating fractional days would drift seasons across months over centuries, so leap days rebalance the reckoning—traditionally inserted at February’s end to minimize disruption to festival months Romans cared about.",
    "The Gregorian refinement adds nuance: years divisible by four leap unless divisible by 100, yet years divisible by 400 still leap. That triple rule retired excessive leap days introduced by simpler quadrennial schemes—1700 and 1800 skipped leaps despite being divisible by four, while 2000 leaped because 400 divides evenly.",
    "Famous leap lore includes rare February 29 birthdays (“leaplings”), synchronized proposals folklore on Sadie Hawkins-style traditions, and software bugs when programmers treated February as always twenty-eight days. Astronomers still prefer Julian dates internally while civil calendars polish human readability.",
  ],
  faqItems: [
    {
      question: "Why do century years sometimes skip leap day?",
      answer:
        "Julian-style leap-every-four-years slightly overcorrected solar drift. Gregorian reform subtracted three leap days every four centuries by skipping century years unless divisible by 400—keeping the calendar aligned across millennia without seasonal creep.",
    },
    {
      question: "Does this reflect my locale’s historical calendar?",
      answer:
        "It applies the modern Gregorian leap rule globally for mechanical checks. Countries adopted Gregorian reforms across different years—historians analyzing ancient documents must translate between Julian and Gregorian contexts separately.",
    },
    {
      question: "How does leap status affect date-add calculations?",
      answer:
        "February gains an extra day during leap years, shifting offsets that cross late February. Always verify crossing boundaries when contracts mention annual anniversaries anchored near February ends.",
    },
  ],
};
