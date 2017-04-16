'use strict';

module.exports = app => {
  app.config.coreMiddleware.push('leancloud');
};
