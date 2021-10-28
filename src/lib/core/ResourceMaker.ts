export default abstract class ResourceMaker<ResourceType = any> {
    static readonly makerName: string = ""
    static readonly makerType: string = ""
    static readonly makerPkg: string = ""
    readonly makerName: string
    readonly makerType: string
    readonly makerPkg: string
    constructor(makerName: string, makerType: string, makerPkg: string) {
        this.makerName = makerName
        this.makerType = makerType
        this.makerPkg = makerPkg
    }
    abstract toJsonString(): string
    abstract fromJsonString(jsonString: string): void
    abstract make(): ResourceType
}