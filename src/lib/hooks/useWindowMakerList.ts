import { ref } from 'vue';
import IWindowMaker from '../types/IWindowMaker';
import * as  makers from "$/built-in-resources"
const buildInMakers = Object.entries(makers.windowMakers).map(e => e[1])

const list = ref<IWindowMaker[]>([
    ...buildInMakers
]);


export default function useWindowMakerList() {
    return list
}