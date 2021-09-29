export default function createRenderLoop(render: () => void) {
    let frameId: number;

    const f = () => {
        render();
        frameId = requestAnimationFrame(f);
    }
    const stop = () => {
        cancelAnimationFrame(frameId);
    }
    frameId = requestAnimationFrame(f);
    return stop;
}