import { ComponentInternalInstance, Ref } from 'vue';
import IComponentConfig from '$/types/IComponentConfig';
import { VueCookPlayerExportDataTag } from "$/utils/const"
import ICookPlayerExportData from '$/types/ICookPlayerExportData';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
import getComponentRect from './utils/getComponentRect';
import IComponentOverlayMap from './../../types/IComponentOverlayMap';

export const componentInstanceMap = new Map<IComponentConfig, ComponentInternalInstance>();
export const componentConfigMap = new Map<Element, IComponentConfig>();

const getComponentInstanceFromElement = (element: Element) => {
    let currentConfig = getComponentConfigFromElement(element)
    if (currentConfig) {
        return componentInstanceMap.get(currentConfig)
    }
}
const getComponentOverlayFromElement = (element: Element) => {
    const componentConfig = getComponentConfigFromElement(element);
    if (componentConfig) {
        const componentInstance = componentInstanceMap.get(componentConfig)
        if (componentInstance) {
            const rect = getComponentRect(componentInstance)
            const overlay: IComponentOverlay = {
                config: componentConfig,
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
        currentConfig = componentConfigMap.get(currentEl)
        if (currentConfig) {
            break;
        }
        currentEl = currentEl.parentElement
    }
    return currentConfig
}

export default function exportData(config: IComponentConfig, path: string) {
    const data: ICookPlayerExportData = {
        path,
        componentConfig: config,
        getComponetnOverlayFromElement: (element) => {
            return getComponentOverlayFromElement(element)
        }
    }

    // @ts-ignore
    window[VueCookPlayerExportDataTag] = data;
}