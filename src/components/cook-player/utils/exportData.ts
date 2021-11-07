import { ComponentInternalInstance, Ref, watch } from 'vue';
import { VueCookPlayerExportDataTag } from "@/utils/const-value"
import ICookPlayerExportData from '@/types/ICookPlayerExportData';
import IComponentOverlay from '@/types/IComponentOverlay';
import getComponentRect from './getComponentRect';
import ICookPlayerState from '@/types/ICookPlayerState';
import IPage from '@/types/IPage';

export const ComponentUidToInstanceMap = new Map<string, ComponentInternalInstance>();
export const ElementToComponentUidMap = new Map<Element, string>();

const getComponentOverlayFromElement = (element: Element, cookPlayerState: ICookPlayerState) => {
    const componentConfigUid = getComponentConfigFromElement(element);
    if (componentConfigUid) {
        const componentInstance = ComponentUidToInstanceMap.get(componentConfigUid)
        if (componentInstance) {
            const rect = getComponentRect(componentInstance)
            const overlay: IComponentOverlay = {
                configUid: componentConfigUid,
                pageUid: cookPlayerState.page.uid,
                rect: rect
            }
            return overlay
        }
    }
}

const getComponentConfigFromElement = (element: Element) => {
    let currentEl: Element | null = element;
    let currentConfig
    while (currentEl) {
        currentConfig = ElementToComponentUidMap.get(currentEl)
        if (currentConfig) {
            break;
        }
        currentEl = currentEl.parentElement
    }
    return currentConfig
}


const getComponetnOverlayFromComponentConfigUid = (uid: string, cookPlayerState: ICookPlayerState) => {
    const componentInstance = ComponentUidToInstanceMap.get(uid)
    if (componentInstance) {
        const rect = getComponentRect(componentInstance)
        const overlay: IComponentOverlay = {
            configUid: uid,
            pageUid: cookPlayerState.page.uid,
            rect: rect
        }
        return overlay
    }
}

export default function exportData(cookPlayerState: ICookPlayerState) {
    const data: ICookPlayerExportData = {
        getComponetnOverlayFromElement: (element) => {
            return getComponentOverlayFromElement(element, cookPlayerState)
        },
        getComponetnOverlayFromComponentConfigUid: (uid) => {
            return getComponetnOverlayFromComponentConfigUid(uid, cookPlayerState)
        },
        setPage: (page) => {
            const jsonString = JSON.stringify(page);
            const oldJsonString = JSON.stringify(cookPlayerState.page);
            if (jsonString !== oldJsonString) {
                const _page = JSON.parse(jsonString) as IPage;
                cookPlayerState.page = _page
            }
        }
    }
    // @ts-ignore
    window[VueCookPlayerExportDataTag] = data;
}