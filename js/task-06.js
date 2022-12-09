const inputValid = document.querySelector("#validation-input");

inputValid.addEventListener("blur", (event) => {
  if (Number.parseInt(inputValid.getAttribute("data-length")) === (inputValid.value.length)) {
  
    inputValid.classList.add("valid");

  
  } else 

  inputValid.classList.add("invalid");
console.log(inputValid.classList);

});


inputValid.addEventListener("focus", () =>{
  inputValid.classList.remove("valid");
  inputValid.classList.remove("invalid");
})