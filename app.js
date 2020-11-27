const addCount = document.getElementById("addCountButton");
const lowerCount = document.getElementById("lowerCountButton");
let displayInput = document.getElementById("input");

addCount.addEventListener("click", () => {
  displayInput.value = parseInt(input.value) + 1;
});

lowerCount.addEventListener("click", () => {
  displayInput.value = parseInt(input.value) - 1;
});
