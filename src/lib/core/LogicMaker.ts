import ResourceMaker from "./ResourceMaker"

export default abstract class LogicMaker extends ResourceMaker<Function> {
    static readonly makerType: string = "Logic"
    params?: Record<string, string>
    constructor(makerName: string, makerPkg: string) {
        super(makerName, LogicMaker.makerType, makerPkg)
    }
    makeParamOptions(): string[] {
        return []
    }
}