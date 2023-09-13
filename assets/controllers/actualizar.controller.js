import { productServices } from "../../services/product-service.js";
const d = document;

const formulario = d.querySelector("[data-form]")

const obtenerInformacion = async() => {
	const urlProducto = new URL(window.location);
	const id = urlProducto.searchParams.get("id");

	
    const img = d.querySelector("[data-url]");
	const category = d.querySelector("[data-category]");
	const name = d.querySelector("[data-name]");
	const price = d.querySelector("[data-price]");
	const description = d.querySelector("[data-description]");

    const producto = await productServices.detalleProducto(id);
		img.value = producto.img
		category.value = producto.category
		name.value = producto.name
		price.value = producto.price
		description.value = producto.description
};
obtenerInformacion();
	



formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const urlProducto = new URL(window.location);
	const id = urlProducto.searchParams.get("id");

    const img = d.querySelector("[data-url]").value;
	const category = d.querySelector("[data-category]").value;
	const name = d.querySelector("[data-name]").value;
	const price = d.querySelector("[data-price]").value;
	const description = d.querySelector("[data-description]").value;
    productServices.actualizarProducto(img, category, name, price, description,id)
    .then(()=>{
        window.location.href = "./screens/exito.html"
    });

})