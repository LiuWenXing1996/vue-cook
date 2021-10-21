import { ComponentInternalInstance, Ref } from 'vue';
import IComponentConfig from './IComponentConfig';
import IComponentOverlay from './IComponentOverlay';
import IComponentOverlayMap from './IComponentOverlayMap';
export default interface ICookPlayerExportData {
    path: string,
    componentConfig: IComponentConfig,
    getComponetnOverlayFromElement: (element: Element) => IComponentOverlay | undefined
    getComponetnOverlayFromComponentConfigUid: (uid: string) => IComponentOverlay | undefined
}