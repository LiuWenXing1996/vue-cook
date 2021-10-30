<template>
    <component
        v-if="maker"
        :is="maker.make(config)"
        v-bind="config?.props"
        v-on="emits"
        :uid="config.uid"
    >
        <template v-for="(slot,name) in config?.slots" v-slot:[name]>
            <component-render :config="_config" v-for="_config in slot"></component-render>
        </template>
    </component>
    <span v-else>{{ config.makerPkg }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { getCurrentInstance, toRefs, onMounted, onUnmounted, computed, Ref, inject } from "vue";
import type IComponentConfig from "@/lib/types/IComponentConfig";
import { componentInstanceMap, componentConfigMap } from "./utils/exportData"
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
        }
    }
)
const { config } = toRefs(props)
const maker = computed(() => {
    const makerList = cookPlayerState.getMakerList()
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
onMounted(() => {
    const internalInstance = getCurrentInstance()
    if (internalInstance) {
        const elements = getComponentElements(internalInstance)
        elements.forEach(el => {
            componentConfigMap.set(el, config.value)
        })
        componentInstanceMap.set(config.value, internalInstance)
    }
})
onUnmounted(() => {

})

</script>