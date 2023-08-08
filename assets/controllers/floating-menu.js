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


window.addEventListener("scroll", (e) => {
	botones.forEach((boton) => {
	boton.classList.add("none");
    });
});


/* Boton "To top" */

const toTop = d.querySelector(".to__top") 
window.addEventListener("scroll",()=>{
	if(window.pageYOffset > 2150){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})