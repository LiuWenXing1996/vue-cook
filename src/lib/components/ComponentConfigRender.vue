<template>
    <div
        class="component-config-render"
        :class="[{ selected: selected, hovered: hovered, isEdit: isEdit, isSlot: isSlot }, config?.attrs?.render?.class]"
        :style="config?.attrs?.render?.style"
        @click="handleClick"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragstart="handleDragStart"
        :draggable="isEdit"
        :data-uid="config.uid"
    >
        <component
            v-if="maker"
            :is="maker.makeComponent(config)"
            v-bind="config?.attrs?.props"
            :class="[config?.attrs?.class]"
            :style="config?.attrs?.style"
            v-on="events"
        >
            <template v-for="(slot,name) in config?.attrs?.slots" v-slot:[name]>
                <template v-if="slot.length > 0">
                    <component-config-render
                        :config="_config"
                        :parent-slot="slot"
                        v-for="_config in slot"
                        :is-edit="isEdit"
                        :is-slot="true"
                    ></component-config-render>
                </template>
                <template v-else-if="isEdit">
                    <component-config-render
                        :config="makeEmptySlotConfigWithName(name)"
                        :parent-slot="slot"
                        :is-edit="isEdit"
                        :is-slot="true"
                    ></component-config-render>
                </template>
            </template>
        </component>
        <span v-else>{{ config.makerPackage }} 中的 {{ config.makerName }} 没有找到</span>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import useComponentDragged from "../hooks/useComponentDragged";
import useComponentHovered from "../hooks/useComponentHovered";
import useComponentMaker from "../hooks/useComponentMaker";
import useComponentSelected from "../hooks/useComponentSelected";
import type IComponentConfig from "../types/IComponentConfig";
import getComponentConfigDefault from "../utils/getComponentConfigDefault";
import emptySlotMaker from "$/built-in-resources/component-makers/empty-slot"
import composer from "../utils/composer";

const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        },
        isEdit: {
            type: Boolean,
            default: false
        },
        parentSlot: {
            type: Object as () => IComponentConfig[]
        },
        isSlot: {
            type: Boolean,
            default: false
        }
    }
)

const emptySlotConfigs: Record<string, IComponentConfig> = {}
const makeEmptySlotConfigWithName = (name: string) => {
    let emptySlotConfig = emptySlotConfigs[name];
    if (!emptySlotConfig) {
        emptySlotConfig = getComponentConfigDefault(emptySlotMaker)
        emptySlotConfig.attrs = {
            props: {
                name
            }
        }
        emptySlotConfigs[name] = emptySlotConfig;
    }

    return emptySlotConfig
}

const { isEdit, config, isSlot, parentSlot } = toRefs(props)

const maker = useComponentMaker(config.value.makerName, config.value.makerPackage)
const componentSelected = useComponentSelected()
const componentDragged = useComponentDragged()
const componentHovered = useComponentHovered()
const selected = computed(() => componentSelected.value?.uid === config.value.uid) // WHY为什么必须要用UID来判断，直接判断对象相等不可以呢？
const hovered = computed(() => componentHovered.value?.uid === config.value.uid)
const events = computed(() => {
    if (config.value?.attrs?.emits) {
        const emits = config.value?.attrs?.emits
        let keys = Object.keys(emits);
        let emitFunctions: Record<string, Function> = {}
        keys.forEach(key => {
            emitFunctions[key] = (payload: any) => {
                let compositionConfigs = emits[key];
                compositionConfigs.map((cc) => {
                    cc.data = cc.data || {};
                    cc.data.payload = payload
                    composer(cc)
                })
            }
        })
        return emitFunctions
    }
    return {}
})

const handleClick = (event: MouseEvent) => {
    if (!isEdit.value) {
        return
    }
    event.stopPropagation()
    if (selected.value) {
        componentSelected.value = undefined
    } else {
        componentSelected.value = config.value
    }
}

const handleMouseover = (event: MouseEvent) => {
    if (!isEdit.value) {
        return
    }
    event.stopPropagation()
    componentHovered.value = config.value
}

const handleMouseleave = (event: MouseEvent) => {
    if (!isEdit.value) {
        return
    }
    event.stopPropagation()
    if (componentHovered.value = config.value) {
        componentHovered.value = undefined
    }
}

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLElement)) {
        return;
    }
    if (!e?.target?.dataset?.uid) {
        return;
    }
    componentDragged.value = config.value
    e?.dataTransfer?.setData('uid', e?.target?.dataset?.uid)
}

const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e?.dataTransfer?.dropEffect) {
        if (componentDragged.value) {
            e.dataTransfer.dropEffect = 'move'
        } else {
            e.dataTransfer.dropEffect = 'copy'
        }
    }
}

const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (componentDragged.value) {

    } else {
        const makerName = e.dataTransfer?.getData('name')
        const makerPackage = e.dataTransfer?.getData('package')
        if (!makerName || !makerPackage) {
            return;
        }
        const maker = useComponentMaker(makerName, makerPackage)
        if (!maker.value) {
            return;
        }
        const childComponentConfig = getComponentConfigDefault(maker.value);
        if (isSlot.value) {
            parentSlot?.value?.push(childComponentConfig)
        }
    }
}
</script>

<style lang="less" scoped>
.component-config-render {
    // height: 100%;
    // width: 100%;
    display: inline-block;
    position: relative;

    &.isEdit {
        // * {
        //     // pointer-events: none;
        // }
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999999999999999;
            box-sizing: border-box;
        }

        &.selected,
        &.hovered {
            &::before {
                cursor: move;
                border: solid 3px #409eff;
            }
        }
    }
}
</style>