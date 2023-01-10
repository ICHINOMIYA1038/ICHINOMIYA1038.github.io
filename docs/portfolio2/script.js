const jsButton = document.querySelector(".js__button");
const list = document.querySelector(".header__list");
const line = document.querySelector(".button__line");
jsButton.addEventListener("click", () => {
    list.classList.toggle("header__open");
    line.classList.toggle("header__open");
})
const headerItem = document.querySelectorAll(".header__item");
for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener("click", () => {
        list.classList.remove("header__open");
        line.classList.remove("header__open");
    })
}