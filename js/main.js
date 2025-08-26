import { initRenderer, renderFrame } from "./renderer.js";
import { initTimeline, nextFrame } from "./timeline.js";
import { setTool } from "./tools.js";
import { state } from "./state.js";

// canvas + context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
initRenderer(ctx);

// timeline loop
initTimeline((frame) => {
  renderFrame(frame);
});

// tool selection
document.querySelectorAll("#toolbar button").forEach(btn => {
  btn.addEventListener("click", () => {
    setTool(btn.dataset.tool);
  });
});

// demo animation loop
function loop() {
  nextFrame();
  requestAnimationFrame(loop);
}
loop();
