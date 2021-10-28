import IComponentConfig from "@/lib/types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IComponentMaker from "@/lib/types/IComponentMaker";
import ILogicConfig from "../types/ILogicConfig";

export default function makeComponentConfigDefault(maker: IComponentMaker): IComponentConfig {
    const uid = uuidv4();
    const slots: Record<string, IComponentConfig[]> = {}
    maker?.slots?.map(e => {
        slots[e] = []
    })
    const emits: Record<string, ILogicConfig[]> = {}
    maker?.emits?.map(e => {
        emits[e] = []
    })
    const props: Record<string, any> = {}
    maker?.props?.map(e => {
        props[e] = null
    })
    let config: IComponentConfig = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPackage: maker.package,
        slots,
        emits,
        props
    };
    return config
}