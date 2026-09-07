/**
 * Type definitions for the BJCP beer style guidelines data set.
 *
 * Each year's shipped data (`src/<year>/styles.json`) is an array of
 * {@link BeerCategory}; {@link BeerStyles} is the top-level alias.
 */

/** An inclusive `[min, max]` numeric range, e.g. an OG or ABV span. */
export type RangeType = [number, number];

/** The five vital-statistic keys used by every style. */
export type VitalStatisticsKeys = 'OG' | 'IBUs' | 'FG' | 'SRM' | 'ABV';

/** Vital statistics rendered as display strings rather than numeric ranges. */
export type VitalStatisticsAsObject = Record<VitalStatisticsKeys, string>;

/**
 * Vital statistics for a style. Each value is either a numeric {@link RangeType}
 * or a free-text string (used when a style has no meaningful numeric range).
 */
export type VitalStatistics = Record<VitalStatisticsKeys, RangeType | string>;

/**
 * Per-variant vital statistics. Only `25B. Saison` uses this today: the BJCP
 * defines it as a table of strength variants (`table` / `standard` / `super`),
 * so the shared range lives in {@link BeerStyleProperties.vitalStatistics} and
 * the per-variant numbers live here.
 */
export type SpecialStatistics = Partial<Record<VitalStatisticsKeys, Record<string, number[]>>>;

export type BeerStyleProperties = {
  overallImpression: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  comments: string;
  history?: string;
  characteristicIngredients?: string;
  styleComparison?: string;
  entryInstructions?: string;
  vitalStatistics: VitalStatistics;
  specialStatistics?: SpecialStatistics;
  commercialExamples: string;
  tags: string;
  currentlyDefinedTypes?: string;
};

export type BeerStyle = {
  title: string;
  description?: string;
  properties: BeerStyleProperties;
};

export type BeerCategory = {
  title: string;
  description: string;
  styles: BeerStyle[];
};

/** A full data set: every category and its styles for one guideline year. */
export type BeerStyles = BeerCategory[];
