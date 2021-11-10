// FetchMaker.ts
import { defineLogicMaker } from "vue-cook";
import fetch from "./fetch";
export default defineLogicMaker({
    name: "fetch",
    pkg: "test-pkg",
    makePropOptions: () => ["maxAge", "minAge"],
    make: (cookPlayerState, logicConfig) => {
        const maxAgeNumber = Number(logicConfig?.props?.["maxAge"]) || undefined
        const minAgeNumber = Number(logicConfig?.props?.["minAge"]) || undefined
        return () => {
            return fetch(maxAgeNumber, minAgeNumber)
        }
    }
})