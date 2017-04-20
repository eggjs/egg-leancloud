# egg-leancloud

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-leancloud.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-leancloud
[travis-image]: https://img.shields.io/travis/eggjs/egg-leancloud.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-leancloud
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-leancloud.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-leancloud?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-leancloud.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-leancloud
[snyk-image]: https://snyk.io/test/npm/egg-leancloud/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-leancloud
[download-image]: https://img.shields.io/npm/dm/egg-leancloud.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-leancloud

[LeanCloud](https://leancloud.cn/) plugin for [Egg.js](https://eggjs.org)

> Maintainer Required.  
> If you are interested in picking up maintenance, file an issue at [eggjs/egg](https://github.com/eggjs/egg).

## Install

```bash
$ npm i egg-leancloud --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.leancloud = {
  enable: true,
  package: 'egg-leancloud',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.leancloud = {
  appId: '',
  appKey: '',
  masterKey: '',
};
```

You can config this at `config.local.js` and leave `config.default.js` empty, then will auto read config from `process.env`.

see [config/config.default.js](config/config.default.js) for more detail.

## Example

app start point:

```js
// {app_root}/app.js

// adjust egg env by LeanCloud env
if (!process.env.EGG_SERVER_ENV) {
  switch (process.env.LEANCLOUD_APP_ENV) {
    case 'production' :
      process.env.EGG_SERVER_ENV = 'prod';
      break;
    case 'stage':
      process.env.EGG_SERVER_ENV = 'stage';
      break;
    default:
      break;
  }
}

// start app
require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.LEANCLOUD_AVAILABLE_CPUS,
  port: process.env.LEANCLOUD_APP_PORT || process.env.PORT || 7001,
});
```

use LeanCloud api at controller:

```js
// {app_root}/app/controller/news.js
exports.list = function* (ctx) {
  const avQuery = new ctx.AV.Query('News');
  ctx.body = yield avQuery.find();
};
```

use LeanCloud api at start:

```js
// {app_root}/app.js
module.exports = app => {
  app.beforeStart(function* () {
    const avQuery = new ctx.AV.Query('User');
    app.users = yield avQuery.find();
  });
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
