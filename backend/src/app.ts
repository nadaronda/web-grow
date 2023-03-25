
import { conectDB } from "./lib/db"
import { FastifyPluginAsync } from 'fastify';
import fastifyFormBody from '@fastify/formbody';
import fastifyBlipp from 'fastify-blipp';
import { index_plugin } from './routes/index.plugin';
import cors from '@fastify/cors';
import { ProductRouter } from "./routes/productRouter";

export const main_app: FastifyPluginAsync = async (app) => {
    // Connect to MongoDB
    app.register(conectDB);

    // Register @fastify/cors
    app.register(cors);

    // Register fastify-blipp
    app.register(fastifyBlipp);

    // Register @fastify/formbody
    app.register(fastifyFormBody);

    // Own routes
    await app.register(index_plugin);

    // Execute blipp for declare all endpoints in logs
    app.register(ProductRouter, { prefix: '/products' })
    app.blipp();// este debe ir al final 

};
