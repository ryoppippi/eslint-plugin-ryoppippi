// @deno-types="@types/eslint"
import * as eslint from "eslint";

export { eslint };
export type ESLint = eslint.ESLint;
export type Plugin = eslint.ESLint.Plugin;

export type { RuleContext } from "@typescript-eslint/utils/ts-eslint";
