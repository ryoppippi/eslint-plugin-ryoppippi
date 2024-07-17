import rule, { RULE_NAME } from "./no-http-url.ts";
import { run } from "./_test.ts";

const valid = [
  `'https'`,
  `'http'`,
  `'//github.com'`,
  `'https://github.com'`,
  `'&url=https://github.com'`,
  `'http://localhost'`,
  `'http://127.0.0.1'`,
];

const invalids = [
  [
    `'http://github.com'`,
    `'https://github.com'`,
  ],
  [
    `'&url=http://github.com'`,
    `'&url=https://github.com'`,
  ],
];

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid: invalids.map((i) => ({
    code: i[0],
    output: i[1],
    errors: [{ messageId: "httpNotAllowed" }],
  })),
});
