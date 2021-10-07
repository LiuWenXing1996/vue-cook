import { ref } from 'vue';
import IComponentMaker from '../types/IComponentMaker';
// import * as  makers from "$/built-in-resources/functions"

// const buildInMakers = Object.entries(makers).map(e => e[1])

const makerList = ref<IComponentMaker[]>([
    // ...buildInMakers
]);

export default function useComponentMakerList() {
    return makerList
}