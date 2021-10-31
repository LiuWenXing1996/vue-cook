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
import { computed, inject, Ref, ref, toRefs, watch } from "vue";
import { NTree, NTag, NIcon, NInput, NPopover, NSpace } from "naive-ui"
import { AddCircleOutline, Search as SearchIcon } from "@vicons/ionicons5"
import type { TreeOption } from "naive-ui"
import type IComponentConfig from "@/lib/types/IComponentConfig";
import { h } from "vue";
import IPage from "@/lib/types/IPage";
import { v4 as uuidv4 } from 'uuid';
import { RootAppMaker } from "@/lib/built-in-resources";
import ICookEditorState from "@/lib/types/ICookEditorState";
import makeDefaultComponentConfig from "@/lib/utils/makeDefaultComponentConfig";

const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const pageList = computed(() => {
    return cookEditorState.pages
})
const pattern = ref("")

const renderLabel = ({ option }: { option: TreeOption }) => {
    return h(
        'div',
        {
            onClick: () => {
                if (option.type === "page") {
                    const uid = option.key as string;
                    cookEditorState.extra.VueCook?.PageEditorPanel?.pageEditingUidList.push(uid)
                }
                if (option.type === "component") {
                    const uid = option.key as string
                    const pageUid = option.pageUid as string
                    cookEditorState.extra.VueCook!.ComponentEditorPanel!.componetSelected = {
                        pageUid: pageUid,
                        componentUid: uid
                    }
                }
            },
            onMousemove: () => {
                if (option.type === "component") {
                    const uid = option.key as string
                    const pageUid = option.pageUid as string
                    if (uid && pageUid) {
                        cookEditorState.extra.VueCook!.PageEditorPanel!.componetFoused = {
                            pageUid,
                            componentUid: uid
                        }
                    }
                }
            },
            onMouseleave: () => {
                cookEditorState.extra.VueCook!.PageEditorPanel!.componetFoused = undefined
            }
        },
        option.label
    )
}

function componentToTreeNode(config: IComponentConfig, pageUid: string, parentSlotName?: string): TreeOption {
    const treeNode: TreeOption = {
        key: config.uid,
        label: config.name,
        type: "component",
        pageUid: pageUid,
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
                    const treeNodeChild = componentToTreeNode(cc, pageUid, key)
                    treeNodeChildren.push(treeNodeChild)
                })
            }
        }
        treeNode.children = treeNodeChildren
    }
    return treeNode
}

function pageToTreeNode(page: IPage): TreeOption {
    const componentTreeNode = componentToTreeNode(page.component, page.uid)
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
    const page: IPage = {
        name: "新增页面",
        uid: uid,
        path: `/${uid}`,
        component: makeDefaultComponentConfig(RootAppMaker)
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