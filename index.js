const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const dimmer = document.querySelector(".dim");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const displayImg = document.querySelector(".product");

menu.addEventListener("click", () => {
    nav.classList.add("clicked");
    dimmer.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("clicked");
    dimmer.classList.remove("clicked");
});

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

function prevImg() {
    let num = +displayImg.id;

    if (num > 1) {
        num -= 1;
        displayImg.src = `images/image-product-${num}.jpg`;
        displayImg.id = num;
    } else if (num === 1) {
        num = 4;
        displayImg.src = `images/image-product-${num}.jpg`;
        displayImg.id = num;
    }
}

function nextImg() {
    let num = +displayImg.id;

    if (num < 4) {
        num += 1;
        displayImg.src = `images/image-product-${num}.jpg`;
        displayImg.id = num;
    } else if (num === 4) {
        num = 1;
        displayImg.src = `images/image-product-${num}.jpg`;
        displayImg.id = num;
    }
}