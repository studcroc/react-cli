import { RCTParams } from "../models/rct_params";

export function getRCCCTemplate(params: RCTParams) {
  if (!params.flags.js) {
    return `import React from 'react'; ${
      params.flags.css ? `\nimport './${params.command.args[0]}.css';` : ""
    }\n\ntype ${params.command.args[0]}Props = {\n\n};\n\ntype ${
      params.command.args[0]
    }State = {\n\n};\n\nclass ${
      params.command.args[0]
    } extends React.Component<${params.command.args[0]}Props, ${
      params.command.args[0]
    }State> {\n\n\tstate: ${
      params.command.args[0]
    }State = {\n\n\t};\n\n\trender() {\n\t\treturn (\n\t\t\t<></>\n\t\t);\n\t}\n}\n\nexport default ${params.command.args[0]};`;
  } else {
    return `import React from 'react';${
      params.flags.css ? `\nimport './${params.command.args[0]}.css';` : ""
    }\n\nclass ${
      params.command.args[0]
    } extends React.Component {\n\trender() {\n\t\treturn <></>;\n\t}\n}\n\nexport default ${params.command.args[0]};`;
  }
}
