<template>
    <component
        v-if="maker"
        :is="maker.makeComponent(config)"
        v-bind="config?.attrs?.props"
        v-on="config?.attrs?.emits"
        :class="[config?.attrs?.class]"
        :style="config?.attrs?.style"
    >
        <template v-for="(slot,name) in config?.attrs?.slots" v-slot:[name]>
            <component-render :config="_config" v-for="_config in slot"></component-render>
        </template>
    </component>
    <span v-else>{{ config.makerPackage }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { getCurrentInstance, toRefs } from "vue";
import useComponentMaker from "$/hooks/useComponentMaker";
import type IComponentConfig from "$/types/IComponentConfig";
import { componentInstanceMap } from "./exportData"

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
const internalInstance = getCurrentInstance()
componentInstanceMap.set(config.value, internalInstance)

</script>