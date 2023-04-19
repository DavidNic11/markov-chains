export const kernelize = (input: string[], order: number) => {
  const sliced = input.slice(0, -order).map((_, index) => ({
    kernel: input.slice(index, index + order),
    value: input[index + order],
  }));

  return sliced;
};

export default kernelize;
