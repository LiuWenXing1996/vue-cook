import { markRaw } from 'vue';
import { defineComponentMaker, defineEditor } from '$/index'
import Component from "./Component.vue";
import { pkgName } from '../../const-value';
export default defineComponentMaker({
    name: "button",
    package: pkgName,
    label: '按钮',
    props: {
        'text': defineEditor({
            type: "string",
            data: {
                d: "sss"
            },
            default: "sss"
        })
    },
    // slots: ["default"],
    makeComponent: () => markRaw(Component)
})