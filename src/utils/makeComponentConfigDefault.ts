import IComponentConfig from "@/types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IComponentMaker from "@/types/IComponentMaker";
import ILogicConfig from "../types/ILogicConfig";

export default function makeComponentConfigDefault<
    T extends Record<string, string> = Record<string, string>>(maker: IComponentMaker<IComponentConfig<T>>): IComponentConfig<T> {
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
    let config: IComponentConfig<T> = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPkg: maker.pkg,
        slots,
        emits,
        props,
    };
    return config
}