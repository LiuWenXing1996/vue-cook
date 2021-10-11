<template>
    <div class="resource-panel">
        <n-layout :native-scrollbar="false" style="height: 100%;">
            <n-space>
                <resuorce-maker v-for="maker in makerList" :maker="maker"></resuorce-maker>
            </n-space>
        </n-layout>
    </div>
</template>
<script setup lang="ts">
import useResourceMakerList from "$/hooks/useResourceMakerList";
import ResuorceMaker from "./ResuorceMaker.vue";
import { NSpace, NLayout } from "naive-ui"
const makerList = useResourceMakerList();
//TODO:面板筛选和搜索功能
//TODO:查看下滚动条为啥用不了了
</script>
<style lang="less" scoped>
.resource-panel {
    height: 100%;
    padding: 10px;
}
</style>