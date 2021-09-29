<template>
    <div class="page-tree">
        <div class="title">
            <div class="name">页面树</div>
            <n-input placeholder="搜索" size="small" round>
                <template #prefix>
                    <n-icon>
                        <search-outline />
                    </n-icon>
                </template>
            </n-input>
            <n-button round size="tiny" @click="addPage">
                <template #icon>
                    <n-icon>
                        <add-circle-outline></add-circle-outline>
                    </n-icon>
                </template>
                页面
            </n-button>
        </div>
        <div class="content">
            <n-tree :data="treeData" block-line v-model:selected-keys="selectedKeys"></n-tree>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import { NTree, NTag, NButton, NIcon, NInput } from "naive-ui"
import { AddCircleOutline, SearchOutline } from "@vicons/ionicons5"
import type { TreeOption } from "naive-ui"
import type IComponentConfig from "$/types/IComponentConfig";
import { h } from "vue";
import IPage from "$/types/IPage";
import { v4 as uuidv4 } from 'uuid';
import { RootAppMaker } from "$/built-in-resources";
import { makeComponentConfigDefault } from "$/index";
import usePageEditingList from "$/hooks/usePageEditingList";

const props = defineProps({
    pageList: {
        type: Object as () => IPage[],
        required: true
    }
})

//TODO:搜索功能
const { pageList } = toRefs(props)
const selectedKeys = ref<string[]>([])

watch(selectedKeys, () => {
    const [uid] = selectedKeys.value
    const pageEditingList = usePageEditingList()
    const foundPage = pageList.value.find(page => page.uid === uid);
    if (foundPage) {
        if (!pageEditingList.value.find(pageEditing => pageEditing.page.uid === uid)) {
            pageEditingList.value.push({
                page: foundPage,
                showOverlay: false
            })
        }
    }
})

function componentToTreeNode(config: IComponentConfig, parentSlotName?: string): TreeOption {
    const treeNode: TreeOption = {
        key: config.uid,
        label: config.name,
        prefix: () => {
            return h(
                NTag,
                {
                    size: "small",
                    type: "success",
                    round: true
                },
                {
                    default: () => parentSlotName || 'root'
                }
            )
        }
    }
    if (config.attrs?.slots) {
        const treeNodeChildren: TreeOption[] = []
        const slots = config.attrs?.slots
        for (const key in slots) {
            if (Object.prototype.hasOwnProperty.call(slots, key)) {
                const componentConfigs = slots[key];
                componentConfigs.forEach(cc => {
                    const treeNodeChild = componentToTreeNode(cc, key)
                    treeNodeChildren.push(treeNodeChild)
                })
            }
        }
        treeNode.children = treeNodeChildren
    }
    return treeNode
}

function pageToTreeNode(page: IPage): TreeOption {
    const componentTreeNode = componentToTreeNode(page.component)
    const pageTreeNode: TreeOption = {
        key: page.uid,
        label: page.name,
        children: [componentTreeNode],
        prefix: () => {
            return h(
                NTag,
                {
                    size: "small",
                    type: "success",
                    round: true
                },
                {
                    default: () => 'page'
                }
            )
        }
    }
    return pageTreeNode
}

const treeData = computed(() => {
    return pageList.value.map(page => {
        return pageToTreeNode(page)
    })
})

const addPage = () => {
    const uid = uuidv4();
    let page: IPage = {
        name: "新增页面",
        uid: uid,
        path: `/${uid}`,
        component: makeComponentConfigDefault(RootAppMaker)
    }
    pageList.value.push(page)
}
</script>
<style lang="less" scoped>
.page-tree {
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