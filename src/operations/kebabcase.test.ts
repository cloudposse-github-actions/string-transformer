import {kebabcase} from "./kebabcase";

test("kebabcase", async () => {
  const output = kebabcase("TestKebabcase");
  expect(output).toBe("test-kebabcase");
});

test("kebabcase with hyphens", async () => {
  const output = kebabcase("TestKebabcase-Foo");
  expect(output).toBe("test-kebabcase-foo");
});
