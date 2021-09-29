import { computed, Ref } from "vue";
import ICookPlayer from "../types/ICookPlayer";
import useCookPlayerList from "./useCookPlayerList";

export default function useComponentMaker(name?: string, pkg?: string): Ref<ICookPlayer | undefined> {
    return computed(() => {
        const list = useCookPlayerList();
        const player = list.value.find(e => e.name === name)
        return player;
    })
}


