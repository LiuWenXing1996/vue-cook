// ButtonMaker.ts
import { defineComponentMaker } from 'vue-cook'
import Button from "./Button.vue";
export default defineComponentMaker({
    name: "按钮",
    pkg: "test-pkg",
    makeEventOptions: () => ["delayClick"],
    make: () => Button
})