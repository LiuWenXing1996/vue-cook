// ButtonMaker.ts
import { defineComponentMaker } from 'vue-cook'
import Table from "./Table.vue";
export interface IDataItem {
    name: string,
    age: number
}
export default defineComponentMaker({
    name: "表格",
    pkg: "test-pkg",
    makePropOptions: () => ["fetch"],
    make: () => Table
})