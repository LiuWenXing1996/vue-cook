// FetchMaker.ts
import { defineLogicMaker } from "vue-cook";
import fetch from "./fetch";

declare global {
    interface ICookPlayerStateExtra {
        TestPkg: Partial<ICookPlayerStateExtraTestPkg>
    }
    interface ICookPlayerStateExtraTestPkg {
        Fetch: {
            maxAge?: number
            minAge?: number
        }
    }
}

export default defineLogicMaker({
    name: "fetch",
    pkg: "test-pkg",
    make: (logicConfig, cookPLayerState) => {
        const maxAgeNumber = cookPLayerState.extra.TestPkg?.Fetch?.maxAge
        const minAgeNumber = cookPLayerState.extra.TestPkg?.Fetch?.minAge
        return () => {
            return fetch(maxAgeNumber, minAgeNumber)
        }
    }
})