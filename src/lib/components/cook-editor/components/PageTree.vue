<template>
    <div class="page-tree">
        <div class="title">
            <div class="name">页面</div>
            <div class="actions">
                <n-space>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-icon @click="addPage">
                                <add-circle-outline></add-circle-outline>
                            </n-icon>
                        </template>
                        新增页面
                    </n-tooltip>
                </n-space>
            </div>
        </div>
        <div class="content">
            <n-input v-model:value="pattern" placeholder="搜索" size="small" round clearable>
                <template #prefix>
                    <n-icon>
                        <search-icon />
                    </n-icon>
                </template>
            </n-input>
            <n-tree
                :data="treeData"
                block-line
                v-model:selected-keys="selectedKeys"
                :pattern="pattern"
            ></n-tree>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import { NTree, NTag, NIcon, NInput, NTooltip, NSpace } from "naive-ui"
import { AddCircleOutline, Search as SearchIcon } from "@vicons/ionicons5"
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

const { pageList } = toRefs(props)
const selectedKeys = ref<string[]>([])
const pattern = ref("")

watch(selectedKeys, () => {
    const [uid] = selectedKeys.value
    const pageEditingList = usePageEditingList()
    const foundPage = pageList.value.find(page => page.uid === uid);
    if (foundPage) {
        if (!pageEditingList.value.find(pageEditing => pageEditing.page.uid === uid)) {
            pageEditingList.value.push({
                page: foundPage
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
        .actions {
            :deep(.n-icon):hover {
                cursor: pointer;
                color: rgb(24, 160, 88);
            }
        }
    }
    .content {
        flex-grow: 1;
        padding: 10px;
        :deep(.n-input) {
            margin-bottom: 10px;
        }
    }
}
</style>