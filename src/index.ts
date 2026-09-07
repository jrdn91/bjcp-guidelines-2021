/**
 * The latest published beer style guidelines (currently the 2021 BJCP set).
 *
 * Pin to a specific year with the subpath export, e.g. `beer-styles/2021`.
 * When a newer year is promoted to latest this module re-points to it, which
 * is released as a major version bump.
 */
export * from './2021/index';
export { beerStyles as default } from './2021/index';
