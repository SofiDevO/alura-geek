const d = document;

const crearNuevoProducto = (img, name, price)=>{
    const producto = d.createElement("div")
    producto.classList.add('productos__caja')
    const contenido = `
    <div class="card">
        <div class="imgBx">
            <img src="${img}"
                alt="starwars taza">
        </div>
        <div class="contentBx">
            <h2>${name}</h2>
            <div class="size">
                <h3>Precio:</h3>
                <span>${price}</span>
            </div>
            <a href="../screens/producto.html">Ver producto</a>
            `;
       
              
        
        producto.innerHTML = contenido;
        return producto;
    };

    const seccionProducto = d.querySelector("[data-section]");
    
    const http = new XMLHttpRequest();
    http.open('GET', "http://localhost:5555/starwars");
    http.send();

    http.onload = ()=>{
        const data = JSON.parse(http.response);
        console.log(data)
        data.forEach(( product) => {
            const nuevoProducto = crearNuevoProducto(product.img, product.name, product.price);
            seccionProducto.appendChild(nuevoProducto);
        });
    };