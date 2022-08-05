export type RangeType = [number, number]

export type VitalStatisticsAsObject = {
  OG: string,
  IBUs: string,
  FG: string,
  SRM: string,
  ABV: string,
}

export type VitalStatistics = {
  OG: RangeType,
  IBUs: RangeType,
  FG: RangeType,
  SRM: RangeType,
  ABV: RangeType,
}

export type VitalStatisticsKeys = "OG" | "IBUs" | "FG" | "SRM" | "ABV"

export type BeerStyleProperties = {
  overallImpression: string,
  aroma: string,
  appearance: string,
  flavor: string,
  mouthfeel: string,
  comments: string,
  history: string,
  characteristicIngredients: string,
  styleComparison: string,
  entryInstructions?: string,
  vitalStatistics: VitalStatistics,
  specialStatistics?: Array<Partial<VitalStatistics>>,
  commercialExamples: string,
  tags: string[],
  currentlyDefinedTypes?: string
}

export type BeerStyle = {
  title: string,
  description?: string,
  properties: BeerStyleProperties
}

export type BeerCategory = {
  title: string,
  description: string,
  styles: BeerStyle[]
}