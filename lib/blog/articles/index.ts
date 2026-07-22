import type { ComponentType } from "react";
import DaysUntilMajorHolidays2026Article from "@/lib/blog/articles/days-until-major-holidays-2026";
import HowManyDaysBetweenDatesArticle from "@/lib/blog/articles/how-many-days-between-dates";
import HowToCalculateAgeManuallyArticle from "@/lib/blog/articles/how-to-calculate-age-manually";
import HowToCountBusinessDaysArticle from "@/lib/blog/articles/how-to-count-business-days";
import WhatIsALeapYearArticle from "@/lib/blog/articles/what-is-a-leap-year";
import HowToCalculateNoticePeriodArticle from "@/lib/blog/articles/how-to-calculate-notice-period";

export const blogArticleComponents: Record<string, ComponentType> = {
  "how-to-calculate-age-manually": HowToCalculateAgeManuallyArticle,
  "how-many-days-between-dates": HowManyDaysBetweenDatesArticle,
  "what-is-a-leap-year": WhatIsALeapYearArticle,
  "how-to-count-business-days": HowToCountBusinessDaysArticle,
  "days-until-major-holidays-2026": DaysUntilMajorHolidays2026Article,
  "how-to-calculate-notice-period": HowToCalculateNoticePeriodArticle,
};
