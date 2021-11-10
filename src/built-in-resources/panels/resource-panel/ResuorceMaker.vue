<template>
    <resource-maker :maker="maker">
        <div class="icon-wrapper">
            <n-icon size="25" :depth="3">
                <ComponentIcon v-if="maker.type === 'component'"></ComponentIcon>
                <LogicIcon v-if="maker.type === 'logic'"></LogicIcon>
                <PanelIcon v-if="maker.type === 'panel'"></PanelIcon>
            </n-icon>
        </div>
        <div class="maker-detail">
            <div class="maker-name">{{ maker.name }}</div>
            <div class="maker-pkg">{{ maker.pkg }}</div>
        </div>
    </resource-maker>
</template>
<script lang="ts" setup>
import { ResourceMaker } from "@/index"
import ComponentIcon from "@/svgs/component.svg"
import LogicIcon from "@/svgs/logic.svg"
import PanelIcon from "@/svgs/panel.svg"
import { NIcon } from "naive-ui"
import IResourceMaker from "@/types/IResourceMaker"
defineProps({
    maker: {
        type: Object as () => IResourceMaker,
        required: true
    }
})
</script>
<style lang="less" scoped>
.resource-maker {
    width: 200px;
    display: flex;
    align-items: center;
    border: #efeff5 1px solid;
    border-radius: 2px;
    padding: 5px;
    &:hover {
        border-color: #18a058;
    }
    &.panel:hover {
        cursor: pointer;
    }

    .maker-detail {
        display: flex;
        margin-left: 10px;
        flex-grow: 1;
        flex-direction: column;
        .maker-pkg {
            color: #a0a0a0;
        }
    }
}
</style>