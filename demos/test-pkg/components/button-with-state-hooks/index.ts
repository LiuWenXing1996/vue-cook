// ButtonMaker.ts
import { defineComponentMaker } from 'vue-cook'
import Button from "./Button.vue";
// 使用接口扩充状态的类型
declare global {
    interface ICookPlayerStateExtra {
        TestPkg: Partial<ICookPlayerStateExtraTestPkg>
    }
    interface ICookPlayerStateExtraTestPkg {
        Button: {
            isRound?: boolean
        }
    }
}
export default defineComponentMaker({
    name: "按钮",
    pkg: "test-pkg",
    make: () => Button,
    install: (cookPlayerState) => {
        // 初始化状态
        cookPlayerState.extra.TestPkg = cookPlayerState.extra.TestPkg || {}
        cookPlayerState.extra.TestPkg.Button = {
            isRound: true
        }
    }
})