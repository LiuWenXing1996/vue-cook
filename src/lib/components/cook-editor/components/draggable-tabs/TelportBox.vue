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
import { VueCookTelportTempId } from "$/utils/const"
import IPanelConfig from "@/lib/types/IPanelConfig";
import { computed } from "vue";
import useListGroup from "./useListGroup";
import { NInput } from "naive-ui"
import useTempTelportList from "./useTempTelportList";
import makeDomId from "./makeDomId";
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
.teleport-box {
    // display: none;
}
</style>