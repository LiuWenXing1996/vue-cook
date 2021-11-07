import { VueCookEditorExportDataPreTag } from "./const-value";

export default function getCookEditorExportDataUniqTag(uid: string) {
    return `${VueCookEditorExportDataPreTag}-${uid}`
}