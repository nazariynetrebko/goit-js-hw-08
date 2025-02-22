const categoriesList = document.getElementById(`categories`);

const categories = categoriesList.querySelectorAll(`li.item`);

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector(`h2`).textContent;

  const categoryItems = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Category: ${categoryItems.length}`);
});
