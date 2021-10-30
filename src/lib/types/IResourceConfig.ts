export default interface IResourceConfig<T extends Record<string, string> = any> {
    uid: string,
    name: string,
    makerName: string,
    makerPkg: string,
    extra?: T
}

