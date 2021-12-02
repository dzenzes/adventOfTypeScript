export type Position = {
  horizontal: number;
  depth: number;
};

export class Submarine {
  constructor(private horizontal: number = 0, private depth: number = 0) {}

  position(): Position {
    return { horizontal: this.horizontal, depth: this.depth };
  }

  drive(course: string) {
    const [direction, distanceAsString] = course.split(" ");
    const distance = parseInt(distanceAsString);
    switch (direction) {
      case "forward": {
        this.horizontal += distance;
        break;
      }
      case "down": {
        this.depth += distance;
        break;
      }
      case "up": {
        this.depth -= distance;
      }
    }
  }

  followCourse(courses: string[]) {
    for (const course of courses) {
      this.drive(course);
    }
  }
}
