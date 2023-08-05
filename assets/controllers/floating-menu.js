/** @format */

const d = document;

const botonTropper = d.querySelector('[data-menu="float"]');
const botones = d.querySelectorAll("[data-btns]");

/* Function to show and hide the floating menu buttons */
export default botonTropper.addEventListener("click", () => {
	botones.forEach((boton) => {
		if (boton.classList.contains("none")) {
			boton.classList.remove("none");
		} else {
			boton.classList.add("none");
		}
		boton.addEventListener("click", () => {
			botones.forEach((boton) => {
				boton.classList.add("none");
			});
		});
	});
});
