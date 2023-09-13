import { productServices } from "../../services/product-service.js";

const d = document;
const seccionStarwars = d.querySelector('[data-section="starwars"]');
const seccionConsolas = d.querySelector('[data-section="consolas"]');
const seccionDiversos = d.querySelector('[data-section="diversos"]');

const crearNuevoProducto = (img, name, price, description, category, id) => {
  const tarjeta = d.createElement("div");
  tarjeta.classList.add("productos__caja");
  const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}" alt="${name}">
    </div>
    <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="./screens/producto.html?category=${category}&id=${id}">Ver producto</a>
    </div>
  `;
  tarjeta.innerHTML = contenido;
  return tarjeta;
};

function mostrarProductosEnSeccion(seccion, fetchData) {
  productServices[fetchData]().then((data) => {
    data.forEach(({ img, name, price, Description, category, id }) => {
      const nuevaTarjeta = crearNuevoProducto(img, name, price, Description, category, id);
      seccion.appendChild(nuevaTarjeta);
    });
  }).catch((err) => alert('Ocurrió un error'));
}

mostrarProductosEnSeccion(seccionStarwars, "starwars");
mostrarProductosEnSeccion(seccionConsolas, "consolas");
mostrarProductosEnSeccion(seccionDiversos, "diversos");