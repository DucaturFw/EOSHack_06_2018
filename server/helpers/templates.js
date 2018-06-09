const path = require('path');
const Nunjucks = require('nunjucks');

module.exports = server => {
  server.views({
    engines: {
      html: {
        compile(src, options) {
          const template = Nunjucks.compile(src, options.environment);

          return context => template.render(context);
        },

        prepare(options, next) {
          options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
          return next();
        }
      }
    },
    path: path.join(__dirname, '../../build')
  });
};
