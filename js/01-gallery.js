import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imagesContainer = document.querySelector(".gallery");
const imagesMarcup = createGaleryCard(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", imagesMarcup);

function createGaleryCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class = "gallery__item">
    <a class = gallery__link" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
     alt ="${description}"
     />
     </a>
     </div>
    `;
    })
    .join("");
}
imagesContainer.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const originalImage = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`);
  console.log(originalImage);

  instance.show();
});
