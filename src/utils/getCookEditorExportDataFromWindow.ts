import getCookEditorExportDataUniqTag from "./getCookEditorExportDataUniqTag";
import ICookEditorExportData from "@/types/ICookEditorExportData";

export default function getCookEditorExportDataFromWindow(window: Window, pageUid: string) {
    const uniqTag = getCookEditorExportDataUniqTag(pageUid)
    // @ts-ignore
    const exportData = window[uniqTag]
    if (exportData) {
        return exportData as ICookEditorExportData
    }
}