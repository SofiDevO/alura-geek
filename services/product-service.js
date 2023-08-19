const starwars = () =>
	fetch("http://localhost:5555/product?category=starwars").then(
		(response) => response.json()
	);
const consolas = () =>
	fetch("http://localhost:5555/product?category=consolas").then(
		(response) => response.json()
	);
const diversos = () =>
	fetch("http://localhost:5555/product?category=diversos").then(
		(response) => response.json()
	);

const allProducts = () =>
	fetch("http://localhost:5555/product").then((response) =>
		response.json()
	);

const crearNuevoProducto = (img,name, price, description, category)=>{
	return fetch("http://localhost:5555/product", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify({
			img,
			category,
			name,
			price,
			description,
			id: uuid.v4()
		})
	});
};

const eliminarProducto = (id)=>{
	return fetch(`http://localhost:5555/product/${id}`, {
		method: "DELETE"
	})
}


export const productServices ={
	starwars,
	consolas,
	diversos,
	allProducts,
	crearNuevoProducto,
	eliminarProducto
}