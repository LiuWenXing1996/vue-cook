<template>
    <div ref="rulerDiv" class="ruler"></div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import Ruler from "@scena/ruler";
import Dragger, { drag } from "@daybrush/drag";
import useRulerDivHeight from './utils/useRulerDivHeight';
import getRulerUnit from "./utils/getRulerUnit"

const props = defineProps({
    scale: {
        type: Number,
        required: true
    },
    scroll: {
        type: Number,
        required: true
    }
})
const emits = defineEmits(["update:scroll"])
const { scale, scroll } = toRefs(props)
const rulerDiv = ref<HTMLDivElement>()
const height = useRulerDivHeight(rulerDiv)
let ruler: Ruler | null = null
let dragger: Dragger | null = null;

watch(scroll, () => {
    ruler?.scroll(scroll.value)
})
watch(height, () => {
    ruler?.resize()
})
watch(scale, () => {
    if (ruler) {
        // @ts-ignore
        ruler.zoom = scale.value / 100
        // @ts-ignore
        ruler.unit = getRulerUnit(scale.value / 100)
    }
})

onMounted(() => {
    if (rulerDiv.value) {
        if (!ruler) {
            ruler = new Ruler(rulerDiv.value, {
                type: "vertical",
                backgroundColor: "#ffffff",
                textColor: "#000000",
                unit: getRulerUnit(scale.value / 100),
                zoom: scale.value / 100 
            });
        }
        if (!dragger) {
            dragger = drag(rulerDiv.value, {
                drag: ({ deltaY }) => {
                    emits("update:scroll", scroll.value - deltaY)
                },
            });
        }
    }
})
</script>
<style lang="less" scoped>
.ruler {
    width: 100%;
    height: 100%;
}
</style>