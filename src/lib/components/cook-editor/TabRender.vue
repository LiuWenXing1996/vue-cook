<template>
    <component :is="maker?.makePanel(config)"></component>
</template>
<script setup lang="ts">
import usePanelMaker from '@/lib/hooks/usePanelMaker';
import IPanelConfig from '@/lib/types/IPanelConfig';
import { toRefs } from 'vue';

const props = defineProps({
    config: {
        type: Object as () => IPanelConfig,
        required: true
    }
})
const { config } = toRefs(props)
const maker = usePanelMaker(config.value.makerName, config.value.makerPackage)
</script>
<style lang="less" scoped>
</style>