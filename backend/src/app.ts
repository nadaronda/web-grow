import { conectDB } from "./lib/db";
import { FastifyPluginAsync } from 'fastify';
import fastifyFormBody from '@fastify/formbody';
import fastifyBlipp from 'fastify-blipp';
import { index_plugin } from './routes/index.plugin';
import cors from '@fastify/cors';
import { ProductPlugin } from "./routes/products/product.plugin";
import fastifyAuth0 from "fastify-auth0-verify";
import { AUTH0 } from "./config";

const authenticatedPlugin: FastifyPluginAsync = async (app) => {
    app.addHook("preValidation", app.authenticate);
    // Add token validated routes
};

export const main_app: FastifyPluginAsync = async (app) => {
    // Register fastify-blipp
    app.register(fastifyBlipp);

    // Connect to MongoDB
    app.register(conectDB);

    // Register @fastify/cors
    app.register(cors);

    // Register @fastify/formbody
    app.register(fastifyFormBody);
    await app.register(fastifyAuth0, {
        domain: AUTH0.DOMAIN,
        audience: AUTH0.AUDIENCE,
    });

    // Own routes
    await app.register(index_plugin);

    // Execute blipp for declare all endpoints in logs
    await app.register(ProductPlugin, { prefix: '/products' });

    app.blipp();
};
