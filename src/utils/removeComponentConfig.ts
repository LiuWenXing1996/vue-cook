import IComponentConfig from '@/types/IComponentConfig';
export default function removeComponentConfig(parentComponent: IComponentConfig, childComponentUid: string, slotName: string) {
    const list = parentComponent.slots?.[slotName] || []
    const index = list.findIndex(e => e.uid === childComponentUid)
    if (index > -1) {
        list.splice(index, 1)
    }
}