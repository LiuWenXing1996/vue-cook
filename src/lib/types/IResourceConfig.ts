export default interface IResourceConfig {
    uid: string,
    name: string,
    makerName: string,
    makerPackage: string,
    extra?: Record<string, string>
}
