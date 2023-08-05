const d = document;
const focusInput = d.querySelector(".search__link");
const inputSearch =d.querySelector(".search__input");
const searchContainer =d.querySelector(".header__search");

export default focusInput.addEventListener("click", ()=>{
    searchContainer.classList.toggle("none")
    inputSearch.focus();

})

