import IResourceMaker from "./IResourceMaker";
export default interface ICookState<T = any> {
    // TODO:makerlist尝试做成响应式的
    getMakerList: () => IResourceMaker[]
    install: (maker: IResourceMaker) => T
}