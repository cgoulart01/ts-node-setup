import { Person } from "./Person";

it("should be a name", () => {
  const person = new Person();
  expect(person.sayMyName()).not.toBe("Caio!");
});
