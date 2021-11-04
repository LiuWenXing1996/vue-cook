<template>
    <div class="emit-info-tips">
        <div class="info-tips-item">
            <div class="info-tips-item-label">名称</div>
            <div class="info-tips-item-content">{{ logicConfig.name }}</div>
        </div>
        <div class="info-tips-item">
            <div class="info-tips-item-label">uid</div>
            <div class="info-tips-item-content">{{ logicConfig.uid }}</div>
        </div>
        <div class="info-tips-item">
            <div class="info-tips-item-label">maker</div>
            <div class="info-tips-item-content">
                <div class="round-name-tag">{{ logicConfig.makerName }}</div>
                <div style="padding: 0 2px;">-</div>
                <div class="round-pkg-tag">{{ logicConfig.makerPkg }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ILogicConfig from '@/types/ILogicConfig';

defineProps({
    logicConfig: {
        type: Object as () => ILogicConfig,
        required: true
    }
})
</script>
<style lang="less" scoped>
.emit-info-tips {
    display: flex;
    flex-direction: column;
    .info-tips-item {
        display: flex;
        margin-bottom: 3px;
        justify-content: space-between;
        &::last-child {
            margin-bottom: 0;
        }
        .info-tips-item-label {
            max-width: 50px;
            margin-right: 10px;
        }
        .info-tips-item-content {
            display: flex;
            max-width: 120px;
            word-break: break-all;
        }
        .round-name-tag,
        .round-pkg-tag {
            background-color: rgba(24, 160, 88, 0.1);
            border: 1px solid rgba(24, 160, 88, 0.3);
            color: #18a058;
            border-radius: 10px;
            padding: 0 5px;
            font-size: 12px;
            box-sizing: border-box;
            height: fit-content;
        }
        .round-name-tag {
            flex-shrink: 0;
        }
        .round-pkg-tag {
            flex-shrink: 1;
            word-break: break-all;
        }
    }
}
</style>