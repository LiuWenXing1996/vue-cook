<template>
    <div class="page-cook-panel">
        <template v-if="pageEditing">
            <page-cook :page="pageEditing"></page-cook>
        </template>
        <template v-else>
            <n-empty description="没有正在编辑的页面"></n-empty>
        </template>
    </div>
</template>
<script setup lang="ts">
import { NEmpty } from "naive-ui"
import { computed, inject, toRefs } from "vue";
import PageCook from "./PageCook.vue"
import ICookEditorState from "@/types/ICookEditorState";

const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    pageUid: {
        type: String,
    }
})
const { pageUid } = toRefs(props)

const pageEditing = computed(() => {
    return cookEditorState.pages.find(e => e.uid === pageUid?.value)
})

</script>
<style lang="less" scoped>
.page-cook-panel {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
</style>