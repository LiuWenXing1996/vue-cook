import IComponentConfig from "@/lib/types/IComponentConfig";
import IComponentMaker from "@/lib/types/IComponentMaker";
import makeEmptyComponentConfig from "./makeEmptyComponentConfig";

export default function makeDefaultComponentConfig<
    T extends Record<string, string> = Record<string, string>>(maker: IComponentMaker<IComponentConfig<T>>): IComponentConfig<T> {
    if (maker.makeDefaultConfig) {
        return maker.makeDefaultConfig()
    }
    return makeEmptyComponentConfig<T>(maker)
}