import IResourceMaker from "./IResourceMaker";

export default interface ICookInstallFunc {
    ({
        resourceMakerList,
        options
    }: {
        resourceMakerList: IResourceMaker[],
        options?: any
    }): void
}