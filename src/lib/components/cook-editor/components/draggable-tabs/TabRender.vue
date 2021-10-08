<template>
    <div></div>
</template>
<script setup lang="ts">
import IPanelConfig from '@/lib/types/IPanelConfig';

defineProps({
    config: {
        type: Object as () => IPanelConfig,
        reuiqred: true
    }
})
const maker = useComponentMaker(config.value.makerName, config.value.makerPackage)
</script>
<style lang="less" scoped>
</style>