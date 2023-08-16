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
        <div class="editar__container">
        <a href="../../screens/agregar-producto.html" class="editaricono">
            <i class="bi bi-pencil"></i>
        </a>
        <a href="" class="eliminar__icono">
            <i class="bi bi-trash"></i>
        </a>
    </div>
    `;
	producto.innerHTML = contenido;
	return producto;
};


const seccionAll = document.querySelector('[data-productos]');

const allProducts = () =>
	fetch("http://127.0.0.1:5555/product").then((response) =>
		response.json()
    );

allProducts().then((data) => {
	data.forEach((product) => {
		const nuevoProducto = crearNuevoProducto(
			product.img,
			product.name,
			product.price,
			product.id,
			product.category
		);
		seccionAll.appendChild(nuevoProducto);
	});
}).catch((err)=> alert('ocurrió un error'));