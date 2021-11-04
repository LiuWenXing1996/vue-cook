import { VueCookPlayerExportDataTag } from "./const"
import ICookPlayerExportData from '@/types/ICookPlayerExportData';

export default function getCookPlayerExportDataFromWindow(window?: Window) {
    let exportData
    if (window) {
        // @ts-ignore
        const _exportData = window[VueCookPlayerExportDataTag]
        exportData = _exportData as ICookPlayerExportData
    }
    return exportData
}