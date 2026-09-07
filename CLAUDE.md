# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status: deprecated

This package has been renamed to **`beer-styles`** (new repo, year-versioned
subpath exports; `beer-styles/2021` == this data). This repo/package is now in
maintenance-only mode: `src/index.ts` emits a `console.warn` on import and the
README carries a move notice. Only ship changes here for a genuine 2021-data fix;
new work goes to `beer-styles`. The rename lives on the `beer-styles-migration`
branch until the new repo is created.

## What this is

An npm package (`2021-beer-styles`, repo `bjcp-guidelines-2021`) that ships the 2021
BJCP beer style guidelines as structured data plus TypeScript types. No runtime logic —
consumers import the data array and the types.

The data was machine-converted from the BJCP `.docx`, so some entries are imperfect;
content fixes are hand edits to `src/styles.json`.

## Commands

```bash
npm run build      # tsup: bundles src/index.ts -> dist/ as ESM + CJS + .d.ts/.d.cts,
                   # inlines styles.json, and copies it to dist/styles.json
npm test           # tsc --noEmit (also the "typecheck" script)
npm run lint       # eslint . (flat config, eslint.config.js)
npm run lint:fix
npm run format     # prettier --write .
npm run format:check
npm run dev        # tsup --watch
```

There is no unit-test framework by design. `npm test` is `tsc --noEmit`, and it does
real data validation: `src/index.ts` contains a `satisfies JsonWidened<BeerStyles>`
guard, so `tsc` fails if `src/styles.json` drifts from the types in `src/types.ts`
(missing fields, wrong value types, bad nesting). The `JsonWidened` helper only
loosens `RangeType` tuples to `number[]`, because TypeScript widens JSON number
arrays on import.

## Architecture

- **`src/styles.json`** — the single source of truth for the data. A `BeerCategory[]`
  (34 categories, 122 styles). It is in `.prettierignore` to keep diffs stable.
- **`src/index.ts`** — imports `styles.json`, runs the compile-time schema guard,
  and exports the data as both a named export (`beerStyles`) and the default export,
  plus `export type` re-exports of everything in `types.ts`.
- **`src/types.ts`** — the data model. `BeerCategory` → `BeerStyle[]` →
  `BeerStyleProperties`. `BeerStyles` is the top-level alias (`BeerCategory[]`).
- **`tsup.config.ts`** — single entry (`src/index.ts`), dual format. `onSuccess`
  copies `src/styles.json` to `dist/styles.json` for the `./styles.json` subpath
  export. Sourcemaps are off (the bundle is ~99% inlined JSON).
- **`dist/`** — build output, gitignored, never committed. Built on `npm install`
  (`prepare`) and before publish (`prepack`). `files` ships only `dist/`.

### package.json exports

- `.` → `import` gets `dist/index.js` + `dist/index.d.ts`; `require` gets
  `dist/index.cjs` + `dist/index.d.cts`.
- `./styles.json` → `dist/styles.json` (raw data, no JS wrapper).

`default` and named `beerStyles` are exported together, so tsup prints a CJS
"named and default exports together" warning on build — expected, not an error.
CJS consumers should use `require('2021-beer-styles').beerStyles` (or `.default`).

### The Saison special case

`25B. Saison` is the only style with `properties.specialStatistics`
(`SpecialStatistics` — `Partial<Record<VitalStatisticsKeys, Record<string, number[]>>>`).
BJCP defines it as a table of strength variants; `vitalStatistics` holds the combined
range, `specialStatistics` the per-variant numbers. Preserve this when editing types.
Note the data has a `"standar"` key (typo for `"standard"`) — left as-is.

## Release

Publishing is triggered by publishing a GitHub Release
(`.github/workflows/npm-publish.yml`, needs `secrets.NPM_TOKEN`; uses npm provenance
via `publishConfig`). To cut a version: `npm version <patch|minor|major>` runs
`preversion` (lint + test) → `version` (format + `git add -A`) → `postversion`
(`git push && git push --tags`).

`.github/workflows/ci.yml` runs lint + test + build on Node 18/20/22 for every push
and PR.

## Conventions

Package manager: npm (only `package-lock.json` is committed). ESM-first
(`"type": "module"`). tsconfig is `strict` + `noUncheckedIndexedAccess` +
`verbatimModuleSyntax`, so type-only imports/exports must use `import type` /
`export type`. Prettier: `printWidth` 120, single quotes.
