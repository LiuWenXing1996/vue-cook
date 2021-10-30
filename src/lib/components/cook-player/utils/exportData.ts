import { ComponentInternalInstance, Ref } from 'vue';
import IComponentConfig from '@/lib/types/IComponentConfig';
import { VueCookPlayerExportDataTag } from "@/lib/utils/const"
import ICookPlayerExportData from '@/lib/types/ICookPlayerExportData';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
import getComponentRect from './getComponentRect';
import IComponentOverlayMap from '@/lib/types/IComponentOverlayMap';
import ICookPlayerState from '@/lib/types/ICookPlayerState';

export const componentInstanceMap = new Map<IComponentConfig, ComponentInternalInstance>();
export const componentConfigMap = new Map<Element, IComponentConfig>();

const getComponentInstanceFromElement = (element: Element) => {
    let currentConfig = getComponentConfigFromElement(element)
    if (currentConfig) {
        return componentInstanceMap.get(currentConfig)
    }
}
const getComponentOverlayFromElement = (element: Element, cookPlayerState: ICookPlayerState) => {
    const componentConfig = getComponentConfigFromElement(element);
    if (componentConfig) {
        const componentInstance = componentInstanceMap.get(componentConfig)
        if (componentInstance) {
            const rect = getComponentRect(componentInstance)
            const overlay: IComponentOverlay = {
                configUid: componentConfig.uid,
                pageUid: cookPlayerState.page.uid,
                rect: rect
            }
            return overlay
        }
    }
}
const getComponentConfigFromUid = (uid: string) => {
    const configList = [...componentInstanceMap.keys()]
    const configFound = configList.find(e => e.uid === uid)
    return configFound
}
const getComponentConfigFromElement = (element: Element) => {
    let currentEl: Element | null = element;
    let currentConfig
    while (currentEl) {
        currentConfig = componentConfigMap.get(currentEl)
        if (currentConfig) {
            break;
        }
        currentEl = currentEl.parentElement
    }
    return currentConfig
}

const getComponetnOverlayFromComponentConfigUid = (uid: string, cookPlayerState: ICookPlayerState) => {
    const componentConfig = getComponentConfigFromUid(uid)
    if (componentConfig) {
        const componentInstance = componentInstanceMap.get(componentConfig)
        if (componentInstance) {
            const rect = getComponentRect(componentInstance)
            const overlay: IComponentOverlay = {
                configUid: componentConfig.uid,
                pageUid: cookPlayerState.page.uid,
                rect: rect
            }
            return overlay
        }
    }
}

export default function exportData(cookPlayerState: ICookPlayerState) {
    const data: ICookPlayerExportData = {
        getComponetnOverlayFromElement: (element) => {
            return getComponentOverlayFromElement(element, cookPlayerState)
        },
        getComponetnOverlayFromComponentConfigUid: (uid) => {
            return getComponetnOverlayFromComponentConfigUid(uid, cookPlayerState)
        }
    }

    // @ts-ignore
    window[VueCookPlayerExportDataTag] = data;
}