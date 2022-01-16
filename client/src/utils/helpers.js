export function validateEmail(input) {
  const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.test(String(input).toLowerCase());
}

export function validatePassword(input) {
  const password = /^[A-Za-z]\w{7,14}$/;
  if (input.match(password)) {
    return true;
  }
  return false;
}

export function checkInputs(input) {
  const userinput = /^$/;
  if (input.match(userinput)) {
    return false;
  }
  return true;
}
