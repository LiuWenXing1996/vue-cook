import IComponentOverlay from './IComponentOverlay';
import IPage from './IPage';
export default interface ICookPlayerExportData {
    getComponetnOverlayFromElement: (element: Element) => IComponentOverlay | undefined
    getComponetnOverlayFromComponentConfigUid: (uid: string) => IComponentOverlay | undefined
    setPage: (page: IPage) => void
}