import { RCTParams } from "../models/rct_params";

export function getRCTSTemplate(params: RCTParams) {

    if(params.flags.css){
        return `import React from 'react';
import './${params.command.args[0]}.css';

type ${params.command.args[0]}Props = {

}

export const ${params.command.args[0]} = (props: ${params.command.args[0]}Props) => {
    return (
        <></>
    );
}`;
    }else {
        return `import React from 'react';

type ${params.command.args[0]}Props = {

}

export const ${params.command.args[0]} = (props: ${params.command.args[0]}Props) => {
    return (
        <></>
    );
}`;
    }
}