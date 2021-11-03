import ICookConfig from "./ICookConfig";
import ICookEditorConfig from "./ICookEditorConfig";

// interface ICookGlobalBase {
//     "ICookEditorConfig": ICookEditorConfig
//     "ICookMakers": {

//     }
// }

declare global {
    interface ICookConfig {
        "ICookEditorConfig": ICookConfig
        "ICookMakers": {

        }
    }
}

export { }