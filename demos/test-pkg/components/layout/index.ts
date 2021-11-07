// LayoutMaker.ts
import { defineComponentMaker } from 'vue-cook'
import Layout from "./Layout.vue";
export default defineComponentMaker({
    name: "布局",
    pkg: "test-pkg",
    makePropOptions: () => ["row", "col"],
    makeSlotOptions: (componentConfig) => {
        const getSlotName = (m: number, n: number) => `${m}-${n}`
        const rowNumber = Number(componentConfig?.props?.row) || 1
        const colNumber = Number(componentConfig?.props?.col) || 1
        const slots = []
        for (let m = 1; m <= rowNumber; m++) {
            for (let n = 1; n <= colNumber; n++) {
                slots.push(getSlotName(m, n))
            }

        }
        return slots
    },
    make: () => Layout
})