import { state } from "./state.js";

let currentTool = null;

export function setTool(tool) {
  currentTool = tool;
  console.log("Selected tool:", tool);
}

// Later: handle mouse events on canvas to draw with tools
