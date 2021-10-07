<template>
    <div class="cook-editor">
        <template>
            <div class="temp-teleport">
                <div id="temp"></div>

                <template v-for="l in allList" v-if="s" :key="l.uid">
                    <teleport :to="`#${l.telId}`">
                        {{ l.uid }}
                        <!-- <input />   不应该吧他们放在两个循环里面 -->
                        <n-input></n-input>
                    </teleport>
                </template>
                <!-- <template v-for="l in list2" v-if="s">
                    <teleport :to="`#${l.telId}`">
                        {{ l.uid }}
                        <n-input></n-input>
                    </teleport>
                </template>-->
            </div>
        </template>
        <splitpanes>
            <pane min-size="15" size="20">
                <n-tabs type="card" size="small" closable @update-value="handleUpdate">
                    <n-tab-pane :name="l.uid" v-for="l in list1" display-directive="show">
                        <template #tab>
                            <div
                                class="move"
                                draggable="true"
                                :data-uid="l.uid"
                                @dragstart="handleDragStart($event)"
                            >{{ l.uid }}</div>
                        </template>
                        <div :id="l.uid">{{ l.uid }}</div>
                    </n-tab-pane>
                </n-tabs>
            </pane>
            <pane min-size="15" size="60">
                <splitpanes :horizontal="true">
                    <pane min-size="15" size="80"></pane>
                    <pane min-size="15" size="20"></pane>
                </splitpanes>
            </pane>
            <pane min-size="15" size="20">
                <n-tabs type="card" size="small" v-model:value="currentUid" closable>
                    <n-tab-pane :name="l.uid" v-for="l in list2" display-directive="show">
                        <template #tab>
                            <div
                                class="move"
                                draggable="true"
                                :data-uid="l.uid"
                                @drop="handleDrop($event)"
                                @dragover="handleDragOver($event)"
                            >{{ l.uid }}</div>
                        </template>
                        <div :id="l.uid">{{ l.uid }}</div>
                    </n-tab-pane>
                </n-tabs>
            </pane>
        </splitpanes>
        <!-- <div
            style="position: fixed;right: 0;top: 200px;width: 300px;height: 300px;background-color: antiquewhite;"
        >
            <button @click="click">ssss</button>
            <div id="s">s:</div>
            <div id="b">b:</div>
            <div id="temp"></div>
        </div> -->
    </div>
</template>
<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { computed, nextTick, onMounted, ref } from 'vue';
import { NTabs, NTabPane, NInput } from "naive-ui";

// 尝试直接使用naviui tabs 和teleport 来直接实现。。。。。
const list1 = ref([
    {
        uid: "sss1",
        telId: 'sss1',
        show: false
    },
    {
        uid: "sss2",
        telId: "sss2",
        show: false
    },
    {
        uid: "sss3",
        telId: "sss3",
        show: false
    },
])
const allList = computed(() => {
    const a = []
    a.push(...list1.value)
    a.push(...list2.value)
    return a
})
const s = ref(false)
onMounted(() => {
    s.value = true
})
const click = () => {
    list1.value[0].telId === "b" ? list1.value[0].telId = "s" : list1.value[0].telId = "b"
}
const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    if (e?.target?.dataset?.uid) {
        e?.dataTransfer?.setData('uid', e?.target?.dataset?.uid)
    }
}
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = 'move'
}
const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    const uid = e.dataTransfer?.getData('uid')
    const targetUid = e?.target?.dataset?.uid
    if (uid && targetUid) {
        const found = list1.value.find(e => e.uid === uid)
        const index = list1.value.findIndex(e => e.uid === uid)
        const targetIndex = list2.value.findIndex(e => e.uid === targetUid)
        if (index > -1 && found && targetIndex > -1) {
            found.telId = "temp"
            list1.value.splice(index, 1)
            list2.value.splice(targetIndex, 0, found)
            currentUid.value = uid
            // setTimeout(() => {
            //     found.telId = uid
            // }, 1000)
            nextTick(() => {
                found.telId = uid
            })
        }
    }
}
const currentUid = ref<string>()
const handleUpdate = (value: string | number) => {
    let found = list1.value.find(e => e.uid === value)
    if (found) {
        found.show = true
    }
}
const list2 = ref([
    {
        uid: "sss4",
        telId: "sss4",
        show: false
    },
    {
        uid: "sss5",
        telId: "sss5",
        show: false
    },
    {
        uid: "sss6",
        telId: "sss6",
        show: false
    },
])

</script>
<style lang="less" scoped>
.cook-editor {
    height: 100%;
    :deep(.splitpanes) {
        background-color: white;

        .splitpanes__splitter {
            background-color: rgb(239, 239, 245);
            position: relative;
        }
        .splitpanes__splitter:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            transition: opacity 0.4s;
            background-color: #409eff;
            opacity: 0;
            z-index: 1;
        }
        .splitpanes__splitter:hover:before {
            opacity: 1;
        }

        &.splitpanes--vertical > .splitpanes__splitter:before {
            left: -2px;
            right: -2px;
            height: 100%;
            width: 5px;
        }
        &.splitpanes--horizontal > .splitpanes__splitter:before {
            top: -2px;
            bottom: -2px;
            width: 100%;
            height: 5px;
        }
    }
    .move {
        &:hover {
            cursor: move;
        }
    }
}
</style>