import IResourceConfigBase from "./IResourceConfigBase";

export default interface IPanelConfig extends IResourceConfigBase {
    makerType: "panel"
    alwaysOpen?: boolean
}
