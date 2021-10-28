import { ComputedOptions, markRaw, MethodOptions } from 'vue';
import ComponentMaker from "@/lib/core/ComponentMaker"
import Component from "./RootApp.vue";
import { name as PkgName } from "@/../package.json"



export default class AppMaker extends ComponentMaker {
    static readonly makerName: string = "主应用"
    static readonly makerPkg: string = PkgName
    constructor() {
        super(AppMaker.makerName, AppMaker.makerPkg)
    }
    makeSlotOptions() {
        return ["default"]
    }
    make() {
        return markRaw(Component)
    }
    toJsonString() {
        return ""
    }
    fromJsonString(jsonString: string): void {
        throw new Error('Method not implemented.');
    }
}