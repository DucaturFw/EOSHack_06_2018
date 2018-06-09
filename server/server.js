const Hapi = require('hapi');
const h2o2 = require('h2o2');
const inert = require('inert');
const vision = require('vision');

const { port, devPort, address } = require('./config');
const { catchError, startServer } = require('./helpers/funcs');
const addTemplateEngine = require('./helpers/templates');
const addRoutesToServer = require('./routes');
const addSockets = require('./sockets');

module.exports = async function initServer(isDev = false) {
  const server = Hapi.server({
    port: isDev ? devPort : port,
    address
  });

  await server.register({ plugin: inert });
  await server.register(vision);
  await server.register({ plugin: h2o2 });

  addSockets(server);
  addRoutesToServer(server);
  addTemplateEngine(server);

  startServer(server);
};
