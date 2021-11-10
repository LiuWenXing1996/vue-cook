// AlertMaker.ts
import { defineLogicMaker } from "vue-cook";
export default defineLogicMaker({
    name: "alert",
    pkg: "test-pkg",
    makePropOptions: () => ["msg"],
    make: (cookPlayerState, logicConfig) => {
        return () => {
            alert(`${logicConfig.props?.["msg"] || '你好，世界！'}`)
        }
    }
})