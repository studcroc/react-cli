#!/usr/bin/env node

import yargs from "yargs";
import scaffoldReactApp from "../src/lib/cra";
import generateReactComponent from "../src/lib/gc";
import { RCTParams } from "../src/models/rct_params";
import { parseParams } from "../src/utils/parsers/rctParams.parser";
import validateInput from "../src/utils/validators/input.validator";

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
      return console.error("\nPlease pass a valid project name\n");
    }

    try {
      await scaffoldReactApp(params);
    } catch (error) {
      console.error(error);
    }
  } else if (params.command.name === "gc") {
    if (!params.command.args[0] || !validateInput(params.command.args[0])) {
      return console.error("\nPlease pass a valid component name\n");
    }

    try {
      await generateReactComponent(params);
    } catch (error) {
      console.error(error);
    }
  } else {
    yargs.showHelp();
  }
})();
