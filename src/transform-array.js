const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */ arr) {
  if (typeof arr != "object" || arr == null || arr == undefined)
    return "'arr' parameter must be an instance of the Array!";
  if (Array.isArray(arr) === false)
    return "'arr' parameter must be an instance of the Array!";

  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;

      case "--discard-prev":
        arr1.pop(arr[i - 1]);
        break;

      case "--double-next":
        if (i + 1 < arr.length) arr1.push(arr[i + 1]);
        break;

      case "--double-prev":
        if (i > 0) arr1.push(arr[i - 1]);
        break;

      default:
        arr1.push(arr[i]);
        break;
    }
  }
  return arr1;
}

module.exports = {
  transform,
};
