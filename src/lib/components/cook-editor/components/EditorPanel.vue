<template>
    <div class="component-editor">
        <div class="title">编辑器 {{ afterCook }}</div>
        <div class="content">
            <n-layout :native-scrollbar="false" style="height: 100%;">
                <template v-if="conmponentConfigSelected">
                    <template v-if="editorConfigs.length > 0">
                        <n-collapse>
                            <n-collapse-item
                                :title="editorConfig.name"
                                v-for="editorConfig in editorConfigs"
                            >
                                <editor-render
                                    :config="editorConfig"
                                    :resource-config="conmponentConfigSelected"
                                ></editor-render>
                            </n-collapse-item>
                        </n-collapse>
                    </template>
                    <div v-else>没有找到可用的编辑器</div>
                </template>
                <div v-else>请选择组件</div>
            </n-layout>
        </div>
    </div>
</template>
<script setup lang="ts">
import useComponentSelected from "$/hooks/useComponentSelected";
import { NCollapse, NCollapseItem, NLayout } from "naive-ui"
import { computed } from "vue";
import useComponentMaker from "$/hooks/useComponentMaker";
import EditorRender from "./editor-render/EditorRender.vue";
import IEditorConfig from "$/types/IEditorConfig";
import IComponentConfig from "$/types/IComponentConfig";

const conmponentConfigSelected = useComponentSelected()
defineProps({
    afterCook: {
        type: String
    }
})

const editorConfigs = computed(() => {
    const defaultEditorConfigs: IEditorConfig[] = [
        {
            type: "string",
            name: "组件名称",
            getValue: (editorConfig, componentConfig) => {
                return componentConfig.name
            },
            setValue: (editorConfig, componentConfig, newValue) => {
                componentConfig.name = newValue
            }
        },
    ]
    const dynamicEditorConfigs: IEditorConfig[] = []
    if (conmponentConfigSelected.value) {
        const { makerName, makerPackage } = conmponentConfigSelected.value
        const maker = useComponentMaker(makerName, makerPackage);
        if (maker.value) {
            const props = maker.value.props
            if (props) {
                const keys = Object.keys(props);
                keys.forEach(key => {
                    const editor = props[key]
                    const editorConfig: IEditorConfig = {
                        type: editor.type,
                        data: editor.data,
                        name: `组件-属性-${key}`,
                        getValue: (editorConfig, resourceConfig) => {
                            const componentConfig = resourceConfig as IComponentConfig
                            return componentConfig?.attrs?.props?.[key]
                        },
                        setValue: (editorConfig, resourceConfig, newValue) => {
                            const componentConfig = resourceConfig as IComponentConfig
                            componentConfig.attrs = componentConfig.attrs || {}
                            componentConfig.attrs.props = componentConfig.attrs.props || {}
                            componentConfig.attrs.props[key] = newValue
                        }
                    }
                    dynamicEditorConfigs.push(editorConfig)
                })
            }
        }
    }

    return [
        ...defaultEditorConfigs,
        ...dynamicEditorConfigs,
    ]
})
</script>Ï
<style lang="less" scoped>
.component-editor {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: 10px;
        padding: 6px 10px;
        border-bottom: 1px solid rgb(239, 239, 245);
    }
    .content {
        flex-grow: 1;
        padding: 10px;
    }
}
</style>