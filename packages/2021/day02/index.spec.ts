import { Submarine } from "./";
describe("submarine control", function () {
  it("starts at (0,0)", function () {
    const submarine = new Submarine();
    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(0);
    expect(depth).toEqual(0);
  });

  it("can drive forward", function () {
    const submarine = new Submarine();
    submarine.drive("forward 5");

    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(5);
    expect(depth).toEqual(0);
  });
  it("can go deeper", function () {
    const submarine = new Submarine();
    submarine.drive("down 5");

    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(0);
    expect(depth).toEqual(5);
  });
  it("can go up", function () {
    const submarine = new Submarine();
    submarine.drive("up 5");

    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(0);
    expect(depth).toEqual(-5);
  });

  it("can handle multiple courses", function () {
    const submarine = new Submarine();
    submarine.drive("down 10");
    submarine.drive("up 5");
    submarine.drive("forward 33");
    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(33);
    expect(depth).toEqual(5);
  });

  it("can handle the example puzzle input", function () {
    const submarine = new Submarine();
    submarine.followCourse([
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ]);

    const { horizontal, depth } = submarine.position();
    expect(horizontal).toEqual(15);
    expect(depth).toEqual(10);
  });
});
