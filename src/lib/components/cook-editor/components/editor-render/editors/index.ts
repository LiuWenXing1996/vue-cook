import IEditorType from "@/lib/types/IEditorType"
import { Component } from "vue"
import StringEditor from "./StringEditor.vue"

const editors: Record<IEditorType, Component> = {
    "number": StringEditor,
    "string": StringEditor
}

export default editors;