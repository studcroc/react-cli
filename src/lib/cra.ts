import { ChildProcess, exec } from "child_process";
import { RCTParams } from "../models/rct_params";
import logger from "../utils/logger/logger";

const { logError, logInfo, logSuccess } = logger;

const scaffoldReactApp = (params: RCTParams) => {
  return new Promise<String>((resolve, reject) => {
    
    const chp: ChildProcess = exec(
      `npx create-react-app ${params.command.args[0]} ${!params.flags.js? '--template typescript': ""}`
    );
    
    chp.stdout?.on("data", (msg: Buffer) => {
      logInfo(msg.toString());
    });
    
    // Error handling for exceptions
    chp.on('error', (err) => {
      reject(err);
    });

    // Error handling for exceptions
    chp.stderr?.on("data", (err) => {
      logError(`${err}`);
    });

    
    chp.addListener("exit", (code) => {
      resolve("Done");
    });
  });
};

export default scaffoldReactApp;
