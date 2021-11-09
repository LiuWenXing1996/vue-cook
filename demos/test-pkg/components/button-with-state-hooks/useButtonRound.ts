import ICookPlayerState from "@/types/ICookPlayerState";
import { computed } from "vue";

export default function useButtonRound(cookPlayerState: ICookPlayerState) {
    const _isRound = computed(() => Boolean(cookPlayerState.extra.TestPkg?.Button?.isRound))
    const get = () => {
        return _isRound
    }
    const set = (isRound: boolean) => {
        cookPlayerState.extra.TestPkg = cookPlayerState.extra.TestPkg || {}
        cookPlayerState.extra.TestPkg.Button = cookPlayerState.extra.TestPkg?.Button || {}
        cookPlayerState.extra.TestPkg.Button.isRound = isRound
    }
    const toggle = () => {
        set(!_isRound.value)
    }
    return {
        get,
        set,
        toggle
    }
}