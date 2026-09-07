# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An npm package (`beer-styles`, repo `bjcp-guidelines-2021`) that ships the BJCP
beer style guidelines as structured data plus TypeScript types, versioned by year.
No runtime logic — consumers import the data array and the types.

Each guideline year is a subpath export (`beer-styles/2021`, and future years like
`beer-styles/2024`). The bare import (`beer-styles`) tracks the latest year.

The 2021 data was machine-converted from the BJCP `.docx`, so some entries are
imperfect; content fixes are hand edits to `src/2021/styles.json`.

## Commands

```bash
npm run build      # tsup: bundles each src/<year>/index.ts + src/index.ts -> dist/
                   # as ESM + CJS + .d.ts/.d.cts, inlines styles.json, and copies
                   # each raw styles.json to dist/<year>/styles.json
npm test           # tsc --noEmit (also the "typecheck" script)
npm run lint       # eslint . (flat config, eslint.config.js)
npm run lint:fix
npm run format     # prettier --write .
npm run format:check
npm run dev        # tsup --watch
```

There is no unit-test framework by design. `npm test` is `tsc --noEmit`, and it
does real data validation: each `src/<year>/index.ts` contains a
`satisfies JsonWidened<BeerStyles>` guard, so `tsc` fails if that year's
`styles.json` drifts from the types in `src/types.ts` (missing fields, wrong
value types, bad nesting). The `JsonWidened` helper only loosens `RangeType`
tuples to `number[]`, because TypeScript widens JSON number arrays on import.

## Architecture

- **`src/<year>/styles.json`** — the single source of truth for that year's data.
  A `BeerCategory[]` (2021: 34 categories, 122 styles). Matched by
  `src/**/styles.json` in `.prettierignore` to keep diffs stable.
- **`src/<year>/index.ts`** — imports its `styles.json`, runs the compile-time
  schema guard, and exports the data as both a named export (`beerStyles`) and
  the default export, plus `export const year`, plus `export type` re-exports of
  everything in `../types`.
- **`src/index.ts`** — the "latest" alias. Re-exports everything (and the
  default) from the newest year's module. Repointing this is a major release.
- **`src/types.ts`** — the shared data model. `BeerCategory` → `BeerStyle[]` →
  `BeerStyleProperties`. `BeerStyles` is the top-level alias (`BeerCategory[]`).
  A future year with a different shape would get its own types module instead.
- **`tsup.config.ts`** — one entry per year plus `src/index.ts`, dual format,
  `splitting: true` so the entries share one inlined-JSON chunk. `onSuccess`
  copies each `src/<year>/styles.json` to `dist/<year>/styles.json` for the raw
  subpath exports. Sourcemaps are off (the bundle is ~99% inlined JSON).
- **`dist/`** — build output, gitignored, never committed. Built on `npm install`
  (`prepare`) and before publish (`prepack`). `files` ships only `dist/`.

### package.json exports

- `.` → `import` gets `dist/index.js` + `dist/index.d.ts`; `require` gets
  `dist/index.cjs` + `dist/index.d.cts` (latest year).
- `./2021` → same shape against `dist/2021/index.*`.
- `./styles.json` → the latest year's raw file (currently `./dist/2021/styles.json`).
- `./2021/styles.json` → `./dist/2021/styles.json` (raw data, no JS wrapper).

`default` and named `beerStyles` are exported together, so tsup prints a CJS
"named and default exports together" warning on build — expected, not an error.
CJS consumers should use `require('beer-styles').beerStyles` (or `.default`).

### Adding a guideline year

1. `src/<year>/styles.json` — the raw data (`BeerCategory[]`).
2. `src/<year>/index.ts` — copy `src/2021/index.ts`, update `year` and the
   doc comments. The `satisfies JsonWidened<BeerStyles>` guard comes along.
3. `tsup.config.ts` — add `src/<year>/index.ts` to `entry` and a
   `copyFile`/`mkdir` line in `onSuccess`.
4. `package.json` `exports` — add `./<year>` and `./<year>/styles.json`.
5. Ship it: adding the subpath is a **minor** release.
6. To promote it to latest: repoint `src/index.ts` and the `./styles.json`
   export at the new year, and cut a **major** release.

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
