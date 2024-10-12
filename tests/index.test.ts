import { Person } from "./../src/Person";

it("should be a name", () => {
  const person = new Person();
  expect(person.sayMyName()).toBe("Caio!");
});
