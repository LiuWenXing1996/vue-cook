import ResourceMaker from "./ResourceMaker"
import LogicMaker from "./LogicMaker";
import { Component } from 'vue';

export default abstract class ComponentMaker extends ResourceMaker<Component> {
    static readonly makerType: string = "Component"
    props: Record<string, string>
    slots: Record<string, ComponentMaker[]>
    emits: Record<string, LogicMaker[]>
    constructor(makerName: string, makerPkg: string) {
        super(makerName, ComponentMaker.makerType, makerPkg)
        this.props = {}
        this.slots = {}
        this.emits = {}
    }
    toJsonString() {
        const slotsJsonObject: Record<string, any> = {}
        Object.keys(this.slots).map(key => {
            const slotJsonObject = this.slots[key].map(e => {
                return JSON.parse(e.toJsonString())
            })
            slotsJsonObject[key] = slotJsonObject
        })
        const emitsJsonObject: Record<string, any> = {}
        Object.keys(this.slots).map(key => {
            const emitJsonObject = this.slots[key].map(e => {
                return JSON.parse(e.toJsonString())
            })
            emitsJsonObject[key] = emitJsonObject
        })
        const jsonObject = {
            makerType: this.makerType,
            makerName: this.makerName,
            makerPkg: this.makerPkg,
            props: this.props,
            slots: slotsJsonObject,
            emits: emitsJsonObject
        }
        return JSON.stringify(jsonObject)
    }
    fromJsonString(jsonString: string) {
        const {
            props,
            slots: slotsJsonObject,
            emits
        } = JSON.parse(jsonString)
        this.props = props
        const slots: Record<string, ComponentMaker[]> = {}
        Object.keys(slotsJsonObject).map(key => {
            const slotJsonObject = slotsJsonObject[key] as string[]
            slotsJsonObject[key] = slotJsonObject.map(() => {

            })
        })
        this.slots = props
    }
    makeSlotOptions(): string[] {
        return []
    }
    // makePropOptions: () => string[]
    // makeEmitsOptions: () => string[]
}