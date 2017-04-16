'use strict';

const LEANCLOUD = Symbol('app#AV');
const AV = require('leanengine');

module.exports = {
  /**
   * LeanCloud Storage
   * @member {Object} Application#AV
   */
  get AV() {
    if (!this[LEANCLOUD]) {
      AV.init(this.config.leancloud);
      this[LEANCLOUD] = AV;
    }
    return this[LEANCLOUD];
  },
};
