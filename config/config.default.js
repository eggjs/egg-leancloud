'use strict';

/**
 * LeanCloud default config, will read from ENV as default.
 * @member Config#leancloud
 * @property {String} appId - application id
 * @property {String} appKey - application keyd
 * @property {String} masterKey - application master key
 * @property {String} region - default to china
 */
exports.leancloud = {
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY,
};
