import IComponentConfig from "@/types/IComponentConfig";
import IComponentMaker from "@/types/IComponentMaker";
import { v4 as uuidv4 } from 'uuid';

export default function makeDefaultComponentConfig(maker: IComponentMaker): IComponentConfig {
    const uid = uuidv4();
    let config: IComponentConfig = {
        uid,
        name: maker.name,
        makerType: "component",
        makerName: maker.name,
        makerPkg: maker.pkg
    };
    return config
}