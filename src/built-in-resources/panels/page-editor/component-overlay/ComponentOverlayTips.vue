<template>
    <template v-if="componentConfig">
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
                <div class="overlay-tips-item-content">
                    <template v-if="slotOptions.length > 0">
                        <div class="round-slot-tag" v-for="slotName in slotOptions">{{ slotName }}</div>
                    </template>
                    <template v-else>无</template>
                </div>
            </div>
        </div>
    </template>
    <template v-else>没有找到{{ overlay.configUid }}的组件信息</template>
</template>
<script setup lang="ts">
import findComponentConfig from '@/utils/findComponentConfig';
import useComponentMaker from '@/hooks/useComponentMaker';
import IComponentOverlay from '@/types/IComponentOverlay';
import IPageCookPanelSize from '@/types/IPageCookPanelSize';
import { computed, inject, toRefs } from 'vue';
import ICookEditorState from '@/types/ICookEditorState';
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
const componentConfig = computed(() => {
    const page = cookEditorState.pages.find(e => e.uid === overlay.value.pageUid)
    if (page) {
        return findComponentConfig(page.component, overlay.value.configUid)
    }
})
const maker = computed(() => {
    return useComponentMaker(cookEditorState, componentConfig.value?.makerName, componentConfig.value?.makerPkg).value
})
const slotOptions = computed(() => {
    if (componentConfig.value) {
        const _slotOptions = maker.value?.makeSlotOptions?.(componentConfig.value)
        if (_slotOptions && _slotOptions.length > 0) {
            return _slotOptions
        }
    }
    return []
})
</script>
<style lang="less" scoped>
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
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .round-slot-tag {
            background-color: rgba(24, 160, 88, 0.1);
            border: 1px solid rgba(24, 160, 88, 0.3);
            color: #18a058;
            border-radius: 10px;
            padding: 0 5px;
            font-size: 12px;
            box-sizing: border-box;
            height: fit-content;
        }
        .round-slot-tag {
            margin-right: 2px;
            margin-bottom: 2px;
        }
    }
}
</style>