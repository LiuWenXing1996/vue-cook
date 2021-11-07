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
import { logicRun, ILogicConfig, ICookPlayerState } from 'vue-cook';
import { inject, ref, toRefs } from 'vue';
const cookPlayerState = inject<ICookPlayerState>('cookPlayerState') as ICookPlayerState
const props = defineProps({
    fetch: String
})
const { fetch } = toRefs(props)
interface IDataItem {
    name: string,
    age: number
}
const data = ref<IDataItem[]>([])
const fetchData = async () => {
    data.value = []
    if (fetch?.value) {
        const logicConfig = JSON.parse(fetch.value) as ILogicConfig
        data.value = await logicRun<IDataItem[]>(cookPlayerState, logicConfig)
    }
}
</script>