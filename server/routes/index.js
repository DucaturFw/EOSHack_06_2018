const api = require('./api');
const build = require('./build');

module.exports = server => {
  api(server);
  build(server);
};
