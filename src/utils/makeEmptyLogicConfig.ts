import ILogicConfig from "@/types/ILogicConfig";
import { v4 as uuidv4 } from 'uuid';
import ILogicMaker from "../types/ILogicMaker";

export default function makeEmptyLogicConfig<
    T extends Record<string, string> = Record<string, string>>(maker: ILogicMaker<ILogicConfig<T>>): ILogicConfig<T> {
    const uid = uuidv4();
    let config: ILogicConfig<T> = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPkg: maker.pkg,
        params: {}
    };
    return config
}
