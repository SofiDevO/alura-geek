import { productServices } from "../../services/product-service.js";

const d = document;
const seccionStarwars = d.querySelector('[data-section="starwars"]');
const seccioncConsolas = d.querySelector('[data-section="consolas"]');
const seccionDiversos = d.querySelector('[data-section="diversos"]');

const crearNuevoProducto = (img, name, price, Description, category, id) => {
	const tarjeta = d.createElement("div");
	tarjeta.classList.add("productos__caja");
	const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}"
            alt="${name}">
    </div>
    <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="./screens/producto.html?category=${category}&id=${id}">Ver producto</a>
    `;
	tarjeta.innerHTML = contenido;
	return tarjeta;
};


productServices.starwars().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(img, name, price, Description, category, id);
		seccionStarwars.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));

productServices.consolas().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(img, name, price, Description, category, id);
		seccioncConsolas.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));

productServices.diversos().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(img, name, price, Description, category, id);
		seccionDiversos.appendChild(nuevoTarjeta);
	});
})
.catch((err)=> alert('ocurrió un error'));