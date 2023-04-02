import { FastifyPluginAsync } from 'fastify';
import { Product } from '../../models/product.model';

export const deleteProductPlugin: FastifyPluginAsync = async (app) => {
    // Delete a product
    app.delete<{ Params: { id: string; }; }>('/:id', async (request, reply) => {
        const { id } = request.params;
        await Product.findByIdAndDelete(id);
        return { status: 'delete' };
    });
};