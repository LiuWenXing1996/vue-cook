import IResourceMaker from "./IResourceMaker";
export default interface ICookConfig<T = any> {
    getMakerList: () => IResourceMaker[]
    install: (maker: IResourceMaker) => T
}