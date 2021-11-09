// FetchMaker.ts
import { defineLogicMaker } from "vue-cook";
import fetch from "./fetch";
export default defineLogicMaker({
    name: "fetch",
    pkg: "test-pkg",
    make: () => {
        return fetch
    }
})