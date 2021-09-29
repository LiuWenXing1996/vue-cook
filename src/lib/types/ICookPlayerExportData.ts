import IComponentConfig from './IComponentConfig';
import IComponentOverlayMap from './IComponentOverlayMap';
export default interface ICookPlayerExportData {
    path: string,
    componentConfig: IComponentConfig,
    getComponentOverlayMap: () => IComponentOverlayMap
}