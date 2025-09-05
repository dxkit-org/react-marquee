// tsup.config.ts

import { defineConfig } from "tsup"

export default defineConfig({
  // The file we created above that will be the entrypoint to the library.
  entry: ["src/index.tsx"],
  // Enable TypeScript type definitions to be generated in the output.
  // This provides type-definitions to consumers.
  dts: true,
  // Clean the `dist` directory before building.
  // This is useful to ensure the output is only the latest.
  clean: true,
  // Sourcemaps for easier debugging.
  sourcemap: true,
  // Generate both CJS and ESM formats
  format: ["cjs", "esm"],
  // Inject CSS into JS bundles to avoid separate CSS import
  injectStyle: true,
  // Target modern environments
  target: "es2020",
  // External dependencies that shouldn't be bundled
  external: ["react", "react-dom"],
  // Splitting for better tree-shaking
  splitting: false,
  // Minify the output
  minify: false,
  // Bundle for better compatibility
  bundle: true,
})
