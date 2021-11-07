// AlertMaker.ts
import { defineLogicMaker } from "vue-cook";
export default defineLogicMaker({
    name: "alert",
    pkg: "test-pkg",
    make: () => {
        return (event: MouseEvent, a: string, b: string) => {
            alert(`
你好，按钮被点击了,位置在${event.x},${event.y}
额外信息：${a},${b}
            `)
        }
    }
})