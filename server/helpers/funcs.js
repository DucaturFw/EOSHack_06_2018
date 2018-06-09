const { Server } = require('hapi');
const { inspect } = require('util');

module.exports = {
  catchError,
  startServer
};

function catchError(error) {
  console.error(inspect(error, true, 1, true));
}

async function startServer(server) {
  await server.start();

  console.log(`Ducatur server running at: ${server.info.uri}`);
}
