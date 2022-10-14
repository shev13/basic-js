const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
// *	`str` это **строка**, которая будет повторена
// *	`options` это **объект** опций, который содержит следующие свойства:
//   -	`repeatTimes` устанавливает число повторений `str`
//   - `separator` это строка, разделяющая повторения `str`
//   - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//   - `additionRepeatTimes` устанавливает число повторений `addition`
//   - `additionSeparator` это строка, разделяющая повторения `addition`

function repeater(str, options) {
  resultStr = "";

  if (options.separator == undefined) options.separator = "+";

  if (options.repeatTimes == undefined) options.repeatTimes = 1;

  if (options.repeatTimes) {
    console.log(options.repeatTimes);
    for (let i = 0; i < options.repeatTimes; i++) {
      resultStr += str;
      if (options.addition != undefined) resultStr += options.addition;
      if (i != options.repeatTimes - 1) resultStr += options.separator;
    }
  }
  return resultStr;
}

module.exports = {
  repeater,
};

// console.log(repeater("la", { repeatTimes: 3 }), "la+la+la");
// console.log(repeater("single", { repeatTimes: 1 }), "single");

// console.log(
//   repeater("la", {
//     repeatTimes: 3,
//     separator: "s",
//     addition: "+",
//     additionRepeatTimes: 1,
//   }),
//   "la+sla+sla+"
// );
// console.log(
//   repeater("LALA", {
//     repeatTimes: 3,
//     separator: "s",
//     addition: "++",
//     additionRepeatTimes: 1,
//   }),
//   "LALA++sLALA++sLALA++"
// );
