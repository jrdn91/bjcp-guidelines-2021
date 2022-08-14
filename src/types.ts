export type RangeType = [number, number];

export type VitalStatisticsAsObject = {
  OG: string;
  IBUs: string;
  FG: string;
  SRM: string;
  ABV: string;
};

export type VitalStatistics = {
  OG: RangeType | string;
  IBUs: RangeType | string;
  FG: RangeType | string;
  SRM: RangeType | string;
  ABV: RangeType | string;
};

export type VitalStatisticsKeys = 'OG' | 'IBUs' | 'FG' | 'SRM' | 'ABV';

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
  specialStatistics?: Partial<Record<keyof VitalStatistics, Record<string, Array<number>>>>;
  // specialStatistics?: Partial<Record<keyof VitalStatistics, Array<number>>>;
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
