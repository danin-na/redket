import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import onlyWarn from "eslint-plugin-only-warn"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"

export const config = [
  js.configs.recommended, eslintConfigPrettier, ...tseslint.configs.recommended,
  { plugins: { turbo: turboPlugin }, rules: { "turbo/no-undeclared-env-vars": "warn", }, },
  { plugins: { onlyWarn, }, },
  { ignores: ["dist/**", "node_modules/**"], },
]
