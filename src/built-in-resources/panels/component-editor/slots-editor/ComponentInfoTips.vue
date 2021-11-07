<template>
    <div class="component-info-tips">
        <div class="info-tips-item">
            <div class="info-tips-item-label">名称</div>
            <div class="info-tips-item-content">{{ componentConfig.name }}</div>
        </div>
        <div class="info-tips-item">
            <div class="info-tips-item-label">uid</div>
            <div class="info-tips-item-content">{{ componentConfig.uid }}</div>
        </div>
        <div class="info-tips-item">
            <div class="info-tips-item-label">maker</div>
            <div class="info-tips-item-content">
                <div class="round-name-tag">{{ componentConfig.makerName }}</div>
                <div style="padding: 0 2px;">-</div>
                <div class="round-pkg-tag">{{ componentConfig.makerPkg }}</div>
            </div>
        </div>
        <div class="info-tips-item">
            <div class="info-tips-item-label">插槽</div>
            <div class="info-tips-item-content">
                <template v-if="slotOptions.length > 0">
                    <div class="round-slot-tag" v-for="slotName in slotOptions">{{ slotName }}</div>
                </template>
                <template v-else>无</template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import useComponentMaker from '@/hooks/useComponentMaker';
import { computed, inject, toRefs } from 'vue';
import IComponentConfig from '@/types/IComponentConfig';
import ICookEditorState from '@/types/ICookEditorState';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    componentConfig: {
        type: Object as () => IComponentConfig,
        required: true
    }
})
const { componentConfig } = toRefs(props)

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
.component-info-tips {
    display: flex;
    flex-direction: column;
    .info-tips-item {
        display: flex;
        margin-bottom: 3px;
        justify-content: space-between;
        &::last-child {
            margin-bottom: 0;
        }
        .info-tips-item-label {
            max-width: 50px;
            margin-right: 10px;
        }
        .info-tips-item-content {
            display: flex;
            max-width: 120px;
            word-break: break-all;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .round-name-tag,
        .round-slot-tag,
        .round-pkg-tag {
            background-color: rgba(24, 160, 88, 0.1);
            border: 1px solid rgba(24, 160, 88, 0.3);
            color: #18a058;
            border-radius: 10px;
            padding: 0 5px;
            font-size: 12px;
            box-sizing: border-box;
            height: fit-content;
        }
        .round-name-tag {
            flex-shrink: 0;
        }
        .round-slot-tag {
            margin-right: 2px;
            margin-bottom: 2px;
        }
        .round-pkg-tag {
            flex-shrink: 1;
            word-break: break-all;
        }
    }
}
</style>