import fastify from 'fastify'
import pino from 'pino';
import { PORT } from './config';
import { main_app } from './app';

const server = fastify({
  logger: pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
  disableRequestLogging: true,
  ignoreTrailingSlash: true,
});

server.register(main_app)

// Server port
server.listen({ port: PORT }).catch((e) => {
  server.log.error(e);
  process.exit(1);
});