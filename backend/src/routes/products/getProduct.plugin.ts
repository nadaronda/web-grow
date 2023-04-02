import { FastifyPluginAsync } from 'fastify';
import { Product } from '../../models/product.model';

export const getProductPlugin: FastifyPluginAsync = async (app) => {
    // Get a product
    app.get<{ Params: { id: string; }; }>('/:id', async (request, reply) => {
        const { id } = request.params;
        const product = await Product.findById(id);
        return product;
    });
};