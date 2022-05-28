const hamburgerMenu = document.querySelector(".navigation__left__hamburger");
const closeButton = document.querySelector(".navigation__list_closeIcon");
const navigation = document.querySelector(".navigation__list");

const container = document.querySelector(".container");
const arrows = document.querySelectorAll(".arrow");
const mainImage = document.querySelector(".mainImage");

const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
const productAmount = document.querySelector(".product_amount");

const imagesList = document.querySelectorAll(".images__list > li > img");
const imagesListOverlay = document.querySelectorAll(".images__listOverlay > li > img");
const mainImageOverlay = document.querySelector(".mainImageOverlay");
const modal = document.querySelector(".imageOverlay");

let currentImage = 1;
let itemAmountCounter = 0;

arrows.forEach(element => {
  element.addEventListener("click", e => {
    e.stopPropagation();
    if (element.classList.contains("next") && currentImage < 4) {
      ++currentImage;

      modal.classList.contains("activeModal")
        ? (mainImageOverlay.src = `./images/image-product-${currentImage}.jpg`)
        : (mainImage.src = `./images/image-product-${currentImage}.jpg`);
    }

    if (element.classList.contains("prev") && currentImage > 1) {
      --currentImage;
      modal.classList.contains("activeModal")
        ? (mainImageOverlay.src = `./images/image-product-${currentImage}.jpg`)
        : (mainImage.src = `./images/image-product-${currentImage}.jpg`);
    }
  });
});

imagesList.forEach((element, index) => {
  element.addEventListener("click", e => {
    e.stopPropagation();

    let src = `./images/image-product-${index + 1}.jpg`;

    mainImage.src = src;

    imagesList.forEach(element => {
      if (element.src != src) {
        element.classList.remove("activeImage");
      }
    });
    element.classList.add("activeImage");
  });
});

imagesListOverlay.forEach((element, index) => {
  element.addEventListener("click", e => {
    e.stopPropagation();

    let src = `./images/image-product-${index + 1}.jpg`;

    mainImageOverlay.src = src;

    imagesListOverlay.forEach(element => {
      if (element.src != src) {
        element.classList.remove("activeImage");
      }
    });
    element.classList.add("activeImage");
  });
});

mainImage.addEventListener("click", () => {
  modal.classList.add("activeModal");
});

modal.addEventListener("click", () => {
  modal.classList.remove("activeModal");
});

hamburgerMenu.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  navigation.classList.add("active");
  overlay.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("visible");
  navigation.classList.remove("active");
});

addButton.addEventListener("click", () => {
  ++itemAmountCounter;
  productAmount.textContent = itemAmountCounter;
});

removeButton.addEventListener("click", () => {
  if (itemAmountCounter == 0) {
    return;
  }
  --itemAmountCounter;
  productAmount.textContent = itemAmountCounter;
});

productAmount.textContent = itemAmountCounter;
