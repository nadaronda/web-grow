
import { db_plugin } from './db';
import { FastifyPluginAsync } from 'fastify';
import fastifyFormBody from '@fastify/formbody';
import fastifyBlipp from 'fastify-blipp';
import { index_plugin } from './routes/index.plugin';
import cors from '@fastify/cors';


/*const recipes_plugin: FastifyPluginAsync = async (app) => {
    await app.register(list_recipes_plugin);
    await app.register(create_recipes_plugin);
    await app.register(delete_recipe_plugin);
};*/

export const main_app: FastifyPluginAsync = async (app) => {
    // Connect to MongoDB
    app.register(db_plugin);

    // Register @fastify/cors
    app.register(cors);

    // Register fastify-blipp
    app.register(fastifyBlipp);

    // Register @fastify/formbody
    app.register(fastifyFormBody);

    // Own routes
    await app.register(index_plugin);
    /*
   
    await app.register(add_ingredient_plugin);
    await app.register(delete_ingredient_plugin);
    await app.register(delete_all_ingredients_plugin);
    await app.register(recipes_plugin, { prefix: '/recipes' });
*/
    // Execute blipp for declare all endpoints in logs
    app.blipp();// este debe ir al final 
};
