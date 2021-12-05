<template>
    <ComponentRender :config="renderConfig"></ComponentRender>
</template>
<script setup lang="ts">
import ComponentRender, { IRenderConfig } from "./ComponentRender.vue"
import Foo from "./Foo.vue"

const renderConfig: IRenderConfig = {
    component: Foo,
    props: {
        msg: "你好"
    },
    slots: {
        btnText: '点我'
    },
    events: {
        btnCilck: () => {
            alert(renderConfig.props?.msg)
        }
    }
}
</script>