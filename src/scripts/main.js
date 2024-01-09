import { registerBox } from "./pages/register.js";

export const state = {
  user: {

  },
  view: {
    container: document.querySelector(".container"),
  },
  values: {
    inputs: {
      name: {
        name: "nome",
        key: "name",
        type: "text",
        pages: ["signup"],
        value: null,
      },
      email: {
        name: "e-mail",
        key: "e-mail",
        type: "text",
        pages: ["signin", "signup"],
        value: null,
      },
      password: {
        name: "senha",
        key: "password",
        type: "password",
        pages: ["signin", "signup"],
        value: null,
      },
      confirmPassword: {
        name: "confirmar senha",
        key: "confirm-password",
        type: "password",
        pages: ["signup"],
        value: null,
      },
    },
    password: {
      minSize: 6,
      maxSize: 12,
      allowNumbers: true,
      allowLetters: true,
      allowSpecialCharacteres: true,
      needNumbers: true,
      needLetters: true,
      needSpecialCharacteres: true,
    }
  }
}

export function cleanOrCreateBox(className) {
  let box = document.querySelector(`.${className}`);
  if (box) {
    box.innerHTML = "";
  } else {
    box = document.createElement("div");
    box.classList.add(className);
  }
  return box;
}

function init() {
  registerBox()
}

init();