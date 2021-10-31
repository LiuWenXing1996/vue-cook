<template>
    <component :is="maker?.make(config).content"></component>
</template>
<script setup lang="ts">
import usePanelMaker from '@/lib/hooks/usePanelMaker';
import ICookEditorState from '@/lib/types/ICookEditorState';
import IPanelConfig from '@/lib/types/IPanelConfig';
import { inject, toRefs } from 'vue';
const cookEditorState = inject<ICookEditorState>('cookEditorState') as ICookEditorState

const props = defineProps({
    config: {
        type: Object as () => IPanelConfig,
        required: true
    }
})
const { config } = toRefs(props)
const maker = usePanelMaker(cookEditorState, config.value.makerName, config.value.makerPkg)
</script>
<style lang="less" scoped>
</style>