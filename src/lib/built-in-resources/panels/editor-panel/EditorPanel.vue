<template>
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
                <n-form-item label="制造器">
                    <div>{{ config.makerName }} - {{ config.makerPackage }}</div>
                </n-form-item>
                <n-divider title-placement="left">属性</n-divider>
                <edit-props></edit-props>
                <n-divider title-placement="left">事件</n-divider>
                <emits-editor></emits-editor>
                <n-divider title-placement="left">插槽</n-divider>
                <edit-slots></edit-slots>
            </n-form>
        </template>
        <div v-else>请选择组件</div>
    </div>
</template>
<script setup lang="ts">
import useComponentSelected from "$/hooks/useComponentSelected";
import { NCollapse, NCollapseItem, NLayout, NForm, NFormItem, NInput, NDynamicInput, NSelect, NDivider, NIcon } from "naive-ui"
import { computed, ref, watch, CSSProperties } from "vue";
import { LocationOutline } from "@vicons/ionicons5";
import EmitsEditor from "./emits-editor/EmitsEditor.vue"
import EditProps from "./EditProps.vue"
import EditSlots from "./EditSlots.vue"


const config = useComponentSelected()
const formValue = ref()

const handleMouseLeave = () => {
}

const handleMouseMove = (e: MouseEvent) => {
    // 鼠标悬停定位组件
}


</script>
<style lang="less" scoped>
.editor-panel {
    height: 100%;
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
}
</style>