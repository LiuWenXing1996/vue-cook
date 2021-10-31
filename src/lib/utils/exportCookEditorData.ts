import IPage from '@/lib/types/IPage';
import ICookEditorExportData from '../types/ICookEditorExportData';
import ICookEditorState from '../types/ICookEditorState';
import getCookEditorExportDataUniqTag from './getCookEditorExportDataUniqTag';

export default function exportCookEditorData(state: ICookEditorState, pageUid: string) {
    const data: ICookEditorExportData = {
        getPage: () => {
            const page = state.pages.find(e => e.uid === pageUid)
            if (page) {
                const jsonString = JSON.stringify(page);
                return JSON.parse(jsonString) as IPage;
            }
        },
        setPage: (page) => {
            const index = state.pages.findIndex(e => e.uid === page.uid)
            if (index > -1) {
                const jsonString = JSON.stringify(page);
                const oldJsonString = JSON.stringify(state.pages[index])
                if (jsonString !== oldJsonString) {
                    const _page = JSON.parse(jsonString) as IPage;
                    state.pages.splice(index, 1, _page)
                }
            }
        }
    }
    // @ts-ignore
    window[getCookEditorExportDataUniqTag(pageUid)] = data
}