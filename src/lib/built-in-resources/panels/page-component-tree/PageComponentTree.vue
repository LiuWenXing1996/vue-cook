<template>
    <div class="page-component-tree">
        <div class="actions">
            <n-input v-model:value="pattern" placeholder="搜索" size="small" round clearable>
                <template #prefix>
                    <n-icon>
                        <search-icon />
                    </n-icon>
                </template>
            </n-input>
            <n-popover trigger="hover">
                <template #trigger>
                    <n-icon @click="addPage">
                        <add-circle-outline></add-circle-outline>
                    </n-icon>
                </template>
                新增页面
            </n-popover>
        </div>
        <n-tree
            :data="treeData"
            block-line
            :pattern="pattern"
            :selectable="false"
            :render-label="renderLabel"
        ></n-tree>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import { NTree, NTag, NIcon, NInput, NPopover, NSpace } from "naive-ui"
import { AddCircleOutline, Search as SearchIcon } from "@vicons/ionicons5"
import type { TreeOption } from "naive-ui"
import type IComponentConfig from "$/types/IComponentConfig";
import { h } from "vue";
import IPage from "$/types/IPage";
import { v4 as uuidv4 } from 'uuid';
import { RootAppMaker } from "$/built-in-resources";
import { makeComponentConfigDefault, useCookConfig } from "$/index";
import usePageEditingList from "$/hooks/usePageEditingList";
import useComponentConfig from "@/lib/hooks/useComponentConfig";
import useComponentSelected from "@/lib/hooks/useComponentSelected";

const pageList = computed(() => {
    return useCookConfig().value.pages
})
const selectedKeys = ref<string[]>([])
const pattern = ref("")



watch(selectedKeys, () => {
    const [uid] = selectedKeys.value
    const pageEditingList = usePageEditingList()
    const foundPage = pageList.value.find(page => page.uid === uid);
    if (foundPage) {
        if (!pageEditingList.value.find(pageEditing => pageEditing.uid === uid)) {
            pageEditingList.value.push(foundPage)
        }
    }
})

const renderLabel = ({ option }: { option: TreeOption }) => {
    return h(
        'div',
        {
            onClick: () => {
                if (option.type === "page") {
                    const uid = option.key
                    const pageEditingList = usePageEditingList()
                    const foundPage = pageList.value.find(page => page.uid === uid);
                    if (foundPage) {
                        if (!pageEditingList.value.find(pageEditing => pageEditing.uid === uid)) {
                            pageEditingList.value.push(foundPage)
                        }
                    }
                }
                if (option.type === "component") {
                    const uid = option.key
                    if (uid) {
                        const _uid = uid as string;
                        const config = useComponentConfig(_uid)
                        if (config.value) {
                            useComponentSelected().value = config.value
                        }
                    }

                }
            }
        },
        option.label
    )
}

function componentToTreeNode(config: IComponentConfig, parentSlotName?: string): TreeOption {
    const treeNode: TreeOption = {
        key: config.uid,
        label: config.name,
        type: "component",
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
    if (config?.slots) {
        const treeNodeChildren: TreeOption[] = []
        const slots = config?.slots
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
        type: "page",
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
.page-component-tree {
    height: 100%;

    .actions {
        display: flex;
        padding: 10px;
        align-items: center;
        :deep(.n-icon) {
            margin-left: 10px;
        }
    }
}
</style>