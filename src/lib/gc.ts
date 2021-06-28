import { mkdirSync, writeFileSync } from "fs";
import { chdir } from "process";
import { RCTParams } from "../models/rct_params";
import { getRCCCTemplate } from "../templates/rc-cc-template";
import { getRCFCTemplate } from "../templates/rc-fc-template";
import { transformIntoPascalCase } from "../utils/transformers/pascalcase.transformer";

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
        
        console.log(`Done`);
    } catch (error) {
        console.error(error);
    }
  });
};

export default generateReactComponent;