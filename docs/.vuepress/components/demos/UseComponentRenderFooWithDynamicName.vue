<template>
    <component :is="Foo" v-bind="dynamicProps" v-on="dynamicHanlders">
        <template v-for="(slot,name) in slots" v-slot:[name]>{{ slot }}</template>
    </component>
</template>
<script setup lang="ts">
import Foo from "./Foo.vue"
const dynamicProps = {
    msg: "你好"
}
const dynamicHanlders = {
    btnCilck: () => {
        alert(dynamicProps.msg)
    }
}
const slots = {
    btnText: '点我'
}
</script>