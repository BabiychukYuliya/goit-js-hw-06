function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");

const bodyChangeColor = document.querySelector("body");

const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});


