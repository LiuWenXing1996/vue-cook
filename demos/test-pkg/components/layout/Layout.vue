// Layout.vue
<template>
    <div class="layout">
        <div v-for="m in rowNumber" class="row">
            <div v-for="n in colNumber" class="col">
                <slot :name="getSlotName(m, n)">{{ m }}-{{ n }}</slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, toRefs } from 'vue';
const props = defineProps({
    row: String,
    col: String
})
const { row, col } = toRefs(props)
const rowNumber = computed(() => Number(row?.value) || 1)
const colNumber = computed(() => Number(col?.value) || 1)
const getSlotName = (m: number, n: number) => `${m}-${n}`
</script>
<style lang="less">
.layout {
    display: flex;
    width: 300px;
    flex-direction: column;
    border: 1px solid black;
    box-sizing: border-box;
    .row {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid black;
        box-sizing: border-box;
        &:last-child {
            border-bottom: none;
        }
        .col {
            display: flex;
            flex: 1;
            border-right: 1px solid black;
            box-sizing: border-box;
            &:last-child {
                border-right: none;
            }
        }
    }
}
</style>