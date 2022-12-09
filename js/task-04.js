let counterValue = 0;
const displayValue = document.querySelector("#value");

const btnDecrement = document.querySelector('button[data-action="decrement"]');

const btnIncrement = document.querySelector('button[data-action="increment"]');
//console.log(btnIncrement);
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  displayValue.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  displayValue.textContent = counterValue;
});
