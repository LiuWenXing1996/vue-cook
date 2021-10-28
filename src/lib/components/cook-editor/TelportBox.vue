<template>
    <div class="teleport-box">
        <div :id="VueCookTelportTempId"></div>
        <template v-for="l in allList" :key="l.uid">
            <teleport :to="getTargetId(l)">
                <tab-render :config="l"></tab-render>
            </teleport>
        </template>
    </div>
</template>
<script setup lang="ts">
import { VueCookTelportTempId } from "@/lib/utils/const"
import IPanelConfig from "@/lib/types/IPanelConfig";
import { computed } from "vue";
import useListGroup from "./utils/useListGroup";
import useTempTelportList from "./utils/useTempTelportList";
import makeDomId from "./utils/makeDomId";
import TabRender from "./TabRender.vue"

defineProps({
    lock: {
        type: Boolean,
        required: true
    }
})

const listGroup = useListGroup();
const allList = computed(() => {
    const all: IPanelConfig[] = []
    const listGroupValue = listGroup.value;
    for (const key in listGroupValue) {
        if (Object.prototype.hasOwnProperty.call(listGroupValue, key)) {
            const list = listGroupValue[key];
            all.push(...list)
        }
    }
    return all
})
const getTargetId = (l: IPanelConfig) => {
    const tempList = useTempTelportList().value
    if (tempList.find(e => e.uid === l.uid)) {
        return `#${VueCookTelportTempId}`
    } else {
        return `#${makeDomId(l)}`
    }
}
</script>
<style lang="less" scoped>
</style>