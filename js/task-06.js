const inputElem = document.querySelector("#validation-input");
inputElem.addEventListener("blur", outputElm);

function outputElm(event) {
  if (event.target.value.length == inputElem.getAttribute("data-length")) {
    inputElem.classList.add("valid");
    if (inputElem.classList.contains("invalid")) {
      inputElem.classList.remove("invalid");
    }
  } else {
    if (inputElem.classList.contains("valid")) {
      inputElem.classList.remove("valid");
    }
    inputElem.classList.add("invalid");
  }
}