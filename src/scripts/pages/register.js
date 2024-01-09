import { separator } from "../components/separator.js";
import { removeToast, toast } from "../components/toast.js";
import { cleanOrCreateBox, state } from "../main.js";
import { emailValidation, nameValidation, passwordValidation } from "../validations.js";

const localState = {
  values: {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  },
  errors : [],
}

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
  localState.errors = handleValidation()
}

function createEntriesArea() {
  const entriesArea = document.createElement("div");
  entriesArea.classList.add("entries-area");
  
  for (const key in state.values.inputs) {
    if (state.values.inputs[key].pages.includes("signup")) {
      const label = document.createElement("label");
      label.textContent = state.values.inputs[key].name;
      entriesArea.appendChild(label);
      
      const input = document.createElement("input");
      input.id = `${state.values.inputs[key].key}-input`;
      input.type = state.values.inputs[key].type;
      input.addEventListener("input", (e) => {
        localState.values[key] = e.target.value;
        localState.errors = handleValidation();
        if (localState.errors.length > 0) {
          toast(localState.errors.length>1?"Erros":"Erro", "error", localState.errors);
          const confirmButton = document.querySelector(".confirm");
          confirmButton.disabled = true;
        } else {
          removeToast();
          const confirmButton = document.querySelector(".confirm");
          confirmButton.disabled = false;
          
        }
      })
      entriesArea.appendChild(input);
    }
  }
  return entriesArea;
}

function createButtonsArea() {
  const buttonArea = document.createElement("div");
  buttonArea.classList.add("buttons-area");

  const confirm = document.createElement("button");
  confirm.disabled = true
  confirm.textContent = "confirmar";
  confirm.addEventListener("click", () => {
    // TODO Registrar no banco de dados
    toast("Cadastro realizado", "success", "Entre pela primeira vez");
    setTimeout(() => removeToast(), 3000);
  })
  confirm.classList.add("confirm");
  buttonArea.appendChild(confirm);
  
  const login = document.createElement("button");
  login.textContent = "sou cadastrado";
  buttonArea.appendChild(login);
  return buttonArea;
}

function handleValidation() {
  const errors = [];
  
  const nameInput = document.querySelector("#name-input");
  const isNameOk = nameValidation(localState.values.name, state.values.settings.name, errors)
  if (isNameOk) {
    nameInput.classList.remove("error");
  } else {
    nameInput.classList.add("error");
  };
  
  const emailInput = document.querySelector("#e-mail-input");
  if (!emailValidation(localState.values.email)) {
    errors.push("E-mail inválido");
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
  // TODO Verificar se o e-mail já está cadastrado

  const passwordInput = document.querySelector("#password-input");
  const isPasswordOk = passwordValidation(localState.values.password, state.values.settings.password, errors);
  if (isPasswordOk) {
    passwordInput.classList.remove("error");
  } else {
    passwordInput.classList.add("error");
  }

  const confirmInput = document.querySelector("#confirm-password-input");
  if (localState.values.password !== localState.values.confirmPassword) {
    errors.push("As senhas precisam ser iguais");   
    confirmInput.classList.add("error"); 
  } else {
    confirmInput.classList.remove("error")
  }
  return errors;
}