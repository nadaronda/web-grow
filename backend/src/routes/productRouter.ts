import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { request } from 'http';
import { Product } from '../models/product.model';


type Myrequest = FastifyRequest<{
  Body: { /*category: string, */nameProduct: string, description: string, price: number, active: boolean, img?: object; };
  Params: { id: string; };
}>;
export const ProductRouter: FastifyPluginAsync = async (app) => {
  // Get all products
  app.get('/', async (request, reply) => {
    const products = await Product.find().lean();
    return products;
  });
  // Create a new Producto
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { /*category,*/ nameProduct, description, price, active, img } = request.body;
    const newProduct = new Product({/* category,*/ nameProduct, description, price, active, img });
    await newProduct.save();
    return newProduct;
  });
  // borrar Producto
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Product.findByIdAndDelete(id);
    return { status: 'delete' };
  });
  //actulaizar el dato
  app.put('/:id', async (request: Myrequest, reply: FastifyReply) => {

    const { id } = request.params;
    const { nameProduct, description, price, active } = request.body;
    await Product.findOneAndReplace({ nameProduct, description, price, active }, {
      where: {
        id,
      }
    });
    reply.status(200).send("su producto esta actualizado");

  });
};