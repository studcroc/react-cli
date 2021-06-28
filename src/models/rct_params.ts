export interface RCTParams {
    command: RCTCommand,
    flags: RCTFlags,
}
export interface RCTFlags {
    js: boolean,
    css: boolean,
    class: boolean,
}
export interface RCTCommand {
    name: string,
    args: Array<string>,
}