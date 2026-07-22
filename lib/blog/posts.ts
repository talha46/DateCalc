export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
};

/** Reference date for "days until" figures in the 2026 holidays article */
export const BLOG_PUBLISH_DATE = new Date(2026, 5, 4);

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-calculate-age-manually",
    title: "How to Calculate Your Exact Age Manually",
    description:
      "Learn how to work out your age in years, months, and days by hand—with examples, cultural differences like Korean age, and common mistakes to avoid.",
    publishedAt: "2026-06-04",
    excerpt:
      "A practical walkthrough for counting age on paper, why total days lived climbs faster than you expect, and when to trust a calculator instead.",
  },
  {
    slug: "how-many-days-between-dates",
    title: "How to Calculate Days Between Two Dates",
    description:
      "Calendar days vs business days, manual counting tricks, and why contracts lean on 30/60/90-day windows—with real deadline examples.",
    publishedAt: "2026-06-04",
    excerpt:
      "From notice periods to visa validity: how to count days between dates without guessing, and when weekends change the answer.",
  },
  {
    slug: "what-is-a-leap-year",
    title: "What Is a Leap Year and Why Do We Have Them?",
    description:
      "Why Earth’s orbit forces leap days, the 400-year rule, February 29 birthdays, and how an extra day shifts age and contract math.",
    publishedAt: "2026-06-04",
    excerpt:
      "The science and history behind leap years—from Julian reforms to leaplings—and what to watch for when dates cross February.",
  },
  {
    slug: "how-to-count-business-days",
    title: "How to Count Business Days Between Two Dates",
    description:
      "What banks, courts, and contracts mean by business days, why five business days is not one week, and how holidays change the count.",
    publishedAt: "2026-06-04",
    excerpt:
      "Weekday-only deadlines explained with loan, shipping, and legal examples—plus when to add your own holiday list.",
  },
  {
    slug: "days-until-major-holidays-2026",
    title: "Days Until Major Holidays in 2026",
    description:
      "2026 dates and day counts for Christmas, New Year, Halloween, Thanksgiving, Diwali, and Eid—measured from early June 2026.",
    publishedAt: "2026-06-04",
    excerpt:
      "A quick 2026 holiday calendar with exact dates and how many days remain from June 4, 2026—plus links to live countdown tools.",
  },
  {
    slug: "how-to-calculate-notice-period",
    title: "How to Calculate a Notice Period End Date",
    description:
      "Notice periods explained: calendar days vs business days, whether the notice day counts, month-length differences, and how to find the exact end date.",
    publishedAt: "2026-07-22",
    excerpt:
      "Contract says 30 days' notice — what is your last day? A step-by-step guide covering counting conventions, month-length traps, and which DateCalc tool to use.",
  },
];

export const blogPostBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<
  string,
  BlogPost | undefined
>;

export const blogRoutes = ["/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)];
