import { RCTParams } from "./rct_params";

export interface GenerateReactComponentParams extends RCTParams {
    componentName: string,
    css?: boolean,
}