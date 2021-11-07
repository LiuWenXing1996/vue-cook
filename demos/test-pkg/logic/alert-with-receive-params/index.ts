// AlertMaker.ts
import { defineLogicMaker } from "vue-cook";
export default defineLogicMaker({
    name: "alert",
    pkg: "test-pkg",
    make: () => {
        return (event: MouseEvent) => {
            alert(`你好，按钮被点击了,位置在${event.x},${event.y}`)
        }
    }
})