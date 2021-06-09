import { RCTParams } from "../models/rct_params";

export function parseParams(args: any): RCTParams {
    let params: RCTParams = {};
    params.ts = args?.ts || true;
    return params;
}