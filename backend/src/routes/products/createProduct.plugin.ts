import { FastifyPluginAsync } from 'fastify';
import { Product } from '../../models/product.model';

export const createProductPlugin: FastifyPluginAsync = async (app) => {
    // Create a new product
    app.post<{ Body: { nameProduct: string, description: string, priceVentaClient: number, priceCompra: number, active: boolean, img: string; }; }>('/', async (request, reply) => {
        const { /*category,*/ nameProduct, description, priceVentaClient, priceCompra, active, img } = request.body;
        const newProduct = new Product({/* category,*/ nameProduct, description, priceVentaClient, priceCompra, active, img });
        await newProduct.save();
        return newProduct;
    });
};