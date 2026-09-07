# beer-styles

The [BJCP](https://www.bjcp.org/) beer style guidelines as structured JSON, with
TypeScript types. Versioned by year: import the latest set, or pin to a specific
year's guidelines so a future update never changes the data under you.

> Supersedes [`2021-beer-styles`](https://www.npmjs.com/package/2021-beer-styles).
> `beer-styles/2021` ships the identical data.

## Install

```bash
npm install beer-styles
```

Ships ESM and CommonJS builds plus type declarations. Node.js >= 18.

## Usage

```ts
import { beerStyles } from 'beer-styles'; // always the latest year
// or pin to a year:
import { beerStyles } from 'beer-styles/2021';

// or: import beerStyles from 'beer-styles';

beerStyles[0].title; // "1. Standard American Beer"
beerStyles[0].styles[0].title; // "1A. American Light Lager"
```

The latest import also exposes the year it resolved to:

```ts
import { year } from 'beer-styles';
year; // 2021
```

CommonJS:

```js
const { beerStyles } = require('beer-styles');
// or: require('beer-styles/2021')
```

Types:

```ts
import type { BeerStyles, BeerCategory, BeerStyle, VitalStatistics } from 'beer-styles';
```

Raw JSON (no JS wrapper), via the subpath exports:

```ts
import styles from 'beer-styles/styles.json' with { type: 'json' }; // latest
import styles2021 from 'beer-styles/2021/styles.json' with { type: 'json' };
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

## Versioning

- **New year subpaths are additive.** Adding `beer-styles/2024` alongside
  `beer-styles/2021` is a minor release.
- **A published year subpath never changes.** `beer-styles/2021` returns the same
  data forever (content-fix patches aside).
- **Moving the default.** When a newer year is promoted to what the bare
  `beer-styles` / `beer-styles/styles.json` import resolves to, that is a
  **major** version bump.

Pin the year (`beer-styles/2021`) if you never want the data to move.

## Contributing

Fixes to style content and types are welcome — open an issue or PR.

```bash
npm install      # also runs the build via the prepare script
npm run build    # bundle src/ -> dist/ with tsup (ESM + CJS + d.ts)
npm test         # tsc --noEmit: also checks each styles.json against the types
npm run lint
npm run format
```

Each year's data lives in `src/<year>/styles.json` (the single source of truth).
`src/<year>/index.ts` imports it, applies the types, and re-exports; `src/index.ts`
re-exports the latest year.

## License

[MIT](./LICENSE.md)
