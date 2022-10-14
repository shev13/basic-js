const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */ args) {
  let count = 0;
  for (let iRow = 0; iRow < args.length; iRow++) {
    for (let iCol = 0; iCol < args[iRow].length; iCol++) {
      if (args[iRow][iCol] == '^^') count++;
    }
  }
  return count;
}

module.exports = {
  countCats,
};
