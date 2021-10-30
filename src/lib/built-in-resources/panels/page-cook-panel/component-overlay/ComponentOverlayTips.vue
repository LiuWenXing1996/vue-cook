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
    </template>
    <template v-else>没有找打{{ overlay.configUid }}的组件信息</template>
</template>
<script setup lang="ts">
import findComponentConfig from '@/lib/utils/findComponentConfig';
import useComponentMaker from '@/lib/hooks/useComponentMaker';
import IComponentOverlay from '@/lib/types/IComponentOverlay';
import IPageCookPanelSize from '@/lib/types/IPageCookPanelSize';
import { computed, inject, toRefs } from 'vue';
import { NTag } from "naive-ui"
import ICookEditorState from '@/lib/types/ICookEditorState';
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
const hasSlot = computed(() => {
    return Boolean(maker.value?.slots?.length && maker.value?.slots?.length > 0)
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
        }
    }
}
</style>