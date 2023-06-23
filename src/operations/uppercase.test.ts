import { uppercase,} from "./uppercase";

test("uppercase", async () => {
  const output = uppercase("testUpperCase");
  expect(output).toBe("TESTUPPERCASE");
});

test("uppercase with hyphens", async () => {
  const output = uppercase("Testuppercase-Foo");
  expect(output).toBe("TESTUPPERCASE-FOO");
});
