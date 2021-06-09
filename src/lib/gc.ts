import { mkdirSync, writeFileSync } from "fs";
import { chdir } from "process";
import { GenerateReactComponentParams } from "../models/generateReactComponentParams";
import { getRCTSTemplate } from "../templates/rc-ts-template";

const generateReactComponent = (params: GenerateReactComponentParams) => {
  return new Promise<String>((resolve, reject) => {
    try {
        mkdirSync(`./${params.componentName}`);
        chdir(`${params.componentName}`);
        writeFileSync(`${params.componentName}.css`, "", {});
        writeFileSync(`${params.componentName}.tsx`, getRCTSTemplate(params), {});
    } catch (error) {
        console.error(error);
    }
  });
};

export default generateReactComponent;