import axios from 'axios';

const apiBaseURL = 'http://localhost:5000';//aqui tengo que poner la conexion de mi backend
export const api = axios.create({ baseURL: apiBaseURL });

export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

// hacer ruta getObjetivo
export const addProduct = async (data) => {
  console.log(`📝, la data del objetivo añadido es ${data}`);
  const res = await api.post('/products', data);
  return res.data;
};
// ruta addObjetivo hecha
/*export const deleteProduct = async (Id) => {
  const res = axios.get(`http://127.0.0.1:10/products/${Id}/delete`)
  return res.data
} */
export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const putProduct = async (id) => {
  await api.put(`/products/${id}`, async (req, res) => {
    let id = req.params;
    let { nameProduct, description, price, active } = req.body;
    await id.put(
      { nameProduct, description, price, active }, {
      where: { id }
    },
      res.status(200).send("Producto Actualizado")
    );
  });
}


