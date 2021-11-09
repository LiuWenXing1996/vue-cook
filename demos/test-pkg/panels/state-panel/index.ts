import definePanelMaker from '@/utils/definePanelMaker';
import StatePanel from './StatePanel.vue'
declare global {
    interface ICookEditorStateExtra {
        TestPkg: Partial<ICookEditorStateExtraTestPkg>
    }
    interface ICookEditorStateExtraTestPkg {
        StatePanel: {
            msg?: string
        }
    }
}
export default definePanelMaker({
    name: "状态面板",
    pkg: "test-pkg",
    defaultSplitLayoutPaneName: "right",
    make: () => {
        return {
            title: "状态面板",
            content: StatePanel
        }
    },
    install: (cookEditorState) => {
        cookEditorState.extra.TestPkg = cookEditorState.extra.TestPkg || {}
        cookEditorState.extra.TestPkg.StatePanel = cookEditorState.extra.TestPkg.StatePanel || {}
        cookEditorState.extra.TestPkg.StatePanel.msg = "我是一条面板状态信息"
    }
})