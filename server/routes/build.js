const path = require('path');

module.exports = server => {
  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../build/static'),
        listing: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (req, h) {
      return h.view('index');
    }
  });
};
