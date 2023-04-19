import tokenize, { initialToken, terminalToken } from "./tokenizer";
import kernelize from "./corpus";

interface MarkovChain {
  [key: string]: MarkovChain | number;
}

type Kernel = string[];
type Token = string;

interface Model {
  depth: number;
  chain: MarkovChain;
}

type MarkovChainGenerator = (
  inputs: string[],
  order: number,
  configuration?: {
    tokenize: typeof tokenize;
    kernelize: typeof kernelize;
    createModel: typeof createModel;
    injestKernel: typeof injestKernel;
  }
) => Model;

const createModel = (depth: number): Model => {
  return { depth, chain: {} };
};

const injestKernel = (model: Model, kernel: Kernel, value: string): void => {
  let transition = model.chain as any;

  for (const value of kernel) {
    if (!transition[value]) {
      // console.log({ transition, kernel, value });
      transition[value] = {};
    }

    transition = transition[value];
  }

  if (!transition[value]) {
    transition[value] = 0;
  }

  transition[value]++;
};

const defaultConfiguration = { tokenize, kernelize, createModel, injestKernel };

export const createChain: MarkovChainGenerator = (
  inputs,
  order,
  { tokenize, kernelize, createModel, injestKernel } = defaultConfiguration
) => {
  const model = createModel(order);

  for (const input of inputs) {
    const tokens = tokenize(input, order);
    const kernels = kernelize(tokens, order);

    for (const { value, kernel } of kernels) {
      injestKernel(model, kernel, value);
    }
  }

  return model;
};

type Transition = Record<string, number>;

const sampleTransition = (transition: Transition): Token => {
  const total = Object.values(transition).reduce(
    (total, count) => total + count
  );

  const index = Math.floor(Math.random() * total);

  let sum = 0;

  for (let token in transition) {
    sum += transition[token];

    if (sum > index) {
      return token;
    }
  }

  throw new Error("How the hell did you do this?????");
};

const sampleChain = (model: Model, kernel: Kernel): Token => {
  let transition = model.chain as any;

  for (const value of kernel) {
    if (!transition[value]) {
      transition[value] = {};
    }

    transition = transition[value];
  }

  return sampleTransition(transition);
};

export const sampleModel = (model: Model): string => {
  const tokens = Array.from<Token>({ length: model.depth }).fill(initialToken);

  while (true) {
    const nextToken = sampleChain(model, tokens.slice(-model.depth));
    tokens.push(nextToken);

    if (nextToken === terminalToken) break;
  }

  return tokens.slice(model.depth, -1).join(" ");
};

// export const model = {
//   1: {
//     1: [2, 2],
//     2: ["have", "have"],
//   },
//   2: {
//     have: ["a", "a"],
//   },
//   have: {
//     a: ["dog", "cat"],
//   },
//   a: {
//     dog: ["named"],
//     bit: ["of"],
//     cat: ["@terminal@"],
//   },
// };

/**
 * {
 *  "§": {
 *    "§": ["i"],
 *    "i": ["have"]
 *  },
 * "i": {
 *    "have": ["a"]
 * }
 * }
 *
 */
