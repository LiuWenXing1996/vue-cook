import IPanelConfig from "./IPanelConfig";

interface IPageEditorConfig extends IPanelConfig {
    extra: {
        pageName: string,
        pageUid: string
    }
}
declare global {
    interface ICookMakers {
        "vue-cook": {
            "page-editor-maker": {
            }
        }
    }
}
