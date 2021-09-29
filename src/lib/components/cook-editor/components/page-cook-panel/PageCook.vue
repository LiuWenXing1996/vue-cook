<template>
    <div class="page-cook-wrapper">
        <div class="page-cook">
            <div class="page-cook-bg"></div>
            <iframe :src="pageEditing.page.path" ref="iframeRef"></iframe>
            <ComponentOverlayList v-if="pageEditing.showOverlay" :iframe-ref="iframeRef"></ComponentOverlayList>
        </div>
    </div>
</template>
<script setup lang="ts">
import IPageEditing from "@/lib/types/IPageEditing";
import { ref, toRefs } from "vue";
import ComponentOverlayList from "../component-overlay/ComponentOverlayList.vue"

const props = defineProps({
    pageEditing: {
        type: Object as () => IPageEditing,
        required: true
    }
})
const { pageEditing } = toRefs(props)
const iframeRef = ref<HTMLIFrameElement>()

</script>
<style lang="less" scoped>
.page-cook-wrapper {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .page-cook {
        position: relative;
        width: 100%;
        height: 100%;

        iframe,
        .page-cook-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }

        iframe {
            border: none;
            z-index: 2;
        }
        .page-cook-bg {
            background-color: #ebeef55c;
            z-index: 1;
        }
    }
}
</style>