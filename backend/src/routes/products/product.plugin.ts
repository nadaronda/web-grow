import { FastifyPluginAsync } from 'fastify';
import { createProductPlugin } from './createProduct.plugin';
import { deleteProductPlugin } from './deleteProduct';
import { getAllProductsPlugin } from './getAllProducts.plugin';
import { getProductPlugin } from './getProduct.plugin';
import { updateProductPlugin } from './updateProduct.plugin';

export const ProductPlugin: FastifyPluginAsync = async (app) => {
  app.register(createProductPlugin);
  app.register(deleteProductPlugin);
  app.register(getAllProductsPlugin);
  app.register(getProductPlugin);
  app.register(updateProductPlugin);
};