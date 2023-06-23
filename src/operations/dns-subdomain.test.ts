import {dnsSubdomain} from "./dns-subdomain";

test("dns-subdomain", async () => {
  const output = dnsSubdomain("MyService");
  expect(output).toBe("my-service");
});

test("dns-subdomain with really long string", async () => {
  const output = dnsSubdomain("HelloWorldFromSomeReallyLongStringThatWillBeTruncatedUndoubtedly");
  expect(output).toBe("hello-world-from-some-really-long-string-that-will-be-truncated");
});
