const closeModal = document.querySelector(".close_modal_btn");
const modal = document.querySelector(".modal_container");
const thumbnails = document.querySelectorAll(".thumbnail");
const increaseItem = document.querySelector(".increase_item");
const decreaseItem = document.querySelector(".decrease_item");
const emptyCart = document.querySelector(".empty");
const checkout = document.querySelector(".checkout");
const cartBtn = document.querySelector(".cart_btn");
const addToCartBtn = document.querySelector(".add_to_cart");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");
const deleteBtn = document.querySelector(".delete");
const count = document.querySelector(".count");
const cart = document.querySelector(".cart");
const carousel = document.querySelector(".carousel");
const modalThumbnail = document.querySelectorAll(".modal_thumbnail img");

const nextBtn = document.querySelector(".next_btn");
const previousBtn = document.querySelector(".previous_btn");
const mobileMenuBtn = document.querySelector(".mobile_menu_btn");
const closeMenu = document.querySelector(".close_mobile_menu");
const mobileMenu = document.querySelector(".mobile_link");

let cartItem = 0;
let thumbnailCount = 0;

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show_mobile_link");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show_mobile_link");
});

thumbnails.forEach((e) => {
  e.addEventListener("click", () => {
    modal.classList.add("open_modal");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open_modal");
});

increaseItem.addEventListener("click", () => {
  cartItem++;
  count.textContent = cartItem;
});

decreaseItem.addEventListener("click", () => {
  if (cartItem == 0) {
    return;
  } else {
    cartItem--;
    count.textContent = cartItem;
  }
});

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hide");
});

deleteBtn.addEventListener("click", () => {
  checkout.classList.add("hide");
  emptyCart.classList.remove("hide");
});

addToCartBtn.addEventListener("click", () => {
  if (cartItem == 0) {
    checkout.classList.add("hide");
    emptyCart.classList.remove("hide");
    return;
  }

  let totalItems = 125 * cartItem;
  checkout.classList.remove("hide");
  emptyCart.classList.add("hide");

  quantity.textContent = cartItem;
  total.textContent = `$${totalItems}`;
});

nextBtn.addEventListener("click", () => {
  const firstImg = document.querySelectorAll(".carousel img")[0];

  carousel.scrollLeft += firstImg.clientWidth + 5;

  if (thumbnailCount == modalThumbnail.length - 1) {
    return;
  }

  thumbnailCount++;
  modalThumbnail[thumbnailCount - 1].classList.remove("active");
  modalThumbnail[thumbnailCount].classList.add("active");
});

previousBtn.addEventListener("click", () => {
  const firstImg = document.querySelectorAll(".carousel img")[0];

  carousel.scrollLeft -= firstImg.clientWidth + 5;

  if (thumbnailCount == 0) {
    return;
  }

  thumbnailCount--;
  modalThumbnail[thumbnailCount].classList.add("active");
  modalThumbnail[thumbnailCount + 1].classList.remove("active");
});

addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    const firstImg = document.querySelectorAll(".carousel img")[0];

    carousel.scrollLeft += firstImg.clientWidth + 5;

    if (thumbnailCount == modalThumbnail.length - 1) {
      return;
    }

    thumbnailCount++;
    modalThumbnail[thumbnailCount - 1].classList.remove("active");
    modalThumbnail[thumbnailCount].classList.add("active");
  } else {
    return;
  }
});

addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    const firstImg = document.querySelectorAll(".carousel img")[0];

    carousel.scrollLeft -= firstImg.clientWidth + 5;

    if (thumbnailCount == 0) {
      return;
    }

    thumbnailCount--;
    modalThumbnail[thumbnailCount].classList.add("active");
    modalThumbnail[thumbnailCount + 1].classList.remove("active");
  } else {
    return;
  }
});
