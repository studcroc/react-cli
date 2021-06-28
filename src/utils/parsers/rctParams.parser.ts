import { exit } from "process";
import yargs from "yargs";
import { RCTParams } from "../../models/rct_params";

export function parseParams(args: any): RCTParams {
  const { _, ...flags } = args;
  const commands: Array<string> = _ || [];

  if (commands.length === 0) {
    yargs.showHelp();
    exit();
  }

  let command = commands[0];
  let command_args = commands.slice(1);

  let params: RCTParams = {
    command: {
        name: command,
        args: command_args,
    },
    flags: {
      js: false,
      css: false,
      class: false,
      ...flags,
    },
  };

  return params;
}