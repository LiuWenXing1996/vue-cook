import ILogicConfig from "@/types/ILogicConfig";
import { v4 as uuidv4 } from 'uuid';
import ILogicMaker from "@/types/ILogicMaker";
import makeEmptyLogicConfig from "./makeEmptyLogicConfig";

export default function makeDefaultLogicConfig<
    T extends Record<string, string> = Record<string, string>>(maker: ILogicMaker<ILogicConfig<T>>): ILogicConfig<T> {
    if (maker.makeDefaultConfig) {
        return maker.makeDefaultConfig()
    }
    return makeEmptyLogicConfig<T>(maker)
}