#!/usr/bin/env node

import yargs from "yargs";
import scaffoldReactApp from "../src/lib/cra";
import generateReactComponent from "../src/lib/gc";
import { RCTParams } from "../src/models/rct_params";
import logger from "../src/utils/logger/logger";
import { parseParams } from "../src/utils/parsers/rctParams.parser";
import validateInput from "../src/utils/validators/input.validator";

const { logError, logInfo, logSuccess } = logger;

const args: any = yargs
  .command(
    "cra",
    "Use this command to scaffold a new react application (TYPESCRIPT template is default)"
  )
  .command("gc", "Use this command to generate a new react component")
  .option("js", {
    description:
      "Set this flag to true to scaffold new react application with javascript template",
    type: "boolean",
  })
  .option("css", {
    description:
      "Set this flag to true to scaffold new react component along with it's css style file",
    type: "boolean",
  })
  .option("class", {
    description:
      "Set this flag to true to scaffold new class based react component",
    type: "boolean",
  }).argv;

let params: RCTParams = parseParams(args);

(async () => {
  if (params.command.name === "cra") {
    if (!params.command.args[0] || !validateInput(params.command.args[0])) {
      return logError("\nPlease pass a valid project name\n");
    }

    try {
      await scaffoldReactApp(params);
    } catch (error) {
      logError(`${error}`);
    }
  } else if (params.command.name === "gc") {
    if (!params.command.args[0] || !validateInput(params.command.args[0])) {
      return logError("\nPlease pass a valid component name\n");
    }

    try {
      await generateReactComponent(params);
    } catch (error) {
      logError(`${error}`);
    }
  } else {
    yargs.showHelp();
  }
})();
