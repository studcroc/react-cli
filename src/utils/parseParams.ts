import { RCTParams } from "../models/rct_params";

export function parseParams(args: any): RCTParams {
    let params: RCTParams = {
        js: false,
    };
    params.js ??= args.js;
    return params;
}