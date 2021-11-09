import ICookPlayerState from "@/types/ICookPlayerState";
import { computed } from "vue";

export default function useAgeRange(cookPlayerState: ICookPlayerState) {
    const _ageRange = computed(() => [
        cookPlayerState.extra.TestPkg?.Fetch?.minAge,
        cookPlayerState.extra.TestPkg?.Fetch?.maxAge,
    ])
    const get = () => {
        return _ageRange
    }
    const setMinAge = (minAge?: number) => {
        cookPlayerState.extra.TestPkg = cookPlayerState.extra.TestPkg || {}
        cookPlayerState.extra.TestPkg.Fetch = cookPlayerState.extra.TestPkg?.Fetch || {}
        cookPlayerState.extra.TestPkg.Fetch.minAge = minAge
    }
    const setMaxAge = (maxAge?: number) => {
        cookPlayerState.extra.TestPkg = cookPlayerState.extra.TestPkg || {}
        cookPlayerState.extra.TestPkg.Fetch = cookPlayerState.extra.TestPkg?.Fetch || {}
        cookPlayerState.extra.TestPkg.Fetch.maxAge = maxAge
    }
    return {
        get,
        setMinAge,
        setMaxAge
    }
}