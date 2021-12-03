export function getMostCommonBinaryAt(
  diagnostics: string[],
  position: number,
  fallback?: string
) {
  const numberOfBinariesWithOne = diagnostics.filter(
    (line) => line[position] === "1"
  ).length;

  if (
    fallback &&
    numberOfBinariesWithOne === diagnostics.length - numberOfBinariesWithOne
  ) {
    return fallback;
  }

  return numberOfBinariesWithOne > diagnostics.length - numberOfBinariesWithOne
    ? "1"
    : "0";
}

export function calculatePowerConsumption(diagnostics: string[]): number {
  const sampleBinaryLength = diagnostics[0].length;
  let gammaRate = "";
  let epsilonRate = "";
  for (let index = 0; index < sampleBinaryLength; index++) {
    const mostCommonBinary = getMostCommonBinaryAt(diagnostics, index);
    gammaRate += mostCommonBinary;
    epsilonRate += mostCommonBinary === "0" ? "1" : "0";
  }
  const gamma = parseInt(gammaRate, 2);
  const epsilon = parseInt(epsilonRate, 2);
  return gamma * epsilon;
}

export function filterForMostCommonAtPosition(
  diagnostics: string[],
  position: number
) {
  const mostCommonBinary = getMostCommonBinaryAt(diagnostics, position, "1");
  return diagnostics.filter(
    (diagnostic) => diagnostic[position] === mostCommonBinary
  );
}
export function filterForLeastCommonAtPosition(
  diagnostics: string[],
  position: number
) {
  const leastCommonBinary =
    getMostCommonBinaryAt(diagnostics, position, "1") === "1" ? "0" : "1";
  return diagnostics.filter(
    (diagnostic) => diagnostic[position] === leastCommonBinary
  );
}

export function calculateLifeSupport(diagnostics: string[]): number {
  let inputForOxygen = [...diagnostics];
  let pos = 0;
  while (inputForOxygen.length > 1) {
    inputForOxygen = filterForMostCommonAtPosition(inputForOxygen, pos);
    pos++;
  }
  let inputForCO2 = [...diagnostics];
  pos = 0;
  while (inputForCO2.length > 1) {
    inputForCO2 = filterForLeastCommonAtPosition(inputForCO2, pos);
    pos++;
  }

  const oxygen = parseInt(inputForOxygen[0], 2);
  const co2 = parseInt(inputForCO2[0], 2);
  return oxygen * co2;
}
