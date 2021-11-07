// Button.vue
<template>
    <button :class="{ round: isRound }" @click="toggleRound">我是按钮</button>
</template>
<script setup lang="ts">
import { computed, inject } from "vue";
import { ICookPlayerState } from "vue-cook"
const cookPlayerState = inject<ICookPlayerState>('cookPlayerState') as ICookPlayerState
const isRound = computed(() => {
    return cookPlayerState.extra.TestPkg?.Button?.isRound
})
const setRound = (isRound: boolean) => {
    cookPlayerState.extra.TestPkg = cookPlayerState.extra.TestPkg || {}
    cookPlayerState.extra.TestPkg.Button = cookPlayerState.extra.TestPkg?.Button || {}
    cookPlayerState.extra.TestPkg.Button.isRound = isRound
}
const toggleRound = () => {
    setRound(!isRound.value)
}
</script>
<style lang="less">
.round {
    border-radius: 10px;
}
</style>