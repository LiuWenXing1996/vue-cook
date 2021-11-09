<template>
    <n-form-item :label="propOption.name" class="logic-editor-item">
        <n-input v-model:value="editableValue" round />
    </n-form-item>
</template>
<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { NFormItem, NInput } from "naive-ui"
import ILogicConfig from '@/types/ILogicConfig';
import IPropOption from '@/types/IPropOption';
const props = defineProps({
    propOption: {
        type: Object as () => IPropOption,
        required: true
    },
    config: {
        type: Object as () => ILogicConfig,
        required: true
    },
})
const { propOption, config } = toRefs(props)
const editableValue = computed({
    get: () => {
        return propOption.value.value
    },
    set: (value) => {
        const configValue = config.value;
        if (!configValue) {
            return;
        };
        configValue.props = configValue?.props || {}
        configValue.props[propOption.value.name] = value
    }
})

</script>