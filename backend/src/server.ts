import fastify from 'fastify'
import pino from 'pino';
import { PORT } from './confing';


const server = fastify({
  logger:pino({
    transport: {
        target: 'pino-pretty',
    },
}),
disableRequestLogging: true,
ignoreTrailingSlash: true,
});

// CommonJs


server.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

// Server port
server.listen({ port: PORT }).catch((e) => {
  server.log.error(e);
  process.exit(1);
});