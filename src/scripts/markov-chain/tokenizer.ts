type Tokenizer = (input: string, order: number) => string[];

export const initialToken = "§";
export const terminalToken = "#";
export const newLineToken = "~";

const simpleTokenizerCleanseRule = new RegExp(
  `(${initialToken}|${terminalToken}|${newLineToken})`
);

const newlinesRegex = /\n\s*/g;

const punctuation = `[](){}!?.,:;'"\/*&^%$_+-–—=<>@|~`.split("").join("\\");
const ellipsis = "\\.{3}";

const words = "[a-zA-Z]+";
const compounds = `${words}-${words}`;

const tokenizeRegex = new RegExp(
  `(${initialToken}|${terminalToken}|${newLineToken}|${ellipsis}|${compounds}|${words}|[${punctuation}])`
);

const cleanse = (input: string, rules: Array<RegExp>): string => {
  return rules.reduce((currentCleansedInput, rule) => {
    return currentCleansedInput.replace(rule, "");
  }, input);
};

const addStartTokens = (input: string, order: number): string => {
  return initialToken.repeat(order) + input;
};

const addEndTokens = (input: string, order: number): string => {
  return input + terminalToken;
};

const pad = (input: string, order: number): string => {
  return addStartTokens(addEndTokens(input, order), order);
};

const mapEquivalent: Record<string, string> = {};

export const simpleTokenizer: Tokenizer = (input, order) => {
  const cleansedInput = cleanse(input, [simpleTokenizerCleanseRule]);

  return pad(cleansedInput, order)
    .toLocaleLowerCase()
    .replaceAll(newlinesRegex, newLineToken) // pull out to normalize
    .split(tokenizeRegex)
    .filter((token) => !!token.trim())
    .map((token) => mapEquivalent[token] || token);
};

export default simpleTokenizer;
