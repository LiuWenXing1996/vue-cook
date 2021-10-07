<template>
    <div class="panel-list">
        <div class="panel">
            <h3>Draggable 1</h3>
            <draggable class="tabs" :list="list1" group="people" itemKey="name">
                <template #item="{ element, index }">
                    <div class="tab-panel">
                        <div class="tab-title">标题：{{ element.name }}</div>
                        <div class="tab-content">内容：{{ element.name }} {{ index }}</div>
                    </div>
                </template>
            </draggable>
        </div>

        <div class="panel">
            <h3>Draggable 2</h3>
            <draggable class="tabs" :list="list2" group="people" itemKey="name">
                <template #item="{ element, index }">
                    <div class="tab-panel">
                        <div class="tab-title">标题：{{ element.name }}</div>
                        <div class="tab-content">内容：{{ element.name }} {{ index }}</div>
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
const list1 = ref([
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 }
])
const list2 = ref([
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 }
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
    .tab-panel {
        position: absolute;
        top: 20px;
        left: 0;
        width: 70%;
        height: 70%;
        padding: 20px;
        border-radius: 10px;
        background-color: beige;
        margin-bottom: 20px;
        box-sizing: border-box;
        .tab-title{
            width: 20px;
            background-color: rgb(220, 220, 245);
        }
    }
}
</style>