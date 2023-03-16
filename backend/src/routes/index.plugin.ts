import { FastifyPluginAsync } from 'fastify';

export const index_plugin: FastifyPluginAsync = async (app) => {
    app.get('/home', (request, reply) => {
        return { status: 'Server On' };
    });
};