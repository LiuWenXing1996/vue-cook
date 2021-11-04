import IPage from "./IPage";

export default interface ICookEditorExportData {
    getPage: () => IPage | undefined,
    setPage: (page: IPage) => void
}