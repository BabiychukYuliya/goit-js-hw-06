let inputValue = document.querySelector('#font-size-control');
let spanValue = document.querySelector('#text');
inputValue.addEventListener("input", () => {
        spanValue.style.fontSize = `${inputValue.value}px`;
 
//     console.dir(spanValue.textContent);
 });

