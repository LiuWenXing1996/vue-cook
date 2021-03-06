<template>
    <n-scrollbar style="height: 100%;">
        <div class="editor-panel">
            <template v-if="config">
                <n-form
                    label-placement="left"
                    :label-width="70"
                    label-align="right"
                    size="small"
                    :model="formValue"
                >
                    <n-divider title-placement="left">基础信息</n-divider>
                    <n-form-item label="名字">
                        <n-input v-model:value="config.name" />
                    </n-form-item>
                    <n-form-item label="唯一ID">
                        <div>
                            {{ config.uid }}
                            <n-icon @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
                                <location-outline></location-outline>
                            </n-icon>
                        </div>
                    </n-form-item>
                    <n-form-item label="资源类型">
                        <div class="round-name-tag">{{ config.makerName }}</div>
                        <div style="padding: 0 2px;">-</div>
                        <div class="round-pkg-tag">{{ config.makerPkg }}</div>
                    </n-form-item>
                    <n-divider title-placement="left">属性</n-divider>
                    <props-editor></props-editor>
                    <n-divider title-placement="left">事件</n-divider>
                    <events-editor></events-editor>
                    <n-divider title-placement="left">插槽</n-divider>
                    <slots-editor></slots-editor>
                </n-form>
            </template>
            <div v-else>请选择组件</div>
        </div>
    </n-scrollbar>
</template>
<script setup lang="ts">
import { NScrollbar, NForm, NFormItem, NInput, NDivider, NIcon, NTag } from "naive-ui"
import { computed, inject, ref } from "vue";
import { LocationOutline } from "@vicons/ionicons5";
import EventsEditor from "./events-editor/index.vue"
import SlotsEditor from "./slots-editor/index.vue"
import PropsEditor from "./props-editor/index.vue"
import useComponentFocused from "@/hooks/useComponentFocused";
import ICookEditorState from "@/types/ICookEditorState";
import useComponentSelected from "@/hooks/useComponentSelected";

const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const selectedComponent = useComponentSelected(cookEditorState).get()
const config = computed(() => {
    return selectedComponent.value?.component
})

const formValue = ref()

const handleMouseLeave = () => {
    useComponentFocused(cookEditorState).set()
}

const handleMouseMove = (e: MouseEvent) => {
    if (selectedComponent.value?.page.uid && selectedComponent.value?.component.uid) {
        useComponentFocused(cookEditorState).set({
            pageUid: selectedComponent.value?.page.uid,
            componentUid: selectedComponent.value?.component.uid
        })
    }
}


</script>
<style lang="less" scoped>
.editor-panel {
    padding: 10px;
    :deep(.n-divider) {
        margin-top: 2px;
        margin-bottom: 12px;
    }
    .n-icon:hover {
        cursor: pointer;
        color: rgb(24, 160, 88);
    }
    :deep(.n-form-item-label) {
        word-break: break-all;
        white-space: normal;
    }
    .round-name-tag,
    .round-pkg-tag {
        background-color: rgba(24, 160, 88, 0.1);
        border: 1px solid rgba(24, 160, 88, 0.3);
        color: #18a058;
        border-radius: 10px;
        padding: 0 5px;
        font-size: 12px;
        box-sizing: border-box;
    }
    .round-name-tag {
        flex-shrink: 0;
    }
    .round-pkg-tag {
        flex-shrink: 1;
        word-break: break-all;
    }
}
</style>