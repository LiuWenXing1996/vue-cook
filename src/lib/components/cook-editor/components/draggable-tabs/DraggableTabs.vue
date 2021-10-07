<template>
    <div class="draggable-tabs">
        <template v-if="list.length <= 0">
            <div class="title" @drop="handleDrop($event)" @dragover="handleDragOver($event)">
                <div>无面板</div>
            </div>
            <div class="content">
                <n-empty description="没有打开的面板"></n-empty>
            </div>
        </template>
        <template v-else>
            <n-tabs
                type="card"
                size="small"
                closable
                v-model:value="currentUid"
                @close="handleClose"
            >
                <n-tab-pane :name="l.uid" v-for="l in list" display-directive="show">
                    <template #tab>
                        <div
                            class="move"
                            draggable="true"
                            :data-uid="l.uid"
                            :data-luid="uid"
                            @drop="handleDrop($event)"
                            @dragover="handleDragOver($event)"
                            @dragstart="handleDragStart($event)"
                        >{{ l.title }}</div>
                    </template>
                    <div :id="makeDomId(l)"></div>
                </n-tab-pane>
            </n-tabs>
        </template>
    </div>
</template>
<script setup lang="ts">
import IPanelConfig from "@/lib/types/IPanelConfig";
import { NTabs, NTabPane, NEmpty } from "naive-ui";
import { nextTick, onMounted, ref, toRefs, watch } from "vue";
import useListGroup from "./useListGroup";
import { v4 as uuidv4 } from 'uuid';
import useTempTelportList from "./useTempTelportList";
import makeDomId from "./makeDomId"
const props = defineProps({
    list: {
        type: Object as () => IPanelConfig[],
        required: true
    }
})
const { list } = toRefs(props)
const uid = uuidv4();
onMounted(() => {
    useListGroup().value[uid] = list.value
})
const currentUid = ref<string>()
watch(list, () => {
    if (list.value.length > 0) {
        if (!currentUid.value) {
            currentUid.value = list.value[0].uid
        } else {
            const length = list.value.length
            currentUid.value = list.value[length - 1].uid
        }
    } else {
        currentUid.value = undefined
    }
}, {
    deep: true
})

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    if (e?.target?.dataset?.uid && e?.target?.dataset?.luid) {
        e?.dataTransfer?.setData('uid', e?.target?.dataset?.uid)
        e?.dataTransfer?.setData('luid', e?.target?.dataset?.luid)
    }
}

const handleClose = (name: string) => {
    const nameIndex = list.value.findIndex(e => e.uid === name)
    if (!~nameIndex) return
    list.value.splice(nameIndex, 1)
}



const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e?.dataTransfer?.dropEffect) {
        e.dataTransfer.dropEffect = 'copy'
    }
}
const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    //TODO:不同的拖拽来源会有不同的处理方式
    const uid = e.dataTransfer?.getData('uid')
    const luid = e.dataTransfer?.getData('luid')
    const targetUid = e?.target?.dataset?.uid
    if (uid && luid && targetUid) {
        const fromList = useListGroup().value[luid]
        if (fromList) {
            const found = fromList.find(e => e.uid === uid)
            const index = fromList.findIndex(e => e.uid === uid)
            const targetIndex = list.value.findIndex(e => e.uid === targetUid)
            if (index > -1 && found && targetIndex > -1) {
                useTempTelportList().value.push(found)
                fromList.splice(index, 1)
                list.value.splice(targetIndex, 0, found)
                currentUid.value = uid
                // setTimeout(() => {
                //     found.telId = uid
                // }, 1000)
                nextTick(() => {
                    const index = useTempTelportList().value.findIndex(e => e.uid === found.uid)
                    if (index > -1) {
                        useTempTelportList().value.splice(index, 1)
                    }
                })
            }
        }
    }
}

</script>
<style lang="less" scoped>
.draggable-tabs {
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
    :deep(.n-tabs-nav) {
        .actions {
            padding-right: 10px;

            .n-icon:hover {
                cursor: pointer;
                color: rgb(24, 160, 88);
            }
            .n-icon.actived {
                color: rgb(24, 160, 88);
            }
        }
    }
    .content {
        flex-grow: 1;
        padding: 10px;
    }
}
.move {
    &:hover {
        cursor: move;
        color: rgb(24, 160, 88);
    }
}
</style>