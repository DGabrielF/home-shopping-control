import { separator } from "../components/separator.js";
import { cleanOrCreateBox, state } from "../main.js";

export function registerBox () {
  const container = cleanOrCreateBox("container");

  const centralContainer = cleanOrCreateBox("central-container");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Registrar";
  centralContainer.appendChild(title);

  centralContainer.appendChild(separator());
  
  const entriesArea = createEntriesArea();
  centralContainer.appendChild(entriesArea);
  
  centralContainer.appendChild(separator());

  const buttonArea = createButtonsArea();
  centralContainer.appendChild(buttonArea);

  container.appendChild(centralContainer);  
}

function createButtonsArea() {
  const buttonArea = document.createElement("div");
  buttonArea.classList.add("button-area");

  const confirm = document.createElement("button");
  confirm.textContent = "confirmar";
  confirm.classList.add("confirm");
  buttonArea.appendChild(confirm);

  const login = document.createElement("button");
  login.textContent = "sou cadastrado";
  buttonArea.appendChild(login);
  return buttonArea;
}

function createEntriesArea() {
  const entriesArea = document.createElement("div");
  entriesArea.classList.add("entries-area");

  for (const key in state.values.inputs) {
    const label = document.createElement("label");
    label.textContent = state.values.inputs[key].name;
    entriesArea.appendChild(label);

    const input = document.createElement("input");
    input.id = `${state.values.inputs[key].key}-input`;
    input.type = state.values.inputs[key].type;
    entriesArea.appendChild(input);
  }
  return entriesArea;
}
