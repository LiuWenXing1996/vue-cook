<template>
    <div class="panel-list">
        <template v-if="list.length <= 0">
            <div class="title">
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
                v-model:value="currentUid"
                @close="handleClose"
                :style="{ height: '100%', display: 'flex', flexDirection: ' column' }"
                :pane-style="{ flexGrow: 1, padding: 0, overflow: 'hidden' }"
            >
                <n-tab-pane
                    :name="l.uid"
                    v-for="l in list"
                    :closable="!l.alwaysOpen"
                    display-directive="show"
                >
                    <template #tab>
                        <div>{{ useTitle(l) }}</div>
                    </template>
                    <panel-render :config="l"></panel-render>
                    <!-- <div style="height: 100%;">
                        <input />
                        <keep-alive>
                            <component :is="Test"></component>
                        </keep-alive>
                    </div>-->
                </n-tab-pane>
            </n-tabs>
        </template>
    </div>
</template>
<script setup lang="ts">
import IPanelConfig from "@/types/IPanelConfig";
import { NTabs, NTabPane, NEmpty } from "naive-ui";
import { inject, ref, toRefs, watch } from "vue";
import usePanelMaker from "@/hooks/usePanelMaker";
import ICookEditorState from "@/types/ICookEditorState";
import layoutRemoveTab from "@/utils/layoutRemoveTab";
import PanelRender from "./PanelRender.vue";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    list: {
        type: Object as () => IPanelConfig[],
        required: true
    }
})
const { list } = toRefs(props)
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
    deep: true,
    immediate: true
})

const useTitle = (panelConfig: IPanelConfig) => {
    const maker = usePanelMaker(cookEditorState, panelConfig.makerName, panelConfig.makerPkg).value
    return maker?.makeTitle?.(cookEditorState, panelConfig) || maker?.name || "未识别的面板"
}

const handleClose = (name: string) => {
    const panelConfig = list.value.find(e => e.uid === name)
    if (panelConfig) {
        layoutRemoveTab(cookEditorState, panelConfig)
    }
}

</script>
<style lang="less" scoped>
.panel-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        font-size: 14px;
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