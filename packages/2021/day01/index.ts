export function countHowOftenNumberIncreases(depths: number[]): number {
  let count = 0;
  if (depths.length === 1) {
    return count;
  }

  for (let index = 1; index < depths.length; index++) {
    const element = depths[index];
    const previousElement = depths[index - 1];
    if (element > previousElement) {
      count++;
    }
  }
  return count;
}

export function convertIntoThreeMeasurement(depths: number[]): number[] {
  if (depths.length < 3) {
    return [];
  }
  const [a, b, c, ...rest] = depths;
  return [a + b + c, ...convertIntoThreeMeasurement([b, c, ...rest])];
}
