
import { conectDB } from "./lib/db"
import { FastifyPluginAsync } from 'fastify';
import fastifyFormBody from '@fastify/formbody';
import fastifyBlipp from 'fastify-blipp';
import { index_plugin } from './routes/index.plugin';
import cors from '@fastify/cors';
import { ProductRouter } from "./routes/productRouter";
import fastifyView from '@fastify/view';
import path from 'path';
import fs from 'fs';
import fastifyStatic from '@fastify/static';
import handlebars from 'handlebars';
export const main_app: FastifyPluginAsync = async (app) => {
    // Register @fastify/static
    const STATIC_DIR = path.join(__dirname, '../public');
    app.register(fastifyStatic, {
        root: STATIC_DIR,
    });

    // Register @fastify/view
    const VIEW_DIR = path.join(__dirname, '../view');
    app.register(fastifyView, {
        engine: {
            handlebars,
        },
        root: VIEW_DIR,
        layout: 'layouts/main',
    });

    // Register Handlebars Partials
    const PARTIAL_DIR = path.join(__dirname, '../view/partials');
    const filenames = fs.readdirSync(PARTIAL_DIR);
    filenames.forEach((filename) => {
        let matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        let name = matches[1];
        let template = fs.readFileSync(PARTIAL_DIR + '/' + filename, 'utf8');
        handlebars.registerPartial(name, template);
    });
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
