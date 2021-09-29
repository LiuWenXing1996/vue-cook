import IComponentAttrs from "./IComponentAttrs";
import IResourceConfig from "./IResourceConfig";

export default interface IComponentConfig extends IResourceConfig {
    attrs?: IComponentAttrs
}

