export default function getRulerUnit(scale: number) {
    const s1 = Number((1 / scale * 50).toFixed())
    const s2 = Number((s1 / 5).toFixed()) * 5
    return s2
}