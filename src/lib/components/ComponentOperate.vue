<template>
    <div class="component-operate">
        <div class="grid-wrapper">
            <operate-grid></operate-grid>
        </div>
        <ComponentConfigRender :config="config" :is-edit="true"></ComponentConfigRender>
    </div>
</template>
<script setup lang="ts">
import OperateGrid from "./OperateGrid.vue"
import ComponentConfigRender from "$/components/ComponentConfigRender.vue"
import useRootComponentConfig from "$/hooks/useRootComponentConfig"
const config = useRootComponentConfig()
</script>
<style lang="less" scoped>
.component-operate {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    .grid-wrapper {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        top: 20px;
        left: 20px;
    }
}
</style>