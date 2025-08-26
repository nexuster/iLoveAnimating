import { state } from "./state.js";

let playheadSpan;
let fps = 24;
let interval = 1000 / fps;
let lastTime = 0;

let callback;

export function initTimeline(cb) {
  playheadSpan = document.getElementById("playhead");
  callback = cb;
}

export function nextFrame() {
  const now = performance.now();
  if (now - lastTime > interval) {
    state.frame++;
    playheadSpan.textContent = state.frame;
    callback(state.frame);
    lastTime = now;
  }
}
