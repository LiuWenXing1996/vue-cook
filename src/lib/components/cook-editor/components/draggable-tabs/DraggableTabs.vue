<template>
    <div class="draggable-tabs">
        <template v-if="list.length <= 0">
            <div
                class="title"
                @drop="handleDrop($event)"
                @dragover="handleDragOver($event)"
                @dragenter="handleDragEnter($event)"
                @dragleave="handleDragLeave($event)"
                :data-tabs-title="true"
            >
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
                :style="{ height: '100%', display: 'flex', flexDirection: ' column' }"
                :pane-style="{ flexGrow: 1, padding: 0, overflow: 'hidden' }"
            >
                <n-tab-pane :name="l.uid" v-for="l in list" display-directive="show">
                    <template #tab>
                        <div
                            class="move"
                            draggable="true"
                            :data-uid="l.uid"
                            :data-luid="luid"
                            @drop="handleDrop($event)"
                            @dragover="handleDragOver($event)"
                            @dragstart="handleDragStart($event)"
                            @dragenter="handleDragEnter($event)"
                            @dragleave="handleDragLeave($event)"
                        >{{ useTitle(l) }}</div>
                    </template>
                    <div :id="makeDomId(l)" style="height: 100%;width: 100%;"></div>
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
import usePanelMaker from "@/lib/hooks/usePanelMaker";
import handleDragEnter from "./utils/handleDragEnter";
import handleDragLeave from "./utils/handleDragLeave";
import handleDragStart from "./utils/handleDragStart";
const props = defineProps({
    list: {
        type: Object as () => IPanelConfig[],
        required: true
    }
})
const { list } = toRefs(props)
const luid = uuidv4();
onMounted(() => {
    useListGroup().value[luid] = list.value
})
const currentUid = ref<string>()
watch(list, () => {
    list.value.map(e => {
        useTempTelportList().value.push(e)

    })
    nextTick(() => {
        list.value.map(e => {
            const index = useTempTelportList().value.findIndex(t => t.uid === e.uid)
            if (index > -1) {
                useTempTelportList().value.splice(index, 1)
            }
        })
    })
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
    deep: true,
    immediate: true
})

const useTitle = (l: IPanelConfig) => {
    const maker = usePanelMaker(l.makerName, l.makerPackage).value
    return maker?.makeTitle?.(l) || l.title
}


const handleClose = (name: string) => {
    const nameIndex = list.value.findIndex(e => e.uid === name)
    if (!~nameIndex) return
    list.value.splice(nameIndex, 1)
}
// TODO:整理下setup里的逻辑,尽量抽出来
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e?.dataTransfer?.dropEffect) {
        e.dataTransfer.dropEffect = 'move'
    }
}
const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    const uid = e.dataTransfer?.getData('uid')
    const luid = e.dataTransfer?.getData('luid')
    if (uid && luid) {
        const fromList = useListGroup().value[luid]
        if (fromList) {
            const found = fromList.find(e => e.uid === uid)
            const index = fromList.findIndex(e => e.uid === uid)
            if (index > -1 && found) {
                // useTempTelportList().value.push(found)
                fromList.splice(index, 1)
                const targetUid = e?.target?.dataset?.uid

                if (targetUid) {
                    // tab===> tabs
                    const targetIndex = list.value.findIndex(e => e.uid === targetUid)
                    list.value.splice(targetIndex, 0, found)
                } else {
                    // tab===> 空tabs
                    list.value.push(found)
                }
                // currentUid.value = uid
                nextTick(() => {
                    currentUid.value = uid
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
        &.dragenter {
            background-color: rgb(239, 239, 245);
        }
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
    margin: -6px -28px -6px -10px;
    padding: 6px 28px 6px 10px;
    &:hover {
        cursor: move;
        color: rgb(24, 160, 88);
    }
    &.dragenter {
        background-color: rgb(239, 239, 245);
    }
}
</style>