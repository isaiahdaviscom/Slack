/**
 * @name TMDI
 * @author David Kolia & Isaiah Davis
 * @description A slack bot that gives you too much damn information
 */
// User setup; request credentials; store locally
const bot = require('./libs/tmdi.js');

(async function () {
  const tmdi = new bot('TMDI');
})();