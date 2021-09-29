import IComponentConfig from "$/types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IComponentMaker from "$/types/IComponentMaker";
import IFuctionConfig from "../types/IFuctionConfig";

export default function makeComponentConfigDefault(maker: IComponentMaker): IComponentConfig {
    const uid = uuidv4();
    const slots: Record<string, IComponentConfig[]> = {}
    maker?.slots?.map(e => {
        slots[e] = []
    })
    const emits: Record<string, IFuctionConfig[]> = {}
    maker?.emits?.map(e => {
        emits[e] = []
    })
    const props: Record<string, any> = {}
    const propKeys = Object.keys(maker?.props || {})
    propKeys.forEach(key => {
        props[key] = maker?.props?.[key].default;
    })
    let config: IComponentConfig = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPackage: maker.package,
        attrs: {
            slots,
            emits,
            props
        }
    };
    return config
}