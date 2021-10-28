import * as  makers from "@/lib/built-in-resources";
import useResourceMakerList from "../hooks/useResourceMakerList";

let isAdd = false

export default function autoAddMakers() {
    if (!isAdd) {
        isAdd = true;
        const buildInMakers = Object.entries(makers).map(e => e[1])
        useResourceMakerList().value.push(...buildInMakers)
    }
}

