<template>
    <div class="iframe-demo">
        <div class="title">
            <n-tooltip trigger="hover">
                <template #trigger>
                    <n-icon size="25" @click="openNew()">
                        <external-link></external-link>
                    </n-icon>
                </template>
                在新窗口查看此页面
            </n-tooltip>
        </div>
        <div class="content">
            <iframe :src="src"></iframe>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ExternalLink } from "@vicons/tabler"
import { NIcon, NTooltip } from "naive-ui"
import { toRefs } from "vue"
const props = defineProps({
    src: {
        type: String,
        required: true
    }
})
const { src } = toRefs(props)
const openNew = () => {
    window.open(`${window.location.origin}${src.value}`, "_blank")
}
</script>
<style lang="less" scoped>
.iframe-demo {
    width: 100%;
    height: 400px;
    border: 1px solid #eaecef;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    .title {
        height: 40px;
        border-bottom: 1px solid #eaecef;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px;
    }
    .content {
        width: 100%;
        flex-grow: 1;
        iframe {
            border: none;
            width: 100%;
            height: 100%;
        }
    }

    .n-icon:hover {
        cursor: pointer;
        color: rgb(24, 160, 88);
    }
    .n-icon.actived {
        color: rgb(24, 160, 88);
    }
}
</style>
<style lang="less">
html.dark {
    .iframe-demo {
        border-color: #3e4c5a;
        .title {
            border-color: #3e4c5a;
        }
    }
}
</style>