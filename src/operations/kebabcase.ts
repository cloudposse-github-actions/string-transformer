import * as core from "@actions/core";
export function kebabcase(str: string): string {
  const string1 = str.replace(/([a-z])([A-Z])/g, "$1-$2")
  console.log("string1: " + string1)
  core.info("string1: " + string1)
  const string2 = string1.replace(/[\s_/]+/g, '-')
  console.log("string2: " + string2)
  core.info("string2: " + string2)
  const string3 = string2.toLowerCase()
  console.log("string3: " + string3)
  
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")
    //eslint-disable-next-line no-useless-escape
    .replace(/[\s_/]+/g, '-')
    .toLowerCase().replace('/', '-');
}