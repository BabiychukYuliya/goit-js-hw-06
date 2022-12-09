const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const liArray = [];

ingredients.map(element => {
  const ingredientsElement = document.createElement("li");
  ingredientsElement.textContent = element;
  ingredientsElement.classList.add('item');
  liArray.push(ingredientsElement);
});


list.append(...liArray);
console.log(liArray)


