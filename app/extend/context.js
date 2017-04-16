'use strict';

module.exports = {
  /**
   * LeanCloud Storage
   * @member {Object} Context#AV
   */
  get AV() {
    return this.app.AV;
  },
};
