import axios from 'axios'

const apiBaseURL = 'http://127.0.0.1:10'
const api = axios.create({ baseURL: apiBaseURL })

export const getProductos = async () => {
  const res = await api.get('/producto')
  return res.data
}

// hacer ruta getObjetivo
export const addProducto = async (data) => {
  console.log(`📝, la data del objetivo añadido es ${data}`)
  const res = await api.post('/producto', data)
  return res.data
}
// ruta addObjetivo hecha
export const deleteProducto = async (Id) => {
  const res = await api.get(`/producto/${Id}/delete`)
  return res.data
}
