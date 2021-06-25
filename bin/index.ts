#!/usr/bin/env node

import yargs from "yargs";
import scaffoldReactApp from "../src/lib/cra";
import generateReactComponent from "../src/lib/gc";
import { GenerateReactComponentParams } from "../src/models/generateReactComponentParams";
import { RCTParams } from "../src/models/rct_params";
import { ScaffoldReactAppParams } from "../src/models/scaffold_react_app_params";
import { parseParams } from "../src/utils/parseParams";

const options: any = yargs
.command("cra", "Use this command to scaffold a new react application (TYPESCRIPT template is default)")
.command("gc", "Use this command to generate a new react component")
.option("js", { alias: "javascript", description: "Set this flag to true to scaffold new react application with javascript template", type: "boolean" })
.option("css", { alias: "css_stylesheet", description: "Set this flag to true to scaffold new react component along with it's css style file", type: "boolean" })
.argv;

let params: RCTParams = parseParams(options);

(async () => {
    if(options?._![0] === 'cra'){
        let scaffoldReactAppParams: ScaffoldReactAppParams = {
            applicationName: options?._![1],
            js: params.js,
        };
        try {
            await scaffoldReactApp(scaffoldReactAppParams);
        } catch (error) {
            console.error(error);
        }
    }else if(options?._![0] === 'gc'){
        let generateReactComponentParams: GenerateReactComponentParams = {
            componentName: options?._![1],
            js: params.js,
            css: options.css,
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
