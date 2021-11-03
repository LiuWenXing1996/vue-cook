<template>
    <component
        v-if="maker"
        :is="maker.make(config)"
        v-bind="config?.props"
        v-on="emits"
        :uid="config.uid"
    >
        <template v-for="(slot,name) in config?.slots" v-slot:[name]>
            <component-render :config="_config" v-for="_config in slot" :dev="dev"></component-render>
        </template>
    </component>
    <span v-else>{{ config.makerPkg }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { getCurrentInstance, toRefs, onMounted, onUnmounted, computed, Ref, watch, inject, onUpdated } from "vue";
import type IComponentConfig from "@/lib/types/IComponentConfig";
import { ComponentUidToInstanceMap, ElementToComponentUidMap } from "./utils/exportData"
import getComponentElements from "./utils/getComponentElements";
import logicCompiler from "@/lib/utils/logic-compiler";
import IComponentMaker from "@/lib/types/IComponentMaker";
import ICookPlayerState from "@/lib/types/ICookPlayerState";
const cookPlayerState = inject<ICookPlayerState>('cookPlayerState') as ICookPlayerState
const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        },
        dev: {
            type: Boolean,
            default: false
        }
    }
)
const { config, dev } = toRefs(props)


const maker = computed(() => {
    const makerList = cookPlayerState.makerList
    const { makerName, makerPkg } = config.value
    const _maker = makerList.find(e => e.name === makerName && e.pkg === makerPkg)
    return _maker as IComponentMaker | undefined;
})
const emits = computed(() => {
    const res: Record<string, Function> = {}
    const _emits = config.value.emits || {}
    for (const key in _emits) {
        if (Object.prototype.hasOwnProperty.call(_emits, key)) {
            const logidConfigList = _emits[key];
            res[key] = (payload: any) => {
                logidConfigList.map((logicConfig) => {
                    try {
                        logicCompiler(cookPlayerState, logicConfig, payload)
                    } catch (error) {
                        console.error(error)
                    }
                })
            }
        }
    }
    return res
})
if (dev.value) {
    onMounted(() => {
        const internalInstance = getCurrentInstance()
        if (internalInstance) {
            const elements = getComponentElements(internalInstance)
            elements.forEach(el => {
                ElementToComponentUidMap.set(el, config.value.uid)
            })
            ComponentUidToInstanceMap.set(config.value.uid, internalInstance)
        }
    })
    onUpdated(() => {
        const internalInstance = getCurrentInstance()
        if (internalInstance) {
            const elements = getComponentElements(internalInstance)
            elements.forEach(el => {
                ElementToComponentUidMap.set(el, config.value.uid)
            })
            ComponentUidToInstanceMap.set(config.value.uid, internalInstance)
        }
    })
}


</script>