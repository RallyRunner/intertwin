import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The delivered design-system spec is committed verbatim as reference
    // documentation. Its .jsx files are browser-globals/CDN React, not app
    // source, and are deliberately never built — see design-system/readme.md.
    "design-system/**",
  ]),
]);

export default eslintConfig;
