/**
 * The function return a roman litelral representation 
 * for a provided positive decimal integer number
 * @example
 * // returns XL
 * toRoman(90);
 * @param num The number in decimal
 * @returns {String} Returns string value of the roman literal.
 */
const toRoman = (num) => {
  let stringsRes = '';
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i <= decimals.length; i++) { // looping through all pivots
    while (num % decimals[i] < num) {  //while modus op is less tn num  
      stringsRes += romans[i]; // add the roman number to stringsRes
      num -= decimals[i]; // substract the decimal value from the num
    }
  }
  return stringsRes;
};

document.write(`${toRoman(90)} (expected: XC)<br>`);  
document.write(`${toRoman(40)} (expected: XL)<br>`);  
document.write(`${toRoman(12)} (expected: XII)<br>`);  
document.write(`${toRoman(114)} (expected: CXIV)<br>`);  
document.write(`${toRoman(2000)} (expected: MM)<br>`);  
document.write(`${toRoman(149)} (expected: CXLIX)<br>`); 
document.write(`${toRoman(1494)} (expected: MCDXCIV)<br>`); 