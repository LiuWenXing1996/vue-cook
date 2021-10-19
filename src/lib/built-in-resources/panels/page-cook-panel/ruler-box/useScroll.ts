import { ref } from "vue";

const scorll = ref({
    x: 0,
    y: 0
})

export default function useScroll() {
    return scorll
}