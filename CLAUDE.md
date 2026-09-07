# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An npm package (`2021-beer-styles`, repo name `bjcp-guidelines-2021`) that ships the
2021 BJCP beer style guidelines as structured data plus TypeScript types. It has no
runtime logic — consumers `import BeerStyles from '2021-beer-styles'` to get the data
and `import { BeerStyle } from '2021-beer-styles'` for the types.

The data was originally machine-converted from the BJCP `.docx`, so some entries are
known to be imperfect (see `README.md`). Fixes to style content are expected to be
hand edits.

## Commands

```bash
npm run build      # tsc -p tsconfig.json -> compiles src/ into lib/
npm run lint       # eslint src --ext .js,.ts
npm run lint:fix   # eslint --fix
npm run format     # prettier --write "src/**/*.(js|ts)"
```

There is **no test suite** despite `.github/workflows/coverage.yml` and
`npm-publish.yml` calling `npm test` — there is no `test` script, so those CI steps
currently fail. The `coverage/` directory is a stale artifact referencing files
(`src/helpers/uuid.ts`) that no longer exist.

Both `package-lock.json` and `yarn.lock` are committed; CI uses `npm i`, the README
tells consumers to `yarn add`.

## Architecture

- **`src/index.ts`** is the source of truth for the data: a single
  `const BeerStyles: BeerCategory[]` that is `export default`ed. `tsc` inlines this
  entire array into `lib/index.js` (~460KB) at build time — there is no data-loading
  step. `src/index.ts` also re-exports every type from `src/types.ts`.
- **`src/types.ts`** defines the data model. Key shapes: `BeerCategory` → `BeerStyle[]`
  → `BeerStyleProperties`. `vitalStatistics` values are either a `RangeType`
  (`[number, number]`) or a `string`.
- **`src/styles.json`** is a parallel JSON dump of the same data. It is **not imported
  by the build or referenced anywhere** — treat it as a secondary export that must be
  kept in sync manually if you change `src/index.ts`.
- **`lib/`** is committed build output (`main` = `lib/index.js`, `types` =
  `lib/types.d.ts`). Run `npm run build` after editing `src/` so `lib/` stays current.

### The Saison special case

Style `25B. Saison` has a non-standard structure. BJCP defines it with a table of
Standard vs. Super strength variants. The model handles this with an optional
`specialStatistics?: Partial<Record<keyof VitalStatistics, Record<string, Array<number>>>>`
on `BeerStyleProperties`, alongside the normal `vitalStatistics` (which holds the full
combined range). When touching the types, preserve this — the commented-out alternate
signature in `src/types.ts` is a rejected simpler version.

## Release process

Publishing is triggered by creating a GitHub Release (`.github/workflows/npm-publish.yml`,
needs `secrets.NPM_TOKEN`). To cut a version locally, `npm version <patch|minor|major>`
runs the lifecycle hooks: `preversion` (lint) → `version` (format + `git add -A src`) →
`postversion` (`git push && git push --tags`). `prepare`/`prepublishOnly` also build/lint.

## Style

Prettier: `printWidth` 120, `singleQuote`, `trailingComma: all`. ESLint extends
`eslint:recommended` + `@typescript-eslint/recommended`. `tsconfig.json` has `strict: true`.
