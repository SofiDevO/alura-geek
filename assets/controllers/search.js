const d = document;
const focusInput = d.querySelector(".search__link");
const inputSearch = d.querySelector(".search__input");
const searchContainer = d.querySelector(".header__search");
const iconBuscar = d.querySelector(".icon__search");

/* Function to display the search bar */
export default focusInput.addEventListener("click", () => {
	searchContainer.classList.remove("none");
	inputSearch.focus();
});

/* Function to hide the search bar */
d.addEventListener("click", (e) => {
	if (!inputSearch.contains(e.target) && !focusInput.contains(e.target)) {
		searchContainer.classList.add("none");
	}
});
window.addEventListener("scroll", (e) => {
	searchContainer.classList.add("none");
});

/* Search function */
iconBuscar.addEventListener("click", () => {
	console.log("I am searching");
});
