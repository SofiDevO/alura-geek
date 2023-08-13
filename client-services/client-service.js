const d = document;

const productosAll = () =>
	fetch("http://127.0.0.1:3000/producto").then((respuesta) => respuesta.json());

    const crearproducto = (url, name, price, description) => {
        return fetch("http://127.0.0.1:3000/producto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url, name, price, description: uuid.v4() }),
        });
    };
