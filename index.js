const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const dimmer = document.querySelector(".dim");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const displayImg = document.querySelector(".product");
const thumbnail = document.querySelectorAll(".thumbnail img");
const reduceItem = document.querySelector(".reduceI");
const increaseItem = document.querySelector(".increaseI");
const itemAmnt = document.querySelector(".item-amount p");
const addCart = document.querySelector(".add-cart");
const cartAmnt = document.querySelector(".headCart div");
const totalAmt = document.querySelector(".totAmt");
const total = document.querySelector(".total");
const cartMain = document.querySelector(".cartMain");
const cartDiv = document.querySelector(".cartMain>div");
const checkoutBtn = document.querySelector(".cartMain>button");
const cart = document.querySelector(".headCart");

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

const thumbArr = Array.from(thumbnail);

thumbArr.forEach((item, index) => {
    item.addEventListener("click", () => {
        displayImg.src = `images/image-product-${index + 1}.jpg`;
    });
});

reduceItem.addEventListener("click", () => {
    let amnt = +itemAmnt.textContent;
    amnt > 0 && (amnt -= 1);
    itemAmnt.textContent = amnt;
});

increaseItem.addEventListener("click", () => {
    let amnt = +itemAmnt.textContent;
    amnt += 1;
    itemAmnt.textContent = amnt;
});

addCart.addEventListener("click", () => {
    let cAmount = +cartAmnt.textContent; +
    itemAmnt.textContent > 0 &&
        ((cartAmnt.style.display = "block"),
            (cAmount += +itemAmnt.textContent),
            (cartAmnt.textContent = cAmount),
            (totalAmt.innerHTML = `${cAmount} <span class='total'>$${(
      cAmount * 125
    ).toFixed(2)}</span>`),
            (itemAmnt.textContent = 0));
});

cart.addEventListener("click", () => {
    cartMain.classList.contains("clicked") ?
        cartMain.classList.remove("clicked") :
        cartMain.classList.add("clicked");
});