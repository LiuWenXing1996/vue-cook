import { ref } from 'vue';
const canvasStyleData = ref({
    width: 1200,
    height: 740,
    scale: 100,
})

export default function useCanvasStyleData() {
    return canvasStyleData
}