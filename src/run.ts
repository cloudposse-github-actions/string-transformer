import * as core from "@actions/core";
import { lowercase } from "./operations/lowercase";
import { uppercase } from "./operations/uppercase";
import { kebabcase } from "./operations/kebabcase";

export async function run() {
  try {
    const operation: string = core.getInput("operation");
    const inputString: string = core.getInput("input-string");
    const maxLenth: number = parseInt(core.getInput("max-length"), 10);
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
      default:
        core.error(`Invalid operation: ${operation}`)
        core.setFailed(`Invalid operation: ${operation}`)
    }

    if (maxLenth > 0 && outputString.length > maxLenth) {
      outputString = outputString.substring(0, maxLenth);
    }

    core.setOutput("output-string", outputString);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}
