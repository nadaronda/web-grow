import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Product } from '../../models/product.model';
import { Types } from 'mongoose';

interface UpdateProductRequest {
    Body: {
        nameProduct: string;
        description: string;
        priceVentaClient: number;
        priceCompra: number;
        active: boolean;
    };
    Params: {
        id: string;
    };
}

export const updateProductPlugin: FastifyPluginAsync = async (app) => {
    // Update a product
    app.put<UpdateProductRequest>('/:id', async (request, reply) => {
        const { id } = request.params;
        const { nameProduct, description, priceVentaClient, priceCompra, active } = request.body;
        const updatedProduct = {
            nameProduct,
            description,
            priceVentaClient,
            priceCompra,
            active,
        };
        const filter = { _id: new Types.ObjectId(id) };
        const options = { new: true };

        try {
            const product = await Product.findOneAndUpdate(filter, updatedProduct, options);
            if (!product) {
                reply.status(404).send('Product not found');
                return;
            }
            return product;
        } catch (err) {
            console.error(err);
            reply.status(500).send('Error updating product');
        }
    });
}

