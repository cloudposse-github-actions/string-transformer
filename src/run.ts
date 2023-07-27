import * as core from "@actions/core";
import {lowercase} from "./operations/lowercase";
import {uppercase} from "./operations/uppercase";
import {kebabcase} from "./operations/kebabcase";
import {dnsSubdomain} from "./operations/dns-subdomain";

export async function run() {
  try {
    const operation: string = core.getInput("operation");
    const inputString: string = core.getInput("input-string");
    let maxLength: number = parseInt(core.getInput("max-length"), 10);

    let outputString = "";

    switch (operation) {
      case "lowercase":
        outputString = lowercase(inputString);
        break;
      case "uppercase":
        outputString = uppercase(inputString);
        break;
      case "kebabcase":
        outputString = kebabcase(inputString);
        break;
      case "dns-subdomain":
        outputString = dnsSubdomain(inputString, maxLength)
        break;
      default:
        core.setFailed(`Invalid operation: ${operation}`)
    }

    if (maxLength > 0 && outputString.length > maxLength) {
      outputString = outputString.substring(0, maxLength);
    }

    core.info(`Output string: ${outputString}`);
    core.setOutput("output-string", outputString);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}
