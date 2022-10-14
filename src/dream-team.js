const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */ args) {
  if (args == null || args == undefined) return false;

  let arr = [];
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] == 'string') {
      j = 0;
      while (args[i][j] == ' ') j++;
      arr.push(args[i][j].toUpperCase());
    }
  }

  if (arr == '') return false;

  return arr.sort().join('');
}

module.exports = {
  createDreamTeam,
};
