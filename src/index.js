/**
 * Function count quantity of zeros for given number's factorial in given system
 * @param {number} number - given number
 * @param {number} base - given base system
 * @return {number} quantity of zeros
 */
module.exports = function getZerosCount(number, base) {
  let simpleArr = []; // array of simmple numbers for given base
  let s = 2;          // basic simple number
  let proto = base;

  while (s <= proto) {
    if (proto % s === 0) {
      simpleArr.push(s);
      proto /= s;
    } else { s++; }
  }

  const obj = {};

  for (let i = 0, length = simpleArr.length; i < length; i++) {
    const str = simpleArr[i];
    obj[str] = true;
  }

  simpleArr = Object.keys(obj); // deleted the same elements from array

  const times = []; /* array with how many times each simple number
is in base ex: for 10 (2 - 1 time , 5 - 1 time ) */
  let que = base;

  for (let i = 0, length = simpleArr.length; i < length; i++) {
    times[i] = 0;
    while (que % simpleArr[i] === 0) {
      times[i]++;
      que /= simpleArr[i];
    }
  }

  const pow = [];
  const countZero = []; // count zeros for every simple number

  for (let i = 0, length = simpleArr.length; i < length; i++) {
    pow[i] = 1;
    countZero[i] = 0;

    while (number / Math.pow(simpleArr[i], pow[i]) > 1) {
      countZero[i] += Math.floor(number / Math.pow(simpleArr[i], pow[i]));
      pow[i]++;
    }
  }

  const res = [];

  for (let i = 0, length = countZero.length; i < length; i++) {
    res.push(+countZero[i] / +times[i]);
  }
  return Math.floor(Math.min(...res));
};
