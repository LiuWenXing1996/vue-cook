import { VueCookEditorExportDataPreTag } from "./const";

export default function getCookEditorExportDataUniqTag(uid: string) {
    return `${VueCookEditorExportDataPreTag}-${uid}`
}