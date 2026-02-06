export type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
  weekday: number;
};

export type ContributionWeek = {
  firstDay: string;
  contributionDays: ContributionDay[];
};

export type ContributionMonth = {
  name: string;
  firstDay: string;
  totalWeeks: number;
  year: number;
};

export type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
  months: ContributionMonth[];
};