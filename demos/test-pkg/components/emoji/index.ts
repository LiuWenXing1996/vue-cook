// EmojiMaker.ts
import { defineComponent, h } from 'vue';
import { defineComponentMaker } from 'vue-cook'
export default defineComponentMaker({
    name: "emoji",
    pkg: "test-pkg",
    make: () => defineComponent({
        render: () => h(
            'span',
            '😀'
        )
    })
})