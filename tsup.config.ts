import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  treeshake: true,
  // The bundle is almost entirely inlined JSON data, so a sourcemap adds weight
  // without adding anything debuggable.
  sourcemap: false,
  // Ship the raw data file too, for the `2021-beer-styles/styles.json` subpath.
  async onSuccess() {
    await copyFile('src/styles.json', 'dist/styles.json');
  },
});
