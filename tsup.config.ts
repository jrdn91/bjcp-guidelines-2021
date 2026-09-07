import { copyFile, mkdir } from 'node:fs/promises';
import { defineConfig } from 'tsup';

export default defineConfig({
  // One entry per guideline year, plus `src/index.ts` (the "latest" alias).
  // tsup's common base is `src`, so output lands at `dist/index.*` and
  // `dist/<year>/index.*`.
  entry: ['src/index.ts', 'src/2021/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  treeshake: true,
  // Let the ESM builds share one inlined-JSON chunk instead of the "latest"
  // and year entries each carrying their own ~460 KB copy.
  splitting: true,
  // The bundle is almost entirely inlined JSON data, so a sourcemap adds weight
  // without adding anything debuggable.
  sourcemap: false,
  // Ship each year's raw data file for the `beer-styles/<year>/styles.json`
  // subpath. The bare `beer-styles/styles.json` export points straight at the
  // latest year's file (see package.json), so no extra copy is needed.
  async onSuccess() {
    await mkdir('dist/2021', { recursive: true });
    await copyFile('src/2021/styles.json', 'dist/2021/styles.json');
  },
});
