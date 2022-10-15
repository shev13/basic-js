const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'; //return Error('Invalid date!');

  if (!(date instanceof Date)) throw new Error('Invalid date!');

  // let checkDate = new Date(date).toString();
  // // console.log(date, checkDate);
  // if (checkDate === 'Invalid Date') throw new Error('Invalid date!');

  let month = date.getMonth();

  if (month === MONTHS.dec || month === MONTHS.jan || month === MONTHS.feb)
    return 'winter';

  if (month === MONTHS.mar || month === MONTHS.apr || month === MONTHS.may)
    return 'spring';

  if (month === MONTHS.jun || month === MONTHS.jul || month === MONTHS.aug)
    return 'summer';

  if (month === MONTHS.sep || month === MONTHS.oct || month === MONTHS.nov)
    return 'autumn';
}

module.exports = {
  getSeason,
};
