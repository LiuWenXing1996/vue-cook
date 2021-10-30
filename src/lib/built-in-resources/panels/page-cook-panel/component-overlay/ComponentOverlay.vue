<template>
    <template v-if="componentConfig">
        <n-popover trigger="manual" :show="showPopover" placement="left">
            <template #trigger>
                <div
                    class="component-overlay"
                    @click="handleClick(cookEditorState, overlay, $event)"
                >
                    <div class="slot-dragger-wrapper" v-for="slotName in maker?.slots">
                        <slot-dragger :slot-name="slotName" :component-config="componentConfig"></slot-dragger>
                    </div>
                </div>
            </template>
            <component-overlay-tips :size="size" :overlay="overlay"></component-overlay-tips>
        </n-popover>
    </template>
    <template v-else>id为{{ overlay.configUid }}的组件没有找到</template>
</template>
<script setup lang="ts">
import { computed, inject, nextTick, ref, toRefs, watch } from "vue";
import IComponentOverlay from "@/lib/types/IComponentOverlay";
import handleClick from "./handleClick";
import findComponentConfig from "@/lib/utils/findComponentConfig";
import IPageCookPanelSize from "@/lib/types/IPageCookPanelSize";
import { NPopover } from "naive-ui"
import useComponentMaker from "@/lib/hooks/useComponentMaker";
import SlotDragger from "@/lib/components/slot-dragger/SlotDragger.vue"
import ComponentOverlayTips from "./ComponentOverlayTips.vue"
import ICookEditorState from "@/lib/types/ICookEditorState";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps(
    {
        overlay: {
            type: Object as () => IComponentOverlay,
            required: true
        },
        size: {
            type: Object as () => IPageCookPanelSize,
            required: true
        }
    }
)
const { overlay, size } = toRefs(props)
const toPx = (n: number) => `${n}px`
const width = computed(() => toPx(overlay.value.rect.width * size.value.scale / 100))
const height = computed(() => toPx(overlay.value.rect.height * size.value.scale / 100))
const left = computed(() => toPx(overlay.value.rect.left * size.value.scale / 100))
const top = computed(() => toPx(overlay.value.rect.top * size.value.scale / 100))
const componentConfig = computed(() => {
    const page = cookEditorState.pages.find(e => e.uid === overlay.value.pageUid)
    if (page) {
        return findComponentConfig(page.component, overlay.value.configUid)
    }
})
const maker = computed(() => {
    return useComponentMaker(cookEditorState, componentConfig.value?.makerName, componentConfig.value?.makerPkg).value
})
watch(overlay, (newValue, oldValue) => {
    if (newValue.configUid !== oldValue.configUid) {
        showPopover.value = false;
        nextTick(() => {
            showPopover.value = true;
        })
    }
})
const showPopover = ref(true)

</script>
<style lang="less" scoped>
.component-overlay {
    position: absolute;
    z-index: 3;
    width: v-bind(width);
    height: v-bind(height);
    left: v-bind(left);
    top: v-bind(top);
    border: solid 1px;
    border-color: #18a058;
    border-radius: 3px;
    background-color: rgba(24, 160, 88, 0.3);
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .slot-dragger-wrapper {
        flex: 1;
        height: 100%;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
<style lang="less">
</style>