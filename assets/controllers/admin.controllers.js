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
        <div class="price">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <div class="editar__container">
        <a href="/screens/agregar-producto.html" class="editaricono" ">
            <i class="bi bi-pencil"></i>
        </a>
        <button type="button" class="eliminar__icono" id="${category}">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    `;
	tarjeta.innerHTML = contenido;
    const btneliminar = tarjeta.querySelector("button")
    btneliminar.addEventListener("click", ()=>{
        const id = btneliminar.id;
        productServices.eliminarProducto(id)
        .then(response => {
            console.log(response)
        }).catch(err => alert("Ocurrió un error"))
    })

	return tarjeta;
};

const seccionAll = d.querySelector('[data-productos]');
    
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
			img,
            name,
			price,
			category,
			id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));