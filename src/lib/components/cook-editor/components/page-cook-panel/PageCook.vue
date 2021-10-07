<template>
    <div class="page-cook-wrapper">
        <div class="page-cook">
            <div class="page-cook-bg"></div>
            <iframe :src="pageEditing.page.path" ref="iframeRef"></iframe>
            <component-picker :iframe-ref="iframeRef" :enable-picker="enablePicker"></component-picker>
        </div>
    </div>
</template>
<script setup lang="ts">
import IPageEditing from "@/lib/types/IPageEditing";
import getCookPlayerExportDataFromWindow from "@/lib/utils/getCookPlayerExportDataFromWindow";
import { ref, toRefs } from "vue";
import ComponentOverlay from "../component-overlay/ComponentOverlay.vue";
import ComponentPicker from "../component-picker/ComponentPicker.vue";
import IComponentOverlay from "@/lib/types/IComponentOverlay";
import IComponentConfig from "@/lib/types/IComponentConfig";

const props = defineProps({
    pageEditing: {
        type: Object as () => IPageEditing,
        required: true
    },
    enablePicker: {
        type: Boolean,
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