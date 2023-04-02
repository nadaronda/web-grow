import { FastifyPluginAsync } from 'fastify';
import { Product } from '../../models/product.model';

export const getAllProductsPlugin: FastifyPluginAsync = async (app) => {
    // Get all products 
    app.get('/', async (request, reply) => {
        const products = await Product.find().lean();
        return products;
    });
};