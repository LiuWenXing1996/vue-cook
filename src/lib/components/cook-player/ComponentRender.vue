<template>
    <component
        v-if="maker"
        :is="maker.makeComponent(config)"
        v-bind="config?.attrs?.props"
        v-on="config?.attrs?.emits"
        :class="[config?.attrs?.class]"
        :style="config?.attrs?.style"
        :uid="config.uid"
    >
        <template v-for="(slot,name) in config?.attrs?.slots" v-slot:[name]>
            <component-render :config="_config" v-for="_config in slot"></component-render>
        </template>
    </component>
    <span v-else>{{ config.makerPackage }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { getCurrentInstance, toRefs, onMounted, onUnmounted } from "vue";
import useComponentMaker from "$/hooks/useComponentMaker";
import type IComponentConfig from "$/types/IComponentConfig";
import { componentInstanceMap, componentConfigMap } from "./exportData"
import getComponentElements from "./utils/getComponentElements";

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