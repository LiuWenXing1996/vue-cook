// ComponentRendeWithRecursion.vue
<template>
    <component :is="config.component" v-bind="config?.props" v-on="config?.events || {}">
        <template v-for="(slot,name) in config?.slots" v-slot:[name]>
            <ComponentRendeWithRecursion :config="_config" v-for="_config in slot"></ComponentRendeWithRecursion>
        </template>
    </component>
</template>
<script setup lang="ts">
import type { Component } from 'vue';
export interface IRenderConfig {
    component: Component
    props?: Record<string, string>,
    slots?: Record<string, IRenderConfig[]>,
    events?: Record<string, Function>,
}
defineProps(
    {
        config: {
            type: Object as () => IRenderConfig,
            required: true
        }
    }
)
</script>