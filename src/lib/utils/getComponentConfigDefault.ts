import IComponentConfig from "../types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IComponentMaker from "../types/IComponentMaker";

export default function getComponentConfigDefault(maker: IComponentMaker): IComponentConfig {
    const uid = uuidv4();
    let config: IComponentConfig = {
        uid,
        makerName: maker.name,
        makerPackage: maker.package,
        attrs: {}
    };
    config.attrs = maker?.makeDefaultAttrs?.(config);
    return config
}