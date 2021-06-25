import { mkdirSync, writeFileSync } from "fs";
import { chdir } from "process";
import { GenerateReactComponentParams } from "../models/generateReactComponentParams";
import { getRCTSTemplate } from "../templates/rc-ts-template";
import { transformIntoPascalCase } from "../utils/transformComponentName";

const generateReactComponent = (params: GenerateReactComponentParams) => {

  params.componentName = transformIntoPascalCase(params.componentName);

  console.log(`Generating ${params.componentName}...`);

  return new Promise<String>((resolve, reject) => {
    try {
        mkdirSync(`./${params.componentName}`);
        chdir(`${params.componentName}`);
        if(params.css) writeFileSync(`${params.componentName}.css`, "", {});
        writeFileSync(`${params.componentName}.tsx`, getRCTSTemplate(params), {});
        console.log(`Done`);
    } catch (error) {
        console.error(error);
    }
  });
};

export default generateReactComponent;