import IResourceConfig from "./IResourceConfig";

export default interface IPanelConfig<
    T extends Record<string, string> = Record<string, string>> extends IResourceConfig<T> {
    alwaysOpen?: boolean
}
