import { read, readNumbers } from "@aot/util";

import {
  convertIntoThreeMeasurement,
  countHowOftenNumberIncreases,
} from "./day01";
import { Submarine } from "./day02";

readNumbers(2021, 1).then(({ input }) => {
  console.log(`day 01 part 1: ${countHowOftenNumberIncreases(input)}`);
  console.log(
    `day 01 part 2: ${countHowOftenNumberIncreases(
      convertIntoThreeMeasurement(input)
    )}`
  );
});

read(2021, 2).then(({ input }) => {
  const submarine = new Submarine();
  submarine.followCourse(input.split("\n"));
  const { horizontal, depth } = submarine.position();

  console.log(`day 02 part 1: ${horizontal * depth}`);
});
