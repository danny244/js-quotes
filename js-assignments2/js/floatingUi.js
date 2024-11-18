import { updatePosition } from "./index.js";


const refrenceElement = document.querySelector("blockquote");

updatePosition(
      refrenceElement,
      'right',
      'arrowRight',
      'Note at the right',
      true,
      ["top-end", "right-start"]
)
updatePosition(
      refrenceElement,
      'bottom',
      'arrowBottom',
      'Note below',
      false,
      ["bottom-start", "left-end"]
)
updatePosition(
      refrenceElement,
      'top',
      'arrowTop',
      'Note above',
      false,
      ["top-start", "left-start"]
)