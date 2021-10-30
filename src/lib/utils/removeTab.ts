import ICookEditorState from '@/lib/types/ICookEditorState';
import IResourceConfig from '@/lib/types/IResourceConfig';
export default function removeTab(cookEditorState: ICookEditorState, predicate: (value: IResourceConfig) => boolean) {
    cookEditorState.splines.forEach(e => {
        e.list.map((d, i) => {
            if (predicate(d)) {
                e.list.splice(i, 1)
            }
        })
    })
}