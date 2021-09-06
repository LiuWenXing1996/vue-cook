<template>
    <n-collapse>
        <n-collapse-item title="组件" name="component">
            <n-collapse>
                <n-collapse-item
                    :title="name.toString()"
                    :name="name"
                    v-for="(list,name) in componentMakerGroup"
                >
                    <component-maker v-for="maker in list" :maker="maker"></component-maker>
                </n-collapse-item>
            </n-collapse>
        </n-collapse-item>
        <n-collapse-item title="组合" name="composition">
            <n-collapse>
                <n-collapse-item
                    :title="name.toString()"
                    :name="name"
                    v-for="(list,name) in compositionMakerGroup"
                >
                    <composition-maker v-for="maker in list" :maker="maker"></composition-maker>
                </n-collapse-item>
            </n-collapse>
        </n-collapse-item>
        <n-collapse-item title="窗口" name="window">
            <n-collapse>
                <n-collapse-item
                    :title="name.toString()"
                    :name="name"
                    v-for="(list,name) in windowsMakerGroup"
                >
                    <window-maker v-for="maker in list" :maker="maker"></window-maker>
                </n-collapse-item>
            </n-collapse>
        </n-collapse-item>
    </n-collapse>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { groupBy } from "lodash-es";
import { NCollapse, NCollapseItem } from "naive-ui"
import useComponentMakerList from "$/hooks/useComponentMakerList";
import ComponentMaker from "./ComponentMaker.vue";
import CompositionMaker from "./CompositionMaker.vue";
import WindowMaker from "./WindowMaker.vue";
import useCompositionMakerList from "../hooks/useCompositionMakerList";
import useWindowMakerList from "../hooks/useWindowMakerList";
const componentMakerList = useComponentMakerList();
const compositionMakerList = useCompositionMakerList();
const windowMakerList = useWindowMakerList();
const componentMakerGroup = computed(() => {
    return groupBy(componentMakerList.value, "package")
})
const compositionMakerGroup = computed(() => {
    return groupBy(compositionMakerList.value, "package")
})
const windowsMakerGroup = computed(() => {
    return groupBy(windowMakerList.value, "package")
})
</script>
<style lang="less">
</style>