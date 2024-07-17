import type { eslint } from "../deps.ts";

export const RULE_NAME = `no-http-url`;
export const MESSAGE_ID = `httpNotAllowed`;

const rule = ({
  meta: {
    type: "problem",
    docs: {
      description: "disallow http url",
    },
    fixable: "code",
    schema: [],
    messages: {
      [MESSAGE_ID]: "HTTP is not safe enough. use HTTPS.",
    },
  },
  create: (context) => {
    return {
      Literal: (node) => {
        const token = context.sourceCode.getFirstToken(node);

        if (token != null && token.type === "String") {
          /* check string */
          const urlRegexp = /http:\/\//i;
          const localRegexp = /(localhost|127\.0\.0\.1)/i;
          const nodeValue = node.value;

          if (
            nodeValue != null &&
            typeof nodeValue === "string" &&
            nodeValue.match(urlRegexp) &&
            !nodeValue.match(localRegexp)
          ) {
            /* check url */
            context.report({
              node,
              messageId: MESSAGE_ID,
              fix(fixer) {
                if (node.raw == null) return null;
                const result = node.raw?.replace(urlRegexp, "https://");
                return fixer.replaceText(node, result);
              },
            });
          }
        }
      },
    };
  },
}) as const satisfies eslint.Rule.RuleModule;

export default rule;
