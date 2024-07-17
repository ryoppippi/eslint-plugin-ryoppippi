import type { Plugin } from "./deps.ts";

import denoJson from "./deno.json" with { type: "json" };

import noHttpUrl from "./rules/no-http-url.ts";

const plugin: Plugin = {
  meta: {
    name: "ryoppippi",
    version: denoJson.version,
  },
  rules: {
    "no-http-url": noHttpUrl,
  },
} as const;

export default plugin;

type RuleDefinitions = typeof plugin["rules"];
