<template>
    <div class="resource-panel">
        <n-scrollbar x-scrollable>
            <div style="padding: 10px;">
                <div class="actions">
                    <div class="action-item">
                        <div class="action-item-label">关键字：</div>
                        <n-input
                            v-model:value="pattern"
                            placeholder="搜索"
                            round
                            clearable
                            size="small"
                        >
                            <template #prefix>
                                <n-icon>
                                    <search-icon />
                                </n-icon>
                            </template>
                        </n-input>
                    </div>
                    <div class="action-item">
                        <div class="action-item-label">类型：</div>
                        <n-select
                            v-model:value="types"
                            multiple
                            :options="typeOptions"
                            size="small"
                        />
                    </div>
                    <div class="action-item">
                        <div class="action-item-label">包名：</div>
                        <n-select v-model:value="pkgs" multiple :options="pkgOptions" size="small" />
                    </div>
                </div>
                <n-space>
                    <resuorce-maker v-for="maker in result" :maker="maker"></resuorce-maker>
                </n-space>
            </div>
        </n-scrollbar>
    </div>
</template>
<script setup lang="ts">
import ResuorceMaker from "./ResuorceMaker.vue";
import { NSpace, NInput, NIcon, NSelect, NScrollbar } from "naive-ui"
import { Search as SearchIcon } from "@vicons/ionicons5"
import { computed, inject, Ref, ref } from "vue";
import { uniq } from "lodash-es"
import ICookEditorState from "@/types/ICookEditorState";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState
const makerList = computed(() => {
    return cookEditorState.makerList
})
const result = computed(() => {
    let _res = makerList.value
    if (types.value.length > 0) {
        _res = _res.filter(e => types.value.includes(e.type))
    }
    if (pkgs.value.length > 0) {
        _res = _res.filter(e => pkgs.value.includes(e.pkg))
    }
    if (pattern.value) {
        _res = _res.filter(e => {
            return e.name.indexOf(pattern.value) > -1
        })
    }
    return _res
})
const pattern = ref("")
const types = ref<string[]>([])
const typeOptions = computed(() => {
    const _types = makerList.value.map(e => e.type);
    return uniq(_types).map(e => {
        return {
            label: e,
            value: e
        }
    })
})
const pkgs = ref<string[]>([])
const pkgOptions = computed(() => {
    const _pkgs = makerList.value.map(e => e.pkg);
    return uniq(_pkgs).map(e => {
        return {
            label: e,
            value: e
        }
    })
})

</script>
<style lang="less" scoped>
.resource-panel {
    height: 100%;
    .actions {
        display: flex;
        padding: 10px;
        padding-top: 0;
        align-items: center;
        margin-left: -20px;
        .action-item {
            display: flex;
            width: 300px;
            align-items: center;
            .action-item-label {
                margin-right: 10px;
                width: 100px;
                text-align: right;
            }
        }
    }
}
</style>