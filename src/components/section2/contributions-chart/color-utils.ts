// GitHub contribution chart colors
const CONTRIBUTION_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

export function getContributionColor(contributionCount: number): string {
  if (contributionCount === 0) return CONTRIBUTION_COLORS[0];

  // Map contribution levels to colors
  // 1-2: level 1, 3-5: level 2, 6-10: level 3, 11-20: level 4, 21+: level 5
  if (contributionCount <= 2) return CONTRIBUTION_COLORS[1];
  if (contributionCount <= 5) return CONTRIBUTION_COLORS[2];
  if (contributionCount <= 10) return CONTRIBUTION_COLORS[3];
  return CONTRIBUTION_COLORS[4];
}

export { CONTRIBUTION_COLORS };
