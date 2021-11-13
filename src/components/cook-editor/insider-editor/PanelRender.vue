<template>
    <component :is="panel"></component>
</template>
<script setup lang="ts">
import IPanelConfig from "@/types/IPanelConfig";
import { computed, inject, toRefs } from "vue";
import usePanelMaker from "@/hooks/usePanelMaker";
import ICookEditorState from "@/types/ICookEditorState";
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    config: {
        type: Object as () => IPanelConfig,
        required: true
    }
})
const { config } = toRefs(props)
const maker = usePanelMaker(cookEditorState, config.value.makerName, config.value.makerPkg)
const panel = computed(() => {
    return maker?.value?.make(cookEditorState, config.value)
})
</script>
