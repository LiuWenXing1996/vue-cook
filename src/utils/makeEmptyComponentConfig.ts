import IComponentConfig from "@/types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IComponentMaker from "../types/IComponentMaker";

export default function makeEmptyComponentConfig<
    T extends Record<string, string> = Record<string, string>>(maker: IComponentMaker<IComponentConfig<T>>): IComponentConfig<T> {
    const uid = uuidv4();
    let config: IComponentConfig<T> = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPkg: maker.pkg
    };
    return config
}
