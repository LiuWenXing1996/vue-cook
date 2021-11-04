import IComponentMaker from "@/types/IComponentMaker";
import IComponentConfig from '@/types/IComponentConfig';

type IComponentMakerOptions<
    T extends Record<string, string> = Record<string, string>> = Omit<IComponentMaker<IComponentConfig<T>>, "type">

export default function defineComponentMaker<
    T extends Record<string, string> = Record<string, string>>
    (maker: IComponentMakerOptions<T>): IComponentMaker<IComponentConfig<T>> {
    const _maker: IComponentMaker<IComponentConfig<T>> = {
        type: "component",
        ...maker
    }
    return _maker
}