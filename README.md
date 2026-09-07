# 2021-beer-styles

Beer styles in JSON format based on the 2021 [BJCP](https://www.bjcp.org/) style
guidelines, published with TypeScript types.

## Install

```bash
npm install 2021-beer-styles
```

Ships ESM and CommonJS builds plus type declarations. Node.js >= 18.

## Usage

```ts
import { beerStyles } from '2021-beer-styles';
// or: import beerStyles from '2021-beer-styles';

beerStyles[0].title; // "1. Standard American Beer"
beerStyles[0].styles[0].title; // "1A. American Light Lager"
```

CommonJS:

```js
const { beerStyles } = require('2021-beer-styles');
```

Types:

```ts
import type { BeerStyles, BeerCategory, BeerStyle, VitalStatistics } from '2021-beer-styles';
```

Raw JSON (no JS wrapper), via the subpath export:

```ts
import styles from '2021-beer-styles/styles.json' with { type: 'json' };
```

## Data shape

`beerStyles` is a `BeerCategory[]`. Each category has a `title`, a `description`,
and a list of `styles`; each style has a `title`, an optional `description`, and a
`properties` object (`overallImpression`, `aroma`, `vitalStatistics`, `tags`, …).
See [`src/types.ts`](./src/types.ts) for the full contract.

### Notes

- Some styles are not 100% faithful to the BJCP guidelines — the data was
  converted from the source `.docx` with a parsing script.
- `25B. Saison` has an extra `properties.specialStatistics` field. The BJCP
  defines it as a table of strength variants (`table` / `standard` / `super`);
  `vitalStatistics` holds the combined range and `specialStatistics` holds the
  per-variant numbers.

## Contributing

Fixes to style content and types are welcome — open an issue or PR.

```bash
npm install      # also runs the build via the prepare script
npm run build    # bundle src/ -> dist/ with tsup (ESM + CJS + d.ts)
npm test         # tsc --noEmit: also checks src/styles.json against the types
npm run lint
npm run format
```

The data lives in [`src/styles.json`](./src/styles.json) (the single source of
truth). `src/index.ts` imports it, applies the types, and re-exports.

## License

[MIT](./LICENSE.md)
