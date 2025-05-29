import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";
import { globalIgnores } from "eslint/config";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    // See more details at: https://typescript-eslint.io/packages/parser/
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"], // Add support for additional file extensions, such as .svelte
        parser: ts.parser,
        // Specify a parser for each language, if needed:
        // parser: {
        //   ts: ts.parser,
        //   js: espree,    // Use espree for .js files (add: import espree from 'espree')
        //   typescript: ts.parser
        // },

        // We recommend importing and specifying svelte.config.js.
        // By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
        // While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
        // explicitly specifying it ensures better compatibility and functionality.
        svelteConfig,
      },
    },
  },
  globalIgnores([
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    ".svelte-kit/",
    ".cache/",
    ".sst",
    ".svelte-kit",
    "sst-env.d.ts", // SST generated file
  ]),
  {
    rules: {
      // Override or add rule settings here, such as:
      // 'svelte/rule-name': 'error'
    },
  },
);

// export default defineConfig([

//   {
//     files: ["**/*.jsonc", "**/*.json"],
//     plugins: { json },
//     language: "json/jsonc",
//     extends: ["json/recommended"],
//   },
//   {
//     files: ["**/*.css"],
//     plugins: { css },
//     language: "css/css",
//     extends: ["css/recommended"],
//   },
// ]);
