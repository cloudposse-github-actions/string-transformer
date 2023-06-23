import { lowercase,} from "./lowercase";

test("lowercase", async () => {
  const output = lowercase("TestLowerCase");
  expect(output).toBe("testlowercase");
});

test("lowercase with hyphens", async () => {
  const output = lowercase("TestLowerCase-Foo");
  expect(output).toBe("testlowercase-foo");
});
