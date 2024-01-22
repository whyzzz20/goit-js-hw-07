const listRef = document.querySelector("#categories");
console.log(`Number of categories:${listRef.children.length}`);

[...listRef.children].forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.dir(`Elements: ${li.lastElementChild.children.length}`);
});
