const form = document.querySelector(".login-form");
// console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  //   console.log(email.value);
  if (email.value === "" || password.value === "") {
    alert("Заповніть, будь ласка, всі поля");
  }

  const objectByForm = {
    email: email.value,
    password: password.value,
  };
  console.log("Об'єкт із введеними даними:", objectByForm);
  form.reset();
});
