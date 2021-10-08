import IComponentMaker from "$/types/IComponentMaker";

interface IComponentMakerOptions extends Omit<IComponentMaker, "type"> {
    type?: IComponentMaker["type"]
}

export default function defineComponentMaker(maker: IComponentMakerOptions): IComponentMaker {
    maker.type = "component"
    return maker as IComponentMaker
}