<template>
    <component
        v-if="maker"
        :is="maker.makeComponent(config)"
        v-bind="config?.props"
        v-on="emits"
        :uid="config.uid"
    >
        <template v-for="(slot,name) in config?.slots" v-slot:[name]>
            <component-render :config="_config" v-for="_config in slot"></component-render>
        </template>
    </component>
    <span v-else>{{ config.makerPackage }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { getCurrentInstance, toRefs, onMounted, onUnmounted, computed } from "vue";
import useComponentMaker from "$/hooks/useComponentMaker";
import type IComponentConfig from "$/types/IComponentConfig";
import { componentInstanceMap, componentConfigMap } from "./utils/exportData"
import getComponentElements from "./utils/getComponentElements";
import logicCompiler from "@/lib/utils/logic-compiler";

const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        }
    }
)
const { config } = toRefs(props)
const maker = useComponentMaker(config.value.makerName, config.value.makerPackage)
const emits = computed(() => {
    const res: Record<string, Function> = {}
    const _emits = config.value.emits || {}
    for (const key in _emits) {
        if (Object.prototype.hasOwnProperty.call(_emits, key)) {
            const logidConfigList = _emits[key];
            res[key] = (payload: any) => {
                logidConfigList.map((logicConfig) => {
                    try {
                        logicCompiler(logicConfig, payload)
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