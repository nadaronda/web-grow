import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import {    Producto } from '../models/producto.model'
type Myrequest = FastifyRequest<{
    Body: {categoria: string,nombreProducto: string, descripcion: string, precio: number};
    Params: {id: string}
}>
export const ProductoRouter: FastifyPluginAsync = async (app) => {
  // Get all productos
  app.get('/', async () => {
    const productos = await Producto.find().lean()
    return productos
  })
  // Create a new Producto
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { categoria, nombreProducto, descripcion, precio } = request.body
    const newProducto = new Producto({ categoria, nombreProducto, descripcion, precio })
    await newProducto.save()
    return newProducto
  })
  // borrar Producto
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Producto.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}