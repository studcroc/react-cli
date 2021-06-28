import { RCTParams } from "../models/rct_params";

export function getRCFCTemplate(params: RCTParams) {
  if (params.flags.js) {
    return `import React from 'react';${
      params.flags.css ? `\nimport './${params.command.args[0]}.css';` : ""
    }\n\nexport const ${
      params.command.args[0]
    } = (props) => {\n\n\treturn (\n\t\t<></>\n\t);\n\n}`;
  } else {
    return `import React from 'react';${
      params.flags.css ? `\nimport './${params.command.args[0]}.css';` : ""
    }\n\ntype ${params.command.args[0]}Props = {\n\n}\n\nexport const ${
      params.command.args[0]
    } = (props: ${
      params.command.args[0]
    }Props) => {\n\n\treturn (\n\t\t<></>\n\t);\n\n}`;
  }
}
