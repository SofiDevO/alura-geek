import { productServices } from "../../services/product-service.js";
const d = document;
const form = d.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const url = d.querySelector("[data-url]").value;
    const category = d.querySelector("[data-category]").value;
    const name = d.querySelector("[data-name]").value;
    const price = d.querySelector("[data-price]").value;
    const description = d.querySelector("[data-description]").value;
    
    productServices.crearNuevoProducto(url, name, price, description, category)
    .then(()=>{
        window.location.href = "/screens/admin.html"
    }).catch(err => console.log(err));
})


