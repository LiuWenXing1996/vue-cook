import { ComponentInternalInstance } from 'vue';
import IComponentConfig from '$/types/IComponentConfig';
import { VueCookPlayerExportDataTag } from "$/utils/const"
import ICookPlayerExportData from '$/types/ICookPlayerExportData';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
import { getInstanceOrVnodeRect, Rect } from '@/lib/utils/getComponentBounds';
import IComponentOverlayMap from './../../types/IComponentOverlayMap';

export const componentInstanceMap = new Map<IComponentConfig, ComponentInternalInstance | null>();

export default function exportData(config: IComponentConfig, path: string) {
    const data: ICookPlayerExportData = {
        path,
        componentConfig: config,
        getComponentOverlayMap: () => {
            const componentOverlayMap: IComponentOverlayMap = new Map();
            componentInstanceMap.forEach((componentInstance, componentConfig) => {
                if (componentInstance) {
                    const rect = getInstanceOrVnodeRect(componentInstance) as Rect
                    const overlay: IComponentOverlay = {
                        top: rect.top,
                        bottom: rect.bottom,
                        left: rect.left,
                        right: rect.right,
                        width: rect.width,
                        height: rect.height
                    }
                    componentOverlayMap.set(componentConfig, overlay)
                }
            })
            return componentOverlayMap
        }
    }

    // @ts-ignore
    window[VueCookPlayerExportDataTag] = data;
}