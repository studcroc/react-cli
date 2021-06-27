import { RCTParams } from "../models/rct_params";

export function getRCTSTemplate(params: RCTParams) {
  return `import React from 'react';${params.flags.css ? `\nimport './${params.command.args[0]}.css';` : ""}${!params.flags.js ? `\ntype ${params.command.args[0]}Props = {\n\n}`: ""}
\nexport const ${params.command.args[0]} = (props${!params.flags.js? `: ${params.command.args[0]}Props`: ""}) => {
    return (
        <></>
    );
}`;
}
