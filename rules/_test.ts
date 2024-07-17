import { eslint } from "../deps.ts";

const tester = new eslint.RuleTester();

function run(args: {
  valid: string[];
  invalid: { code: string; output: string; errors: { messageId: string }[] }[];
  name: string;
  rule: eslint.Rule.RuleModule;
}) {
  tester.run(args.name, args.rule, {
    valid: args.valid,
    invalid: args.invalid?.map((i) => ({
      code: i.code,
      output: i.output,
      errors: i.errors,
    })),
  });
}

export { run, tester };
