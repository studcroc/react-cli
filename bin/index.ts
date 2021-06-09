#!/usr/bin/env node

import yargs from "yargs";
import scaffoldReactApp from "../src/lib/cra";
import generateReactComponent from "../src/lib/gc";
import { GenerateReactComponentParams } from "../src/models/generateReactComponentParams";
import { RCTParams } from "../src/models/rct_params";
import { ScaffoldReactAppParams } from "../src/models/scaffold_react_app_params";
import { parseParams } from "../src/utils/parseParams";

const options: any = yargs
.command("cra", "Use this command to scaffold a new react application")
.command("gc", "Use this command to generate a new react component")
.option("ts", { alias: "typescript", description: "Set this flag to true to scaffold new react application with typescript template", type: "boolean" })
.argv;

let params: RCTParams = parseParams(options);

(async () => {
    if(options?._![0] === 'cra'){
        let scaffoldReactAppParams: ScaffoldReactAppParams = {
            applicationName: options?._![1],
            ts: params.ts!,
        };
        try {
            await scaffoldReactApp(scaffoldReactAppParams);
        } catch (error) {
            console.error(error);
        }
    }else if(options?._![0] === 'gc'){
        let generateReactComponentParams: GenerateReactComponentParams = {
            componentName: options?._![1],
            ts: params.ts!,
        };
        try {
            await generateReactComponent(generateReactComponentParams);
        } catch (error) {
            console.error(error);
        }
    }else {
        yargs.showHelp();
    }
})();
