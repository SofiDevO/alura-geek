// Define the base API URL
const BASE_API_URL = "https://my-alura-geek-api.vercel.app/product";

// Generic function for making HTTP requests
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

// Object that contains all service functions to interact with the API
export const productServices = {
  // Get products from the "starwars" category
  starwars: () => fetchData(`${BASE_API_URL}?category=starwars`),

  // Get products from the "consolas" category
  consolas: () => fetchData(`${BASE_API_URL}?category=consolas`),

  // Get products from the "diversos" category
  diversos: () => fetchData(`${BASE_API_URL}?category=diversos`),

  // Get all products without filtering
  allProducts: () => fetchData(BASE_API_URL),

  // Create a new product
  crearNuevoProducto: (img, name, price, description, category) => {
    const id = uuid.v4();
    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  // Delete a product by its ID
  eliminarProducto: (id) => fetchData(`${BASE_API_URL}/${id}`, { method: "DELETE" }),

  // Get details of a product by its ID
  detalleProducto: (id) => fetchData(`${BASE_API_URL}/${id}`),

  // Update a product by its ID
  actualizarProducto: (img, category, name, price, description, id) => {
    return fetchData(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  // Get details of a product by its ID (seems duplicated)
  productoIndividual: (id) => fetchData(`${BASE_API_URL}/${id}`),

  // Get related products (not used in this code)
  relacionados: () => fetchData(BASE_API_URL),
};
