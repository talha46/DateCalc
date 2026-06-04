import type { CalculatorEducationalContentProps } from "@/components/CalculatorEducationalContent";

type EducationalBundle = Pick<
  CalculatorEducationalContentProps,
  "howToIntro" | "steps" | "aboutParagraphs" | "extraSections" | "faqItems"
>;

export const ageCalculatorEducational: EducationalBundle = {
  howToIntro:
    "Most forms ask for your date of birth and quietly compute age behind the scenes—but when a rule says “age as of September 1” or “must be 18 on the day of travel,” a rounded year is not enough. This calculator takes a birth date and an optional as-of date, then returns years, months, days, hours, minutes, total days lived, and days until your next birthday. Change either date and the breakdown updates immediately, which is handy when you are checking more than one scenario without redoing mental math.",
  steps: [
    "Enter your date of birth. If you were born near midnight or in a different timezone than where you live now, use the calendar date listed on your birth certificate or passport—that is what legal documents usually expect.",
    "Leave the as-of date blank to measure age as of today, or set a specific day (past or future) when a policy names an eligibility snapshot—for example, “age on the first day of school” or “age on contract signing date.”",
    "Review the full breakdown. Copy any result card you need, or use the share control to preserve the date pair in the URL for later reference.",
  ],
  aboutParagraphs: [
    "Age here is not “current year minus birth year.” The tool walks the calendar the same way people describe milestones: count complete years since the last birthday, then the remaining full months, then leftover days. February lengths and leap years are handled by the underlying date logic rather than by treating every month as thirty days or every year as 365 days flat.",
    "That matters because small rounding errors show up in real decisions. A child born September 2 might be “five” in casual conversation but still four on the school district’s September 1 cutoff. A traveler who turns eighteen at 11 p.m. on departure day may still be seventeen under an airline rule that keys off calendar date, not clock time. Insurance and benefits language often references age bands where months still count.",
    "Total days alive is included because many people find it more tangible than years alone. By your mid-fifties you have crossed roughly twenty thousand days—a number that lands differently in a retirement worksheet than “55.” Hours and minutes are there for lightweight curiosity (social posts, trivia), not for courtroom definitions, but they reinforce that age is elapsed time, not just a label.",
    "The optional as-of field is the feature professionals use most. HR might need “age on date of hire,” genealogists ask “how old was this ancestor when the census was taken,” and parents of premature infants sometimes compare chronological age with corrected age discussed in pediatric follow-ups—always follow your clinician’s definition, but the as-of control lets you model a named day quickly.",
  ],
  extraSections: [
    {
      heading: "Common situations where exact age matters",
      paragraphs: [
        "School enrollment is a classic cutoff problem. A district that requires the child to be five on or before September 1 will reject a September 10 birth even though both kids are “about five” in the neighborhood. Enter the district’s snapshot date as the as-of value and compare months and days, not just years.",
        "Sports leagues and competitions frequently publish age brackets “as of” a tournament date. A player who ages into the next bracket mid-season can be eligible or ineligible by a single day. Setting the tournament Saturday as the as-of date avoids arguing from memory.",
        "Government benefits and licenses—driver permits, Medicare discussions, senior fares—often hinge on reaching a threshold on a particular calendar day. Forms may only show year of birth; when the rule text names a day, this calculator is the sanity check before you submit paperwork.",
      ],
    },
    {
      heading: "Mistakes to avoid when stating your age",
      paragraphs: [
        "Do not multiply years by 365 and call it done—leap years and the exact span since your last birthday will drift. Do not assume Korean age, traditional East Asian reckoning, or “counting birth as year one” unless the form explicitly asks for that system; international documents almost always want Western-style age on a stated date.",
        "Near midnight births, compare the official document date rather than guessing from family stories. If two authorities disagree by one day, align to the document the receiving office will verify.",
      ],
    },
  ],
  faqItems: [
    {
      question: "How does this age calculator decide years, months, and days?",
      answer:
        "It measures elapsed calendar time between your birth date and the as-of date in your local timezone. Whole years are counted only after your birthday has occurred in the as-of year; months and days borrow across uneven month lengths instead of using averages. That is why the result can read 36 years, 2 months, and 21 days rather than a single decimal age.",
    },
    {
      question: "Can I find how old I was on a past date?",
      answer:
        "Yes—set the as-of date to graduation, a wedding, a historical event, or any day you care about. This is useful for narratives (“I was 17 when…”) and for verifying eligibility on an application that names a snapshot day. Leave as-of empty only when you want age right now.",
    },
    {
      question: "Why show hours, minutes, and days until my next birthday?",
      answer:
        "Hours and minutes illustrate that age is a running clock, not a label that changes once a year. Days-until-birthday helps plan parties, renewals, or benefits that trigger on the anniversary. Neither replaces legal definitions that use only calendar dates, but they make planning tangible.",
    },
  ],
};

export const dateDifferenceEducational: EducationalBundle = {
  howToIntro:
    "Need to know how long between two dates for a lease, a refund window, or a project phase? Pick a start and an end, then read total days plus weeks, months, and years in one pass. Two toggles save arguments later: include the end date when your document counts both endpoints, and switch to business days when weekends should not eat your allowance. The numbers refresh as soon as you change a field—no spreadsheet required.",
  steps: [
    "Enter the start date and end date that bound the period you are measuring. For a move-out notice, the start might be the day notice was served; for a trial, the day you installed software.",
    "Decide whether the end date itself counts. Rental and legal notices often use inclusive language (“through the 30th”); pure elapsed-time questions sometimes exclude the last day. Toggle include end date to match the paper.",
    "Turn on business days only when the text says business, working, or banking days. Otherwise leave calendar-day mode and treat weekends as part of the span.",
  ],
  aboutParagraphs: [
    "Calendar-day counting is the default most people need first. It includes Saturdays, Sundays, and public holidays unless a contract narrows the definition. If a store promises a refund within fourteen days of delivery, that is almost always fourteen calendar days unless the receipt says otherwise.",
    "Business-day counting answers a different question: how many weekdays fall between two dates when Saturday and Sunday do not count. Carriers, banks, and courts use that model so a “five-day” promise does not imply a single business week when you start on a Thursday. This page can show business days alongside calendar totals when you enable the toggle; for holiday-specific closures, use the dedicated Business Days Calculator and add your own holiday list.",
    "Month and year figures on the results grid are helpful summaries, but contracts rarely say “you have 1.4 months.” When money or status is on the line, cite total days and confirm inclusive versus exclusive endpoints. Leap Februaries and 31-day months are why mental math that treats every month as thirty days fails.",
    "Sharing matters in disputes. The URL stores your dates and toggles so you can paste a link into an email thread instead of re-explaining which weekend you ignored.",
  ],
  extraSections: [
    {
      heading: "Calendar days vs business days in practice",
      paragraphs: [
        "Imagine a vendor email: “We will respond within ten business days.” If you submit a complaint on Friday, those ten weekdays usually spill into the following week and the week after—while the calendar still advances through two weekends you should not count. The same phrase with “ten calendar days” would expire sooner. Mixing the two without reading the definition is how people miss refund cutoffs by a full week.",
        "Shipping labels exaggerate the confusion. A site may promise delivery in three to five business days while advertising a calendar-date arrival badge. Compare both numbers here when you care about warehouse SLAs versus customer-facing dates.",
      ],
    },
    {
      heading: "Examples people actually look up",
      paragraphs: [
        "Apartment move-out: a lease requires thirty days’ written notice from June 4. Calendar mode with inclusive end date shows whether July 3 or July 4 is the last lawful day—landlords and tenants argue over that single day more often than you would expect.",
        "Software trials: “14-day trial from activation” typically means fourteen calendar days from the install timestamp’s date, not ten weekdays. SaaS invoices that say net-thirty are calendar unless the MSA defines business days.",
        "Immigration and visas: “valid for 180 days from entry” is calendar language; overstaying by one calendar day can have outsized consequences. Always mirror the government handout, not your employer’s payroll calendar.",
        "Warranty and returns: one-year warranties follow anniversary logic; 30-day return windows follow day counts. Crossing February in a leap year adds a day compared with multiplying 365 in your head.",
      ],
    },
  ],
  faqItems: [
    {
      question: "Should I include the end date in the count?",
      answer:
        "Include it when the document uses words like through, inclusive, or counts both the first and last day. Exclude it when you are measuring a pure gap similar to subtracting timestamps. If a lease worked example is provided, match that example before debating theory.",
    },
    {
      question: "When should I enable business days on this page?",
      answer:
        "Enable it when the policy explicitly references business, working, or banking days. For policies that stay silent, assume calendar days unless a lawyer or regulator tells you otherwise. Federal holidays are not removed automatically here—add them on the Business Days Calculator when your institution publishes a closure list.",
    },
    {
      question: "Why do months and years not match my hand calculation?",
      answer:
        "Months have different lengths, and month/year rollups are descriptive breakdowns of the same underlying day span. If two tools disagree, compare total days first—that is the figure most likely to align with a strict reading of the contract.",
    },
  ],
};

export const daysUntilEducational: EducationalBundle = {
  howToIntro:
    "Deadlines feel abstract until you see a clock. Label your event, choose the target date, and watch days, hours, minutes, and seconds count down in real time. Quick buttons preload a few common holidays so you are not typing from memory—still verify religious dates that move with the moon. The page updates every second while it stays open, which is useful for launch nights, exam weeks, or “how long until the permit expires” without refreshing.",
  steps: [
    "Name the countdown something you will recognize later—Court hearing, Product launch, Lease end—so screenshots and shared links make sense to teammates.",
    "Set the target date. Midnight boundaries follow your device’s local timezone; if the official deadline is tied to another zone (airline, broadcast), align to that authority’s date.",
    "Use the preset chips for quick experiments, then fine-tune manually. Copy results when you need a static number for email; leave the tab open when you want a live clock.",
  ],
  aboutParagraphs: [
    "Countdowns answer a psychological question: how soon is soon? Project managers use them to align engineering freezes with marketing beats. Students use them for exam pacing. Families use them for travel and visa appointments where lodging must be booked before tickets prices spike.",
    "Breaking the horizon into days and hours prevents sloppy rounding. Saying “about three weeks” is fine socially; wiring money or filing court papers benefits from knowing whether you have twenty days or twenty-two when weekends sit in the middle.",
    "Preset holidays are starting points, not legal authorities. Islamic observances in particular can shift with moon sighting. Treat buttons as drafts and confirm with local announcements when precision affects time off work or travel.",
    "Pair this tool with date-difference math when you need to measure backward from a deadline. If a regulation says “file at least 30 days before,” compute the latest allowable start on the Date Difference Calculator, then pin the resulting day here for a live reminder.",
  ],
  extraSections: [
    {
      heading: "Where countdowns beat calendar math alone",
      paragraphs: [
        "Product launches: engineering wants a code freeze three days before marketing sends email. A labeled countdown makes the handoff visible to people who do not live in the issue tracker.",
        "Personal finance: final mortgage payment, student loan payoff, or tax installment due dates are single days with high penalties. Seconds are overkill, but watching days tick down beats a sticky note that falls behind the monitor.",
        "Events and ticketing: concerts and conferences sell out in waves. A countdown to on-sale time helps teams coordinate queue tests and support staffing.",
      ],
    },
  ],
  faqItems: [
    {
      question: "Does the timer keep running if I leave the tab open?",
      answer:
        "Yes. It refreshes every second based on your device clock. If the computer sleeps for hours, the display catches up when the tab wakes. For mission-critical cutoffs, still set a backup reminder—browsers throttle background tabs.",
    },
    {
      question: "Are the holiday shortcut dates guaranteed?",
      answer:
        "No. They are convenience presets for common Western and widely observed dates. Eid, Diwali, and other lunar or regional calendars can move. Use authoritative calendars for time off requests and travel bookings.",
    },
    {
      question: "Why might my countdown differ from a friend’s?",
      answer:
        "Timezones split the calendar near midnight. Two people targeting “midnight on the 15th” in different cities can see different remaining hours. Match the timezone named in your ticket, contract, or court order.",
    },
  ],
};

export const businessDaysEducational: EducationalBundle = {
  howToIntro:
    "When a contract says “five business days,” weekends are supposed to be invisible—but holidays are not universal. Enter a start and end date, optionally tag each holiday your office actually closes, and read a weekday-only total. This is the calculator to open when a bank, insurer, or judge counts Monday–Friday and you need to know whether a Friday submission pushes the clock to the following week.",
  steps: [
    "Choose the start and end of the window named in your notice, policy, or SLA. If the document says “from the date of receipt,” use the receipt date—not the day you discovered the email.",
    "Add holidays your organization observes. Federal lists help banks; your startup might take different days off. Each holiday you add is removed from the business-day tally.",
    "Compare the business-day total with a calendar-day count on the Date Difference Calculator when the other side might be counting differently. If the gap is more than two days, clarify in writing.",
  ],
  aboutParagraphs: [
    "A business day usually means Monday through Friday in U.S. commercial language, excluding Saturday and Sunday. It does not automatically exclude Thanksgiving unless your definition says so—which is why this tool lets you subtract explicit holiday dates instead of guessing a federal chart that your employer might not follow.",
    "Financial regulations made business-day language common. ACH holds, wire cutoffs, and funds-availability disclosures reference Federal Reserve business days. Courts layer state holiday rules on top of weekday counting. A filing due in “three business days” after a Tuesday service hits Friday; after a Thursday service it often lands Wednesday of the next week.",
    "Logistics quotes business-day transit separately from calendar delivery promises. A carrier’s “five business days” starting Thursday can arrive Thursday of the following week while nine calendar days elapse—customers who count calendar days feel lied to even when the carrier met its definition.",
    "HR uses business days for internal review periods (“respond within five business days”) but calendar days for benefits that follow statutes. Read each clause independently; mixing models in one email thread causes expensive confusion.",
  ],
  extraSections: [
    {
      heading: "Why five business days is not one calendar week",
      paragraphs: [
        "One calendar week is always seven days. Five business days are five weekdays—often Monday through Friday of the same week only if you start on Monday. Start on Wednesday and five business days run through Tuesday of the next week, crossing a weekend that does not count even though you lived through it.",
        "Start on Friday and five business days typically means Friday plus Monday through Thursday—nine calendar days on the ground. That is normal, not a delay, under business-day wording.",
      ],
    },
    {
      heading: "Scenarios worth modeling before you commit",
      paragraphs: [
        "Wire release language: “Funds available within two business days” after a Friday deposit often means Tuesday, not Sunday. Model Friday as start with Monday’s holiday if your bank is closed.",
        "Insurance acknowledgments: carriers sometimes promise responses in ten business days. Add state holidays the home office observes even if your branch stayed open.",
        "Court responses: local rules may define business days and extend deadlines when holidays abut weekends. When stakes are high, confirm with counsel; use this calculator as arithmetic, not legal advice.",
        "Vendor SLAs: a software outage ticket opened Thursday before a three-day weekend can breach a “resolve in five business days” clause faster than managers expect—run the dates before you promise executives a fix date.",
      ],
    },
  ],
  faqItems: [
    {
      question: "What exactly counts as a business day here?",
      answer:
        "Monday through Friday between your selected dates, minus any holiday dates you explicitly add. Saturdays and Sundays never count. If you need calendar days including weekends, use the Date Difference Calculator instead.",
    },
    {
      question: "How do I handle a floating holiday like Thanksgiving?",
      answer:
        "Calculate the date for that year (U.S. Thanksgiving is the fourth Thursday in November) and add it with the holiday picker. The chip list lets you remove a date if you added it by mistake.",
    },
    {
      question: "Why not auto-fill federal holidays for me?",
      answer:
        "Employers, states, and countries disagree on observances. Auto-removing the wrong holiday is worse than asking you to tag the closures your policy actually recognizes. Banks, courts, and factories each publish their own calendars.",
    },
  ],
};

export const birthdayCalculatorEducational: EducationalBundle = {
  howToIntro:
    "Beyond how many years you have lived, birthdays carry trivia people actually repeat: weekday born, zodiac label, numerology-style life path digit, the calendar date of your next birthday, and a running count of seconds since birth. Enter a birth date once and scan the cards—useful for party icebreakers, genealogy notes, or checking whether your next birthday lands on a weekend.",
  steps: [
    "Pick the birth date shown on your ID if you are quoting something official; pick the family-celebration date only when you know it differs and you are doing informal trivia.",
    "Read weekday and zodiac for storytelling; treat life path numbers as reflective prompts, not predictions.",
    "Watch seconds-old tick upward if the page stays open—fun for social posts, not for legal age proof.",
  ],
  aboutParagraphs: [
    "Weekday-of-birth is surprisingly memorable in family lore (“Dad was born on a Tuesday during a snowstorm”). It also helps genealogists align census records when only partial dates appear.",
    "Western zodiac signs divide the tropical year into twelve slices by the Sun’s position. Horoscopes are cultural entertainment; the calculator labels the sign tied to your calendar birth date using common tropical boundaries.",
    "Life path numbers come from numerology: digits of the birth date reduce through repeated sums until you reach a single digit or a master number in some schools. Treat the output as conversation, not diagnosis.",
    "Upcoming birthday and seconds-old pair well with the main Age Calculator when you need both ceremony planning and formal years-months-days for paperwork.",
  ],
  extraSections: [
    {
      heading: "When this page helps more than a plain age tool",
      paragraphs: [
        "Scrapbooks and speeches: mention weekday and zodiac for color without opening separate reference sites.",
        "Classroom activities: students compare seconds lived to dramatize exponential growth—always supervise what they share online.",
        "Leap-day births: if you were born February 29, upcoming birthday displays may show February 28 in non-leap years depending on how platforms observe it; verify against local custom before booking venues.",
      ],
    },
  ],
  faqItems: [
    {
      question: "Is the zodiac sign astronomically precise?",
      answer:
        "It follows common tropical zodiac date ranges used in horoscopes, not a full astronomical ephemeris. Precession shifted constellations over millennia; mainstream sun-sign lists ignore that shift by design.",
    },
    {
      question: "Why do seconds old keep increasing?",
      answer:
        "The page recalculates against the current clock. It is a live counter, not a frozen snapshot. Refresh or revisit for a new snapshot if you need a fixed number for a post.",
    },
    {
      question: "Should I use this output on government forms?",
      answer:
        "No. Use the Age Calculator for years-months-days tied to eligibility. Use this page for supplemental trivia and planning the next celebration date.",
    },
  ],
};

export const weeksBetweenDatesEducational: EducationalBundle = {
  howToIntro:
    "Some schedules speak in weeks—pregnancy checklists, agile sprints, training blocks—while contracts still store calendar dates. Enter two endpoints and read full weeks plus leftover days instead of mentally dividing by seven and losing the remainder.",
  steps: [
    "Set the earlier date as start and the later as end so the breakdown reads forward in time.",
    "Check full weeks for sprint or gestational milestones; use remaining days when a protocol says “32 weeks and 4 days.”",
    "Jump to the Date Difference Calculator if the stakeholder quotes months or raw calendar days instead.",
  ],
  aboutParagraphs: [
    "Full weeks are whole seven-day blocks between your dates; remaining days are the tail after those blocks. That mirrors how clinicians describe pregnancy length and how coaches plan taper weeks without pretending every month has four neat weeks.",
    "Project burn charts often think in weeks while finance thinks in months. Publishing both week and day remainders prevents someone from rounding 44 days down to “six weeks” when the plan needed six weeks plus two days of buffer.",
    "Inclusive versus exclusive endpoints still apply. Agile teams sometimes treat sprint boundaries as half-open intervals; legal notices may count both start and end days. When two departments disagree, show them both representations.",
  ],
  extraSections: [
    {
      heading: "Fields that default to week language",
      paragraphs: [
        "Obstetrics: guidelines reference gestational age in weeks; leftover days matter near term decisions. This tool does not replace medical dating by ultrasound—follow your clinic’s chart.",
        "Software delivery: a PI might schedule seven two-week sprints; mapping calendar start/end dates to “14 full weeks” helps capacity planning.",
        "Fitness mesocycles: many programs run 8–12 week blocks. Aligning block end to a calendar race day avoids off-by-one recovery weeks.",
      ],
    },
  ],
  faqItems: [
    {
      question: "Is this the same as dividing total days by seven?",
      answer:
        "Arithmetic division gives a similar number but hides remainder semantics. Integer weeks plus explicit remaining days match how people discuss partial weeks in clinics and sprints.",
    },
    {
      question: "Does it skip weekends?",
      answer:
        "No. It counts calendar weeks unless you separately analyze business days elsewhere. A “week” here is seven consecutive calendar days in the span.",
    },
    {
      question: "Can I share the date range?",
      answer:
        "Yes. The URL encodes your start and end values so teammates see the same inputs without retyping.",
    },
  ],
};

export const addDaysToDateEducational: EducationalBundle = {
  howToIntro:
    "Start on a known date—purchase, filing, surgery, hire—and roll forward or backward by days, weeks, months, or years. Negative numbers subtract time, which is how you back into “latest start date to still meet a deadline.” The answer includes the resulting calendar date and weekday so you can compare against a PDF notice without counting squares on a wall calendar.",
  steps: [
    "Anchor the starting date: delivery day for a return policy, grant award date for reporting, signature date for a contract.",
    "Enter the offset and pick the unit named in the document—do not substitute thirty days when the text says one calendar month.",
    "Read the landing date and weekday; cross-check February and month-end anchors if your span crosses a short month.",
  ],
  aboutParagraphs: [
    "Adding months respects month-length quirks: January 31 plus one month becomes the last day of February in many systems, not an error. That matches bank “same day each month” scheduling more than adding thirty flat days.",
    "Visa and benefits letters often say “within 90 days of notice.” Anchor the notice date here instead of guessing three months on a wall calendar.",
    "Warranties may say one year from purchase while returns say thirty days from delivery—different anchors, same tool. Pick the correct start date before arguing about the result.",
    "Project planners chain offsets: design complete plus ten business days (check Business Days Calculator) versus marketing launch plus three calendar months (use month unit here).",
  ],
  extraSections: [
    {
      heading: "When days and months diverge",
      paragraphs: [
        "Thirty days from March 15 lands mid-April; one month from March 15 lands April 15. Legal drafts sometimes use the words interchangeably by mistake—run both if the contract is ambiguous.",
        "Leap years: adding one year across February 29 birthdays or contract anniversaries needs the year that actually contains February 29. Pair with the Leap Year Calculator when February is in play.",
      ],
    },
  ],
  faqItems: [
    {
      question: "How do negative values work?",
      answer:
        "They subtract along the chosen unit. Useful for back-planning: if the filing must arrive by the 30th, subtract the required lead time from that date to see the latest day you can start gathering signatures.",
    },
    {
      question: "Why did adding one month not equal adding 30 days?",
      answer:
        "Months have different lengths. Month-based addition tries to preserve the day-of-month when possible; day-based addition marches in 24-hour steps. Contracts may specify which interpretation governs.",
    },
    {
      question: "Which preset pages overlap with this tool?",
      answer:
        "Shortcuts like 30 days from today fix today as the anchor. Use this calculator when the anchor is any other date or when you need weeks, months, or years instead of only days.",
    },
  ],
};

export const leapYearEducational: EducationalBundle = {
  howToIntro:
    "Type any year to see if it is a leap year under Gregorian rules, how many days the year contains, and the nearest leap years before and after. Handy when a contract crosses February, when you are debugging date code, or when a friend born on the 29th jokes about being “four years old.”",
  steps: [
    "Enter the year you are researching—tax year, birth year, release year of a software product.",
    "Read yes/no plus previous and next leap years to orient long spans quickly.",
    "Remember the century exception: years divisible by 100 are not leap years unless divisible by 400.",
  ],
  aboutParagraphs: [
    "Earth’s orbit is about 365.2422 days. A calendar with only 365-day years would drift seasons over centuries. Inserting February 29 in most years divisible by four keeps solstices aligned with picnic weather.",
    "The Gregorian tweak skips most century years (1900 no, 2000 yes) to fix overshoot from leap-every-four alone. Spreadsheet and SQL bugs often come from treating every fourth year as leap without the 100/400 nuance.",
    "Leap day affects age and anniversary math when policies say “annual” but February has no 29 in common years. Systems pick February 28 or March 1 for observance—humans should confirm which rule applies.",
    "Historians still translate Julian versus Gregorian dates for old records; this tool applies modern Gregorian rules forward and backward for mechanical checks, not archival diplomacy.",
  ],
  extraSections: [
    {
      heading: "Leap year facts that show up in support tickets",
      paragraphs: [
        "Payroll and interest systems that hard-code 365-day years mis-accrue interest in 366-day years unless they include February 29 in day-count conventions.",
        "Product trials advertised as “365 days” differ from “one year” when the year is a leap year—customers notice an extra day.",
        "Famous leap-day births (Ja Rule, Tony Robbins, Dinah Shore) highlight that celebration days and legal anniversaries can diverge in off-years.",
      ],
    },
  ],
  faqItems: [
    {
      question: "Why was 2000 a leap year but 1900 was not?",
      answer:
        "1900 is divisible by 4 and 100 but not 400. 2000 is divisible by 400. That exception keeps the calendar within about a day of the solar year over long horizons.",
    },
    {
      question: "Does this tool change historical dates before 1582?",
      answer:
        "It applies Gregorian leap rules mechanically. Documents from regions that had not adopted the reform yet need historian-grade conversion, not a quick web check.",
    },
    {
      question: "How does leap status interact with adding dates?",
      answer:
        "Crossing February in a leap year adds a day compared with a common year. When you add one year to a February 29 anchor, verify whether your bank or contract uses February 28 or March 1 in non-leap years.",
    },
  ],
};
