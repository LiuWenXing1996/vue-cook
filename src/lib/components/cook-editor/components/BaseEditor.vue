<template>
    <n-descriptions label-placement="left" title="基础信息" :column="1" style="text-align: left;">
        <n-descriptions-item label="名字">
            <n-ellipsis style="max-width: calc(100% - 100px);">{{ componentConfig.name }}</n-ellipsis>
        </n-descriptions-item>
        <n-descriptions-item label="唯一ID">
            <n-ellipsis style="max-width: calc(100% - 100px);">{{ componentConfig.uid }}</n-ellipsis>
        </n-descriptions-item>
        <n-descriptions-item label="制造器">
            <div>{{ componentConfig.makerName }} - {{ componentConfig.makerPackage }}</div>
        </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="left" title="渲染器" :column="1" style="text-align: left;">
        <n-descriptions-item label="样式类">
            <n-dynamic-input v-model:value="renderClassList" placeholder="请输入样式类名" :min="0" />
        </n-descriptions-item>
        <n-descriptions-item label="内联样式">
            <n-dynamic-input
                preset="pair"
                v-model:value="renderStyle"
                key-placeholder="css变量名"
                value-placeholder="css变量值"
            />
        </n-descriptions-item>
    </n-descriptions>
    <n-descriptions
        label-placement="left"
        label-align="right"
        title="组件"
        :column="1"
        style="text-align: left;"
    >
        <n-descriptions-item label="样式类">
            <n-dynamic-input v-model:value="cmptClassList" placeholder="请输入样式类名" :min="0" />
        </n-descriptions-item>
        <n-descriptions-item label="内联样式">
            <n-dynamic-input
                preset="pair"
                v-model:value="cmptStyle"
                key-placeholder="css变量名"
                value-placeholder="css变量值"
            />
        </n-descriptions-item>
        <n-descriptions-item label="属性">
            <n-dynamic-input
                preset="pair"
                v-model:value="cmptProps"
                key-placeholder="props变量名"
                value-placeholder="props变量值"
            />
        </n-descriptions-item>
        <n-descriptions-item label="插槽">
            <n-data-table :columns="cmptSlotsColumns" :data="cmptSlotsData" :single-line="false" />
        </n-descriptions-item>
        <n-descriptions-item label="事件">
            <n-data-table :columns="cmptEmitsColumns" :data="cmptEmitsData" :single-line="false" />
        </n-descriptions-item>
    </n-descriptions>
</template>
<script setup lang="ts">
import type IComponentConfig from "$/types/IComponentConfig";
import { computed, h, ref, toRefs, watch } from "vue"
import { NButton, NDataTable, NDynamicInput, NEllipsis, NSelect, NCollapse, NCollapseItem, NDescriptions, NDescriptionsItem } from "naive-ui"

const props = defineProps({
    componentConfig: {
        type: Object as () => IComponentConfig,
        required: true
    }
})

const { componentConfig } = toRefs(props);
const renderStyle = ref(Object.entries(componentConfig.value?.attrs?.render?.style || {}).map(e => ({ key: e[0], value: e[1] })))
watch(renderStyle, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    let styleObj: Record<string, string | number> = {};
    renderStyle.value.forEach(e => {
        styleObj[e.key] = e.value
    })
    componentConfigValue.attrs.render.style = styleObj
})
const renderClassList = ref(componentConfig.value?.attrs?.render?.class)
watch(renderClassList, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    componentConfigValue.attrs.render.class = renderClassList.value
})
const cmptClassList = ref(componentConfig.value?.attrs?.class)
watch(cmptClassList, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.class = cmptClassList.value
})
const cmptStyle = ref(Object.entries(componentConfig.value?.attrs?.render?.style || {}).map(e => ({ key: e[0], value: e[1] })))
watch(cmptStyle, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    let styleObj: Record<string, string | number> = {};
    cmptStyle.value.forEach(e => {
        styleObj[e.key] = e.value
    })
    componentConfigValue.attrs.style = styleObj
})
const cmptProps = ref(Object.entries(componentConfig.value?.attrs?.props || {}).map(e => ({ key: e[0], value: e[1] })))
watch(cmptProps, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    let propsObj: Record<string, string | number> = {};
    cmptProps.value.forEach(e => {
        propsObj[e.key] = e.value
    })
    componentConfigValue.attrs.props = propsObj
})
const cmptSlots = computed(() => {
    return componentConfig.value?.attrs?.slots
})

const cmptSlotsColumns = computed(() => {
    return [
        {
            title: '插槽名称',
            key: 'name',
            rowSpan: (rowdata: any) => rowdata.count,
            colSpan: () => 1
        },
        {
            title: '组件uid',
            key: 'cmptUid'
        }
    ]
})
const cmptSlotsData = computed(() => {
    const slots = componentConfig.value?.attrs?.slots || {};
    const slotList = Object.entries(slots).flatMap(e => {
        const value = e[1];
        return value.map(v => {
            return {
                key: e[0],
                name: e[0],
                count: e[1].length,
                cmptUid: v.uid
            }
        })
    })
    return slotList
})
const cmptEmitsColumns = computed(() => {
    return [
        {
            title: '事件名称',
            key: 'name',
            rowSpan: (rowdata: any) => rowdata.count,
            colSpan: () => 1
        },
        {
            title: '组合uid',
            key: 'cmpnUid'
        }
    ]
})
const cmptEmitsData = computed(() => {
    const emits = componentConfig.value?.attrs?.emits || {};
    const emitList = Object.entries(emits).flatMap(e => {
        const value = e[1];
        return value.map(v => {
            return {
                key: e[0],
                name: e[0],
                count: e[1].length,
                cmpnUid: v.uid
            }
        })
    })
    return emitList
})



</script>
<style lang="less">
</style>