import fs from "fs";

export const inputAsArray: (filePath: string) => number[] = (filePath) => {
  const input = fs.readFileSync(filePath, "utf8").toString().split("\n");
  const numberInput = input.map((numberAsString) => parseInt(numberAsString));
  return numberInput;
};
