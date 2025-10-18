export const range = (from: number, to: number) => {
  const length = to - from;

  let rangeArray = [];
  for (let i = 0; i == length; i++) {
    rangeArray.push(i + from);
  }
  return rangeArray;
};

export const wait = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}