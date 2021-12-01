import { countHowOftenNumberIncreases, convertIntoThreeMeasurement } from ".";

describe("day 01: countHowOftenNumberIncreases", function () {
  it("solves the given example", function () {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expected = 7;
    const result = countHowOftenNumberIncreases(input);
    expect(result).toEqual(expected);
  });
  it("handles arrays with only one number", function () {
    const input = [199];
    const expected = 0;
    const result = countHowOftenNumberIncreases(input);
    expect(result).toEqual(expected);
  });
  it("can handle a single increase", function () {
    const input = [199, 200];
    const expected = 1;
    const result = countHowOftenNumberIncreases(input);
    expect(result).toEqual(expected);
  });
});

describe("convertIntoThreeMeasurement", function () {
  it("returns nothing if there are less than three numbers left", function () {
    const input = [199, 200];
    const expected: number[] = [];
    const result = convertIntoThreeMeasurement(input);
    expect(result).toEqual(expected);
  });
  it("adds the first three numbers and returns them", function () {
    const input = [199, 200, 208];
    const expected = [607];
    const result = convertIntoThreeMeasurement(input);
    expect(result).toEqual(expected);
  });

  it("finds both three measurements in the input", function () {
    const input = [199, 200, 208, 210];
    const expected = [607, 618];
    const result = convertIntoThreeMeasurement(input);
    expect(result).toEqual(expected);
  });
  it("can handle the puzzle input", function () {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expected = [607, 618, 618, 617, 647, 716, 769, 792];
    const result = convertIntoThreeMeasurement(input);
    expect(result).toEqual(expected);
  });
});
