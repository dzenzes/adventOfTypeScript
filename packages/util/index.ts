import { promises } from "fs";

export interface Input<T> {
  input: T;
}

/**
 *  function to read some input
 *
 * @param year of the task
 * @param day of the task
 */
export const read = async (
  year: number,
  day: number,
  file = "input.txt"
): Promise<Input<string>> => {
  const baseUrl = `../../resources/${year}/${day < 10 ? "0" + day : day}/`;

  const input = await promises.readFile(`${baseUrl}${file}`, {
    encoding: "utf-8",
  });
  return { input };
};

export const readNumbers = async (
  year: number,
  day: number,
  file = "input.txt"
): Promise<Input<number[]>> => {
  const inputAsString = await read(year, day, file);
  const input = inputAsString.input.split("/n").map(parseInt);
  return { input };
};
