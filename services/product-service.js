const d = document;

const crearNuevoProducto = (img, name, price, Description, category, id) => {
	const producto = d.createElement("div");
	producto.classList.add("productos__caja");
	const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}"
            alt="starwars taza">
    </div>
    <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="../screens/producto.html">Ver producto</a>
    `;
	producto.innerHTML = contenido;
	return producto;
};

const seccionStarwars = d.querySelector('[data-section="starwars"]');
const seccioncConsolas = d.querySelector('[data-section="consolas"]');
const seccionDiversos = d.querySelector('[data-section="diversos"]');



const starwars = () =>
	fetch("http://127.0.0.1:5555/product?category=starwars").then((response) =>
		response.json()
	);
const consolas = () =>
	fetch("http://127.0.0.1:5555/product?category=consolas").then((response) =>
		response.json()
	);
const diversos = () =>
	fetch("http://127.0.0.1:5555/product?category=diversos").then((response) =>
		response.json()
    );




starwars().then((data) => {
	data.forEach((product) => {
		const nuevoProducto = crearNuevoProducto(
			product.img,
			product.name,
			product.price,
			product.id,
			product.category
		);
		seccionStarwars.appendChild(nuevoProducto);
	});
}).catch((err)=> alert('ocurrió un error'));

consolas().then((data) => {
	data.forEach((product) => {
		const nuevoProducto = crearNuevoProducto(
			product.img,
			product.name,
			product.price,
			product.id
		);
		seccioncConsolas.appendChild(nuevoProducto);
	});
}).catch((err)=> alert('ocurrió un error'));

diversos().then((data) => {
	data.forEach((product) => {
		const nuevoProducto = crearNuevoProducto(
			product.img,
			product.name,
			product.price,
			product.id
		);
		seccionDiversos.appendChild(nuevoProducto);
	});
})
.catch((err)=> alert('ocurrió un error'));


