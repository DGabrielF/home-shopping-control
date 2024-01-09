export function emptyEntry (value) {
  return (value?value.length === 0:true)
}
export function entryLowerThanMinSize (value, minValue) {
  return (value?value.length < minValue:true)
}
export function entryGreaterThanMaxSize (value, maxValue) {
  return (value?value.length > maxValue:true)
}
export function numberExistenceValidation (value, referenceValue) {
  const numberRegex = /\d/;
  return (numberRegex.test(value) === referenceValue)
}
export function letterExistenceValidation (value, referenceValue) {
  const letterRegex = /[a-zA-Z]/;
  return (letterRegex.test(value) === referenceValue)
}
export function specialCharExistenceValidation (value, referenceValue) {
  const specialRegex = /[^a-zA-Z0-9\s]/;
  return (specialRegex.test(value) === referenceValue)
}
export function emailValidation (value) {
  const letterRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (letterRegex.test(value))
}
// Combinados
export function nameValidation(name, nameSettings, errors) {
  let errorFree = true;
  if (emptyEntry(name)) {
    errors.push("O nome não pode estar vazio");
    errorFree = false;
  }
  if (entryLowerThanMinSize(name, nameSettings.minSize)) {
    errors.push(`O nome deve conter ao menos ${nameSettings.minSize} letra${nameSettings.minSize > 1 ? "s" : ""}`);
    errorFree = false;
  }
  if (entryGreaterThanMaxSize(name, nameSettings.maxSize)) {
    errors.push(`O nome deve conter ao menos ${nameSettings.maxSize} letras`);
    errorFree = false;
  }
  if (nameSettings.allowLetters === false) {
    if (!letterExistenceValidation(name, false)) {
      errors.push(`O nome não deve conter letras`);
      errorFree = false;
    }
  }
  if (nameSettings.allowNumbers === false) {
    if (!numberExistenceValidation(name, false)) {
      errors.push(`O nome não deve conter números`);
      errorFree = false;
    }
  }
  if (nameSettings.allowSpecialCharacteres === false) {
    if (!specialCharExistenceValidation(name, false)) {
      errors.push(`O nome não deve conter caracteres especiais`);
      errorFree = false;
    }
  }
  if (!letterExistenceValidation(name, nameSettings.needLetters)) {
    errors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter letras`);
    errorFree = false;
  }
  if (!numberExistenceValidation(name, nameSettings.needNumbers)) {
    errors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter números`);
    errorFree = false;
  }
  if (!specialCharExistenceValidation(name, nameSettings.needSpecialCharacteres)) {
    errors.push(`O nome ${(nameSettings.needLetters ? "deve" : "não deve")} conter caracteres especiais`);
    errorFree = false;
  }
  return errorFree;
}
export function passwordValidation(password, passwordSettings, errors) {
  let errorFree = true;
  if (emptyEntry(password)) {
    errors.push("A senha não pode estar vazio");
    errorFree = false;
  }
  if (entryLowerThanMinSize(password, passwordSettings.minSize)) {
    errors.push(`A senha deve conter ao menos ${passwordSettings.minSize} letra${passwordSettings.minSize > 1 ? "s" : ""}`);
    errorFree = false;
  }
  if (entryGreaterThanMaxSize(password, passwordSettings.maxSize)) {
    errors.push(`A senha deve conter ao menos ${passwordSettings.maxSize} letras`);
    errorFree = false;
  }
  if (passwordSettings.allowLetters === false) {
    if (!letterExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter letras`);
      errorFree = false;
    }
  }
  if (passwordSettings.allowNumbers === false) {
    if (!numberExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter números`);
      errorFree = false;
    }
  }
  if (passwordSettings.allowSpecialCharacteres === false) {
    if (!specialCharExistenceValidation(password, false)) {
      errors.push(`A senha não deve conter caracteres especiais`);
      errorFree = false;
    }
  }
  if (!letterExistenceValidation(password, passwordSettings.needLetters)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter letras`);
    errorFree = false;
  }
  if (!numberExistenceValidation(password, passwordSettings.needNumbers)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter números`);
    errorFree = false;
  }
  if (!specialCharExistenceValidation(password, passwordSettings.needSpecialCharacteres)) {
    errors.push(`A senha ${(passwordSettings.needLetters ? "deve" : "não deve")} conter caracteres especiais`);
    errorFree = false;
  }
  return errorFree;
}