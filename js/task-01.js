const categoriesCounter = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesCounter.length);

const categoriesTitle = document
  .querySelectorAll(".item")
  .forEach((element) =>
    console.log(
      `Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`
    )
  );
