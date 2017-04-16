'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/leancloud.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/leancloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /news', function* () {
    const topic = `topic_${Date.now()}`;
    const queryResponse = yield app.httpRequest()
      .get(`/news/create?topic=${topic}`)
      .accept('json')
      .expect(200);

    assert(queryResponse.body.topic === topic);
    assert(queryResponse.body.objectId);

    const response = yield app.httpRequest()
      .get(`/news?id=${queryResponse.body.objectId}`)
      .accept('json')
      .expect(200);
    assert(response.body.topic === topic);
  });
});
