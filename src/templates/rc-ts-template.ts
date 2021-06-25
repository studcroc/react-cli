import { GenerateReactComponentParams } from "../models/generateReactComponentParams";

export function getRCTSTemplate(params: GenerateReactComponentParams) {

    if(params.css){
        return `import React from 'react';
import './${params.componentName}.css';

type ${params.componentName}Props = {

}

export const ${params.componentName} = (props: ${params.componentName}Props) => {
    return (
        <></>
    );
}`;
    }else {
        return `import React from 'react';

type ${params.componentName}Props = {

}

export const ${params.componentName} = (props: ${params.componentName}Props) => {
    return (
        <></>
    );
}`;
    }
}