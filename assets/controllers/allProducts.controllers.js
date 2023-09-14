import { productServices } from "../../services/product-service.js";

const d = document;



const crearNuevoProducto = (img, name, price, Description, category, id) => {
	const tarjeta = d.createElement("div");
	tarjeta.classList.add("productos__caja");
	const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}"
            alt="imagen producto">
    </div>
        <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="/screens/producto.html?category=${category}&id=${id}">Ver producto</a>
        `;
        tarjeta.innerHTML = contenido;
        return tarjeta;
    };
    

const seccionAll = d.querySelector('[data-productos]');
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
            img,
            name,
			price,
            Description,
			category,
			id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));