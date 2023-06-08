export const DEFAULT_SPEED_VALUE = 90;
export const DEFAULT_MIN_YEAR = 2020;
export const DEFAULT_MAX_YEAR = 2100;
export const DEFAULT_START_YEAR = 2020;
export const DEFAULT_FINISH_YEAR = 2028;
export const DEFAULT_GDP_EFFECTS = 1604.95703695539;
export const DEFAULT_BUDGET_EFFECTS = 199.570437552098;
export const DEFAULT_CONSTRUCTION_COST = 1278.6;
export const DEFAULT_INTENSITY = 9749;
export const DEFAULT_ELAST_KAPEX_GDP = 0.609811822684167;
export const DEFAULT_ELAST_INTENSITY_GDP = 0.247392699679982;
export const DEFAULT_ELAST_KAPEX_BUDGET = 0.43038023994137;
export const DEFAULT_ELAST_INTENSITY_BUDGET = 0.290008648829851;

export const SPEED_MAP_GDP = new Map<number, number>([
  [DEFAULT_SPEED_VALUE, 0.959130326133631],
  [110, 1],
  [130, 1.04781275833365],
]);
export const SPEED_MAP_BUDGET = new Map<number, number>([
  [DEFAULT_SPEED_VALUE, 0.940114832755423],
  [110, 1],
  [130, 1.06340033818345],
]);
export type GDPEffectsType = (
  speed: number,
  constructionCost: number,
  forecastIntensity: number
) => number;

export const calcGDPEffects: GDPEffectsType = (
  speed,
  constructionCost,
  forecastIntensity
) => {
  const kapexDiff = constructionCost / DEFAULT_CONSTRUCTION_COST;
  const kapexElast = DEFAULT_ELAST_KAPEX_GDP * (kapexDiff - 1) + 1;

  const intensityDiff = forecastIntensity / DEFAULT_INTENSITY;
  const elastIntensity = DEFAULT_ELAST_INTENSITY_GDP * (intensityDiff - 1) + 1;

  return (
    DEFAULT_GDP_EFFECTS *
    kapexElast *
    (SPEED_MAP_GDP.get(speed) ?? DEFAULT_SPEED_VALUE) *
    elastIntensity
  );
};

export type BudgetEffectsType = (
  speed: number,
  constructionCost: number,
  forecastIntensity: number
) => number;

export const calcBudgetEffects: BudgetEffectsType = (
  speed,
  constructionCost,
  forecastIntensity
) => {
  const kapexDiff = constructionCost / DEFAULT_CONSTRUCTION_COST;
  const kapexElast = DEFAULT_ELAST_KAPEX_BUDGET * (kapexDiff - 1) + 1;

  const intensityDiff = forecastIntensity / DEFAULT_INTENSITY;
  const elastIntensity =
    DEFAULT_ELAST_INTENSITY_BUDGET * (intensityDiff - 1) + 1;

  return (
    DEFAULT_BUDGET_EFFECTS *
    kapexElast *
    (SPEED_MAP_BUDGET.get(speed) ?? DEFAULT_SPEED_VALUE) *
    elastIntensity
  );
};
