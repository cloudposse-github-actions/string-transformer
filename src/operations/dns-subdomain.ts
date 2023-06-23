import {kebabcase} from "./kebabcase";

export function dnsSubdomain(str: string, maxLength = 63): string {
  str = kebabcase(str);
  maxLength = maxLength < 1 ? 63 : maxLength;
  str = str.substring(0, maxLength);
  if (str.endsWith("-")) str = str.substring(0, str.length - 1);
  
  return str;
}