import type { Plugin } from "./deps.ts";

import denoJson from "./deno.json" with { type: "json" };

const plugin = {
  meta: {
    name: "ryoppippi",
    version: denoJson.version,
  },
  rules: {},
} as const satisfies Plugin;

export default plugin;

type RuleDefinitions = typeof plugin["rules"];
