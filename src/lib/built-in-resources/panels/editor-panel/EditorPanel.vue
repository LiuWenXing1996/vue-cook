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
                    <n-form-item label="maker">
                        <div class="round-name-tag">{{ config.makerName }}</div>
                        <div style="padding: 0 2px;">-</div>
                        <div class="round-pkg-tag">{{ config.makerPkg }}</div>
                    </n-form-item>
                    <!-- TODO:不同的editor修改 -->
                    <n-divider title-placement="left">属性</n-divider>
                    <props-editor></props-editor>
                    <n-divider title-placement="left">事件</n-divider>
                    <emits-editor></emits-editor>
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
import { computed, inject, ref, watch } from "vue";
import { LocationOutline } from "@vicons/ionicons5";
import EmitsEditor from "./emits-editor/EmitsEditor.vue"
import SlotsEditor from "./slots-editor/SlotsEditor.vue"
import PropsEditor from "./PropsEditor.vue"
import useComponentFocused from "@/lib/hooks/useComponentFocused";
import ICookEditorState from "@/lib/types/ICookEditorState";
import findComponentConfig from "@/lib/utils/findComponentConfig";
import IComponentConfig from "@/lib/types/IComponentConfig";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const config = ref<IComponentConfig>()

watch(() => cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected, () => {
    const configUid = cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected?.componentUid
    const pageUid = cookEditorState.extra.VueCook?.ComponentEditorPanel?.componetSelected?.pageUid
    const page = cookEditorState.pages.find(e => e.uid === pageUid)
    if (page && configUid) {
        config.value = findComponentConfig(page.component, configUid)
    } else {
        config.value = undefined
    }
})

const formValue = ref()

const handleMouseLeave = () => {
    const componentFocused = useComponentFocused();
    componentFocused.value = undefined
}

const handleMouseMove = (e: MouseEvent) => {
    const componentFocused = useComponentFocused();
    componentFocused.value = config.value
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
    .emit-editor {
        width: 100%;
        .emit-add-bar {
            width: 100%;
            padding: 2px 9px;
            box-sizing: border-box;
            background-color: #efeff5;
            border-radius: 20px;
            border: 1px solid rgb(224, 224, 230);
            font-weight: bolder;
            font-size: 12px;
        }
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