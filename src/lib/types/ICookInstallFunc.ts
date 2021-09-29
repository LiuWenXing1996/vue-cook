import IComponentMaker from "./IComponentMaker";
import IFunctionMaker from "./IFunctionMaker";
import IMixinMaker from "./IMixinMaker";

export default interface ICookInstallFunc {
    ({
        componentMakerList,
        // functionMakerList,
        // mixinMakerList,
    }: {
        componentMakerList: IComponentMaker[],
        // functionMakerList: IFunctionMaker[],
        // mixinMakerList: IMixinMaker[],
    }): void
}