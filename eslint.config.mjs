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
    // Local tooling and generated design-system artifacts:
    ".claude/**",
    ".storybook/**",
    ".design-sync/**",
    ".ds-sync/**",
    "storybook-static/**",
    "ds-bundle/**",
    "nuevo_diseño/**",
    "src/components/ui/*.stories.tsx",
    "src/components/ui/_ds/**",
    "src/components/ui/index.ts",
  ]),
]);

export default eslintConfig;
