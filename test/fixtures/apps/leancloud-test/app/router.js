'use strict';

module.exports = app => {
  app.get('/news', function* () {
    const avQuery = new this.AV.Query('News');
    this.body = yield avQuery.get(this.query.id);
  });

  app.get('/news/create', function* () {
    const Device = app.AV.Object.extend('News');
    const device = new Device();
    device.set('topic', this.query.topic);
    this.body = yield device.save();
  });
};
