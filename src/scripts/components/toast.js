import { cleanOrCreateBox, state } from "../main.js";
import { separator } from "./separator.js";

export function toast (title, type, message) {
  const toast = cleanOrCreateBox("toast")
  toast.classList.add(type);

  const titleSpan = document.createElement("h2");
  titleSpan.classList.add("title");
  titleSpan.textContent = title;
  toast.appendChild(titleSpan);

  toast.appendChild(separator());
  
  if (typeof message === "string") {
    const span = document.createElement("span");
    span.textContent = message;
    toast.appendChild(span);
  } else if (Array.isArray(message)) {
    const div = document.createElement("div");
    message.forEach(item => {
      const itemMessage = document.createElement("span");
      itemMessage.textContent = item;
      div.appendChild(itemMessage);
    });
    toast.appendChild(div);
  }
  state.view.container.appendChild(toast);
}

export function removeToast () {
  const toast = document.querySelector(".toast");
  toast.remove();
}