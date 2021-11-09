// Button.vue
<template>
    <button :class="{ round: isRound }" @click="toggleRound">我是按钮</button>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { ICookPlayerState } from "vue-cook"
import useButtonRound from "./useButtonRound";
const cookPlayerState = inject<ICookPlayerState>('cookPlayerState') as ICookPlayerState
const isRound = useButtonRound(cookPlayerState).get()
const toggleRound = () => {
    useButtonRound(cookPlayerState).toggle()
}
</script>
<style lang="less">
.round {
    border-radius: 10px;
}
</style>