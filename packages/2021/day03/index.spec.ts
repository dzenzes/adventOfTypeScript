import {
  calculatePowerConsumption,
  getMostCommonBinaryAt,
  filterForMostCommonAtPosition,
  filterForLeastCommonAtPosition,
  calculateLifeSupport,
} from ".";

describe("binary diagnostic", function () {
  it("solves the puzzle input", function () {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];

    const expected = 198;
    const result = calculatePowerConsumption(input);
    expect(result).toBe(expected);
  });
});
describe("calculate gamma value", function () {
  const input = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];
  it("finds the first most common binary", function () {
    const expected = "1";
    const result = getMostCommonBinaryAt(input, 0);
    expect(result).toBe(expected);
  });
  it("finds the second most common binary", function () {
    const expected = "0";
    const result = getMostCommonBinaryAt(input, 1);
    expect(result).toBe(expected);
  });

  it("finds the third most common binary", function () {
    const expected = "1";
    const result = getMostCommonBinaryAt(input, 2);
    expect(result).toBe(expected);
  });
});

describe("find most common pinary at a position and filter diagnosticcs", function () {
  it("finds the most common binary at the first position and returns only diagnostics with that value", function () {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const expected = [
      "11110",
      "10110",
      "10111",
      "10101",
      "11100",
      "10000",
      "11001",
    ];

    const result = filterForMostCommonAtPosition(input, 0);
    expect(result).toEqual(expected);
  });

  it("filters now the result list on the second position", function () {
    const input = [
      "11110",
      "10110",
      "10111",
      "10101",
      "11100",
      "10000",
      "11001",
    ];

    const expected = ["10110", "10111", "10101", "10000"];

    const result = filterForMostCommonAtPosition(input, 1);
    expect(result).toEqual(expected);
  });
  it("filters now the result list on the third position", function () {
    const input = ["10110", "10111", "10101", "10000"];

    const expected = ["10110", "10111", "10101"];

    const result = filterForMostCommonAtPosition(input, 2);
    expect(result).toEqual(expected);
  });
  it("filters now the result list on the fourth position", function () {
    const input = ["10110", "10111", "10101"];

    const expected = ["10110", "10111"];

    const result = filterForMostCommonAtPosition(input, 3);
    expect(result).toEqual(expected);
  });
  it("filters now the result list on the fifth position", function () {
    const input = ["10110", "10111"];

    const expected = ["10111"];

    const result = filterForMostCommonAtPosition(input, 4);
    expect(result).toEqual(expected);
  });
});

describe("find least common pinary at a position and filter diagnosticcs", function () {
  it("finds the least common binary at the first position and returns only diagnostics with that value", function () {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const expected = ["00100", "01111", "00111", "00010", "01010"];

    const result = filterForLeastCommonAtPosition(input, 0);
    expect(result).toEqual(expected);
  });

  it("filters now the result list on the second position", function () {
    const input = ["00100", "01111", "00111", "00010", "01010"];

    const expected = ["01111", "01010"];

    const result = filterForLeastCommonAtPosition(input, 1);
    expect(result).toEqual(expected);
  });
  it("filters now the result list on the third position", function () {
    const input = ["01111", "01010"];

    const expected = ["01010"];

    const result = filterForLeastCommonAtPosition(input, 2);
    expect(result).toEqual(expected);
  });
});

describe("life support (part 2)", function () {
  it("solves the puzzle input", function () {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];

    const expected = 230;
    const result = calculateLifeSupport(input);
    expect(result).toBe(expected);
  });
});
