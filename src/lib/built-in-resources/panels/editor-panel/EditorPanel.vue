<template>
    <div class="editor-panel">
        <n-layout :native-scrollbar="false" style="height: 100%;">
            <template v-if="conmponentConfigSelected">
                <template v-if="editorConfigs.length > 0">
                    <n-form
                        label-placement="left"
                        :label-width="100"
                        label-align="right"
                        size="small"
                        :model="formValue"
                    >
                        <n-collapse display-directive="show">
                            <n-collapse-item title="基础信息">
                                <!-- TODO:支持页面路径和名称的编辑,并且编辑完路径后,要刷新下页面 -->
                                <n-form-item label="名字:">
                                    <n-input v-model:value="conmponentConfigSelected.name" />
                                </n-form-item>
                                <n-form-item label="唯一ID:">
                                    <div>{{ conmponentConfigSelected.uid }}</div>
                                </n-form-item>
                                <n-form-item label="制造器:">
                                    <div>{{ conmponentConfigSelected.makerName }} - {{ conmponentConfigSelected.makerPackage }}</div>
                                </n-form-item>
                            </n-collapse-item>
                            <n-collapse-item title="样式类">
                                <n-dynamic-input
                                    v-model:value="renderClassList"
                                    #="{ value }"
                                    :on-create="onCreate"
                                >
                                    <n-select
                                        v-model:value="value.value"
                                        :options="options"
                                        filterable
                                        tag
                                        placeholder="请选择或输入样式类名"
                                    />
                                </n-dynamic-input>
                            </n-collapse-item>
                            <n-collapse-item title="内联样式">
                                <n-dynamic-input
                                    v-model:value="renderStyle"
                                    #="{ value }"
                                    :on-create="onStyleCreate"
                                >
                                    <n-select
                                        v-model:value="value.cssName"
                                        :options="value.cssNameOptions"
                                        filterable
                                        tag
                                        placeholder="请选择或输入css变量名"
                                        @update:value="value.onCssNameUpdate"
                                    />
                                    <div style="height: 34px; line-height: 34px; margin: 0 8px;">=</div>
                                    <n-select
                                        v-model:value="value.cssValue"
                                        :options="value.cssValueOptions"
                                        filterable
                                        tag
                                        placeholder="请选择或输入css变量值"
                                    />
                                </n-dynamic-input>
                            </n-collapse-item>
                            <n-collapse-item title="属性">
                                <n-dynamic-input
                                    preset="pair"
                                    v-model:value="cmptProps"
                                    key-placeholder="props变量名"
                                    value-placeholder="props变量值"
                                />
                                <!-- TODO：仅仅支持选择不同的属性值和选择属性值的输入方式 ---属性值----类型（基础类型，数值，字符串。。。。）-----不同的输入框 -->
                            </n-collapse-item>
                            <n-collapse-item title="事件">
                                <!-- TODO：支持逻辑资源的拖拽添加或者下拉栏添加 -->
                            </n-collapse-item>
                            <n-collapse-item title="插槽">
                                <!-- TODO：支持已有组件的拖拽修改或者直接拖拽组件到其位置,进行添加 -->
                            </n-collapse-item>
                        </n-collapse>
                    </n-form>
                </template>
                <div v-else>没有找到可用的编辑器</div>
            </template>
            <div v-else>请选择组件</div>
        </n-layout>
    </div>
</template>
<script setup lang="ts">
import useComponentSelected from "$/hooks/useComponentSelected";
import { NCollapse, NCollapseItem, NLayout, NForm, NFormItem, NInput, NDynamicInput, NSelect } from "naive-ui"
import { computed, ref, watch, CSSProperties } from "vue";
import useComponentMaker from "$/hooks/useComponentMaker";
import IEditorConfig from "$/types/IEditorConfig";
import IComponentConfig from "$/types/IComponentConfig";
import * as CSS from '$/utils/css'; // TODO:css选择建议去掉
import camelCase from "camelcase"

const conmponentConfigSelected = useComponentSelected()
defineProps({
    afterCook: {
        type: String
    }
})
const formValue = ref()
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
const options = ref(
    [
        {
            label: 'Drive My Car',
            value: 'song1'
        },
        {
            label: 'Norwegian Wood',
            value: 'song2'
        },
    ])
const renderClassList = ref(conmponentConfigSelected.value?.attrs?.render?.class)
watch(renderClassList, () => {
    const componentConfigValue = conmponentConfigSelected.value
    if (componentConfigValue) {
        componentConfigValue.attrs = componentConfigValue.attrs || {}
        componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
        componentConfigValue.attrs.render.class = renderClassList.value
    }

})
const onCreate = () => {
    return {
        value: null
    }
}

interface StyleItem {
    cssName: string | null,
    cssValue: string | null,
    cssNameOptions: Array<{
        label: string,
        value: string,
    }>,
    cssValueOptions: Array<{
        label: string,
        value: string,
    }>,
    onCssNameUpdate: (value: string) => void
}

const onStyleCreate = () => {
    const item: StyleItem = {
        cssName: null,
        cssValue: null,
        cssNameOptions: Object.keys(CSS).map(key => {
            key = camelCase(key)
            return {
                label: key,
                value: key
            }
        }),
        cssValueOptions: [],
        onCssNameUpdate: (value: string) => {
            const cssNamekey = camelCase(value, { pascalCase: true })
            // @ts-ignore
            item.cssValueOptions = Object.keys(CSS[cssNamekey] || {}).map(key => {
                key = camelCase(key)
                return {
                    label: key,
                    value: key
                }
            })
        }
    }
    return item
}




const renderStyle = ref(Object.entries(conmponentConfigSelected.value?.attrs?.render?.style || {}).map(e => ({ key: e[0], value: e[1] })))
watch(renderStyle, () => {
    const componentConfigValue = conmponentConfigSelected.value
    if (componentConfigValue) {
        componentConfigValue.attrs = componentConfigValue.attrs || {}
        componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
        let styleObj: Record<string, string | number> = {};
        renderStyle.value.forEach(e => {
            styleObj[e.key] = e.value
        })
        componentConfigValue.attrs.render.style = styleObj
    }
})
const cmptProps = ref(Object.entries(conmponentConfigSelected.value?.attrs?.props || {}).map(e => ({ key: e[0], value: e[1] })))
watch(cmptProps, () => {
    const componentConfigValue = conmponentConfigSelected.value
    if (componentConfigValue) {
        componentConfigValue.attrs = componentConfigValue.attrs || {}
        let propsObj: Record<string, string | number> = {};
        cmptProps.value.forEach(e => {
            propsObj[e.key] = e.value
        })
        componentConfigValue.attrs.props = propsObj
    }
})
</script>
<style lang="less" scoped>
.editor-panel {
    height: 100%;
    padding: 10px;
}
</style>