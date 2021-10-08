import { ref } from 'vue';
import IComponentMaker from '../types/IComponentMaker';
import * as  makers from "$/built-in-resources"
import IResourceMaker from '../types/IResourceMaker';

const buildInMakers = Object.entries(makers).map(e => e[1])

// TODO：所有的resource maker 都放到这个list里，其他的use***Maker，use***MakerList视情况保留

const makerList = ref<IResourceMaker[]>([
    ...buildInMakers
]);

export default function useComponentMakerList() {
    return makerList
}