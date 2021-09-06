import IWindowConfig from "./IWindowConfig"
export default interface ISplitWindowConfig {
    size: number,
    innerWindows: IWindowConfig[],
    splitConfig?: {
        isH: boolean,
        innerWindows: ISplitWindowConfig[]
    }
}