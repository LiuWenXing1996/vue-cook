import IComponentMaker from "$/types/IComponentMaker";

type IComponentMakerOptions = Omit<IComponentMaker, "type">

export default function defineComponentMaker(maker: IComponentMakerOptions): IComponentMaker {
    const _maker: IComponentMaker = {
        type: "component",
        ...maker
    }
    return _maker
}