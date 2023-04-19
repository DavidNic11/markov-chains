type Tokenizer = (input: string, order: number) => string[];

export const initialToken = "§";
export const terminalToken = "#";
export const newLineToken = "~";

const simpleTokenizerCleanseRule = new RegExp(
  `(${initialToken}|${terminalToken}|${newLineToken})`
);

const newlinesRegex = /\n\s*/g;

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

export const normalize = (input: string, order: number): string => {
  const cleansedInput = cleanse(input, [simpleTokenizerCleanseRule]);

  return pad(cleansedInput, order)
    .toLocaleLowerCase()
    .replaceAll(newlinesRegex, newLineToken);
};

export default normalize;
