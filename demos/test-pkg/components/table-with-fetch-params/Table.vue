// Table.vue
<template>
    <div style="display: flex;flex-direction: column;width: 300px;">
        <button @click="fetchData">{{ fetch ? "点我获取数据" : "没有配置fetch属性" }}</button>
        <table>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            <tr v-for="n in data">
                <td>{{ n.name }}</td>
                <td>{{ n.age }}</td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">
import { logicRun, ICookPlayerState, parseLogicConfig } from 'vue-cook';
import { inject, ref, toRefs } from 'vue';
const cookPlayerState = inject<ICookPlayerState>('cookPlayerState') as ICookPlayerState
const props = defineProps({
    fetch: String,
    maxAge: String,
    minAge: String
})
const { fetch, maxAge, minAge } = toRefs(props)
interface IDataItem {
    name: string,
    age: number
}
const data = ref<IDataItem[]>([])
const fetchData = async () => {
    data.value = []
    const logicConfig = parseLogicConfig(fetch?.value)
    if (logicConfig) {
        const maxAgeNumber = Number(maxAge?.value) || undefined
        const minAgeNumber = Number(minAge?.value) || undefined
        data.value = await logicRun<IDataItem[]>(cookPlayerState, logicConfig, maxAgeNumber, minAgeNumber)
    }
}
</script>