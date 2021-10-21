<template>
    <template v-if="componentConfig">
        <n-popover trigger="manual" :show="showPopover" placement="left">
            <template #trigger>
                <div
                    class="component-overlay"
                    :class="[{ selected: selected }]"
                    :data-name="componentConfig.name"
                    :draggable="true"
                    :data-uid="componentConfig.uid"
                    @click="handleClick(componentConfig, selected, $event)"
                    @dragstart="handleDragStart(componentConfig, $event)"
                    @dragover="handleDragOver($event, hasSlot)"
                >
                    <div
                        class="component-slot"
                        v-for="slotName in maker?.slots"
                        @drop="handleDrop(slotName, componentConfig, $event)"
                        @dragover="handleDragOver($event, hasSlot)"
                    >{{ slotName }}</div>
                </div>
            </template>
            <div class="component-overlay-tips">
                <div class="overlay-tips-item">
                    <div class="overlay-tips-item-label">名称</div>
                    <div class="overlay-tips-item-content">{{ componentConfig.name }}</div>
                </div>
                <div class="overlay-tips-item">
                    <div class="overlay-tips-item-label">uid</div>
                    <div class="overlay-tips-item-content">{{ componentConfig.uid }}</div>
                </div>
                <div class="overlay-tips-item">
                    <div class="overlay-tips-item-label">宽度</div>
                    <div class="overlay-tips-item-content">{{ width }}</div>
                </div>
                <div class="overlay-tips-item">
                    <div class="overlay-tips-item-label">高度</div>
                    <div class="overlay-tips-item-content">{{ height }}</div>
                </div>
                <div class="overlay-tips-item">
                    <div class="overlay-tips-item-label">插槽</div>
                    <!-- TODO：是否有插槽算的有问题 -->
                    <div class="overlay-tips-item-content">
                        <template v-if="hasSlot">
                            <n-tag
                                type="success"
                                size="small"
                                round
                                v-for="(slot,key) in componentConfig?.slots"
                            >{{ key }}</n-tag>
                        </template>
                        <template v-else>无</template>
                    </div>
                </div>
            </div>
        </n-popover>
    </template>
    <template v-else>id为{{ overlay.configUid }}的组件没有找到</template>
</template>
<script setup lang="ts">
import { computed, nextTick, ref, toRefs, watch } from "vue";
import IComponentOverlay from "$/types/IComponentOverlay";
import handleClick from "./handleClick";
import handleDragStart from "./handleDragStart";
import handleDrop from "./handleDrop";
import handleDragOver from "./handleDragOver";
import useComponentSelected from "@/lib/hooks/useComponentSelected";
import useComponentConfig from "@/lib/hooks/useComponentConfig";
import IPageCookPanelSize from "@/lib/types/IPageCookPanelSize";
import { NPopover, NTag } from "naive-ui"
import useComponentMaker from "@/lib/hooks/useComponentMaker";
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
    return useComponentConfig(overlay.value.configUid).value
})
const maker = computed(() => {
    return useComponentMaker(componentConfig.value?.makerName, componentConfig.value?.makerPackage).value
})
const hasSlot = computed(() => {
    return Boolean(maker.value?.slots?.length && maker.value?.slots?.length > 0)
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
const componentSelected = useComponentSelected()
const selected = computed(() => componentSelected.value?.uid === overlay.value.configUid) // WHY为什么必须要用UID来判断，直接判断对象相等不可以呢？

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

    &:hover {
        cursor: move;
    }
    &.selected {
        border-color: #409eff;
    }

    .component-slot {
        border: 1px dashed rgb(216, 213, 213);
        background-color: rgba(24, 160, 88, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        box-sizing: border-box;
        height: 100%;
    }
}
</style>
<style lang="less">
.component-overlay-tips {
    display: flex;
    flex-direction: column;
    .overlay-tips-item {
        display: flex;
        margin-bottom: 3px;
        justify-content: space-between;
        &::last-child {
            margin-bottom: 0;
        }
        .overlay-tips-item-label {
            max-width: 50px;
            margin-right: 10px;
        }
        .overlay-tips-item-content {
            display: flex;
            max-width: 120px;
            word-break: break-all;
        }
    }
}
</style>