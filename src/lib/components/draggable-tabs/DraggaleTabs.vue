<template>
    <div class="panel-list">
        <div class="panel" v-for="(list,index) in group">
            <h3>{{ index }}</h3>
            <draggable class="tabs" :list="list" group="people" itemKey="title">
                <template #item="{ element, index }">
                    <tab-panel :index="index" :count="list.length" :config="element" :active-index="1"></tab-panel>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import TabPanel from "./TabPanel.vue";
import type { ITabConfig } from "./TabPanel.vue";
import content from "./Content.vue"
// 使用split pane 分割，vue draggle 控制标题拖动，teleport控制panel移动
const group = ref<Array<Array<ITabConfig>>>([
    [
        { title: "John1", content: content },
        { title: "John2", content: content },
        { title: "John3", content: content },
        { title: "John4", content: content },
    ],
    [
        { title: "John5", content: content },
        { title: "John6", content: content },
        { title: "John7", content: content },
        { title: "John8", content: content },
    ]
])


</script>
<style lang="less">
.panel-list {
    display: flex;
    .panel {
        margin-right: 20px;
    }
    .tabs {
        width: 500px;
        height: 500px;
        background-color: rgb(68, 146, 98);
        padding: 20px;
        position: relative;
        box-sizing: border-box;
    }
}
</style>