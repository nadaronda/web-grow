import { DB_URL } from './confing';
import { FastifyPluginAsync } from 'fastify';
import mongoose from 'mongoose';

export const db_plugin: FastifyPluginAsync = async (app) => {
    app.log.info('Connecting to Database...');
    await mongoose.connect(DB_URL);
    app.log.info(`✅Connected to ${DB_URL}`);
};