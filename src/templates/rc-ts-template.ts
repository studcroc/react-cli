import { GenerateReactComponentParams } from "../models/generateReactComponentParams";

export function getRCTSTemplate(params: GenerateReactComponentParams) {

    return `import React from 'react';
import './${params.componentName}.css';

type ${params.componentName}Props = {

}

export const ${params.componentName} = (props: ${params.componentName}Props) => {
    return (
        <></>
    );
}`;
}