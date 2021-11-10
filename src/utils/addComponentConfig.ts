import IComponentConfig from '@/types/IComponentConfig';
export default function addComponentConfig(parentComponent: IComponentConfig, childComponent: IComponentConfig, slotName: string) {
    parentComponent.slots = parentComponent.slots || {}
    parentComponent.slots[slotName] = parentComponent.slots[slotName] || []
    parentComponent.slots[slotName].push(childComponent)
}