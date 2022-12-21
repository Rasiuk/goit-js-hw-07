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
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
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
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox", function () {});
});
