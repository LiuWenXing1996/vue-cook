<template>
    <div class="resource-panel">
        <div class="title">资源</div>
        <div class="content">
            <n-layout :native-scrollbar="false" style="height: 100%;">
                <n-space>
                    <component-maker v-for="maker in makerList" :maker="maker"></component-maker>
                </n-space>
            </n-layout>
        </div>
    </div>
</template>
<script setup lang="ts">
import useComponentMakerList from "$/hooks/useComponentMakerList";
import ComponentMaker from "./ComponentMaker.vue";
import { NSpace, NLayout } from "naive-ui"
const makerList = useComponentMakerList();
</script>
<style lang="less" scoped>
.resource-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        padding: 6px 10px;
        justify-content: space-between;
        border-bottom: 1px solid rgb(239, 239, 245);
    }
    .content {
        flex-grow: 1;
        padding: 10px;
    }
}
</style>