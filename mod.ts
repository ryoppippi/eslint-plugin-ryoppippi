import type { Plugin } from "./deps.ts";

import denoJson from "./deno.json" with { type: "json" };

import noHttpUrl from "./rules/no-http-url.ts";

const plugin = {
  meta: {
    name: "ryoppippi",
    version: denoJson.version,
  },
  rules: {
    "no-http-url": noHttpUrl,
  },
} as const satisfies Plugin;

export default plugin;

type RuleDefinitions = typeof plugin["rules"];
