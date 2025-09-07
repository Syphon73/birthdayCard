

const r = new rive.Rive({
    src: "ballon (1).riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
    },
});