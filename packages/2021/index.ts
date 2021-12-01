import { inputAsArray } from "@aot/util";
import path from "path";
import {
  convertIntoThreeMeasurement,
  countHowOftenNumberIncreases,
} from "./day01";

const numberInput = inputAsArray(path.join(__dirname, "day01", "input.txt"));
console.log(`day 01 part 1: ${countHowOftenNumberIncreases(numberInput)}`);
console.log(
  `day 01 part 2: ${countHowOftenNumberIncreases(
    convertIntoThreeMeasurement(numberInput)
  )}`
);
