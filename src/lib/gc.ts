import { mkdirSync, writeFileSync } from "fs";
import { chdir } from "process";
import { RCTParams } from "../models/rct_params";
import { getRCCCTemplate } from "../templates/rc-cc-template";
import { getRCFCTemplate } from "../templates/rc-fc-template";
import logger from "../utils/logger/logger";
import { transformIntoPascalCase } from "../utils/transformers/pascalcase.transformer";

const { logError, logInfo, logSuccess } = logger;

const generateReactComponent = (params: RCTParams) => {

  let componentName = transformIntoPascalCase(params.command.args[0]);
  params.command.args[0] = componentName;

  console.log(`Generating ${componentName}...`);

  return new Promise<String>((resolve, reject) => {
    try {
        mkdirSync(`./${componentName}`);
        chdir(`${componentName}`);

        if(params.flags.css) writeFileSync(`${componentName}.css`, "", {});

        writeFileSync(`${componentName}.${params.flags.js? "js": "tsx"}`, params.flags.class? getRCCCTemplate(params): getRCFCTemplate(params), {});
        
        logSuccess("Done");
        resolve("Done");
    } catch (error) {
        logError(`${error}`);
        reject(error);
    }
  });
};

export default generateReactComponent;