<template>
    <Foo :msg="msg" @btn-cilck="handleClick">
        <template #btnText>点我</template>
    </Foo>
</template>
<script setup lang="ts">
import Foo from "./Foo.vue"
const msg = "你好"
const handleClick = () => {
    alert(msg)
}
</script>