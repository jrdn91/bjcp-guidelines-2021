import styleData from './styles.json';
import type { BeerStyles } from './types';

export type {
  RangeType,
  VitalStatisticsKeys,
  VitalStatisticsAsObject,
  VitalStatistics,
  SpecialStatistics,
  BeerStyleProperties,
  BeerStyle,
  BeerCategory,
  BeerStyles,
} from './types';

/**
 * `styles.json` is imported as JSON, so TypeScript widens its numeric tuples
 * (`[min, max]`) to `number[]`. This helper loosens {@link RangeType} the same
 * way so the data can be checked against the public types without a cast that
 * would hide real drift (missing fields, wrong value types, bad nesting).
 */
type JsonWidened<T> = T extends [number, number]
  ? number[]
  : T extends readonly (infer U)[]
    ? JsonWidened<U>[]
    : T extends object
      ? { [K in keyof T]: JsonWidened<T[K]> }
      : T;

// Compile-time guard: `npm test` (tsc --noEmit) fails if styles.json no longer
// matches BeerStyles.
styleData satisfies JsonWidened<BeerStyles>;

/**
 * Every BJCP 2021 beer style category and its styles.
 *
 * Also available as the default export, and as raw JSON via the
 * `2021-beer-styles/styles.json` subpath.
 */
export const beerStyles: BeerStyles = styleData as BeerStyles;

export default beerStyles;
