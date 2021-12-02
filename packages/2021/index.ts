import { readNumbers } from "@aot/util";

import {
  convertIntoThreeMeasurement,
  countHowOftenNumberIncreases,
} from "./day01";

readNumbers(2021, 1).then(({ input }) => {
  console.log(`day 01 part 1: ${countHowOftenNumberIncreases(input)}`);
  console.log(
    `day 01 part 2: ${countHowOftenNumberIncreases(
      convertIntoThreeMeasurement(input)
    )}`
  );
});
