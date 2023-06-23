import {kebabcase} from "./kebabcase";

test("kebabcase", async () => {
  const output = kebabcase("TestKebabcase");
  expect(output).toBe("test-kebabcase");
});

test("kebabcase with hyphens", async () => {
  const output = kebabcase("TestKebabcase-Foo");
  expect(output).toBe("test-kebabcase-foo");
});

test("kebabcase with from branch name", async () => {
  const output = kebabcase("feature/UI-123_my-feature");
  expect(output).toBe("feature-ui-123-my-feature");
});

test("kebabcase with from really long string", async () => {
  const output = kebabcase("HelloWorldFromSomeReallyLongStringThatWillBeTruncatedUndoubtedly");
  expect(output).toBe("hello-world-from-some-really-long-string-that-will-be-truncated-undoubtedly");
});
