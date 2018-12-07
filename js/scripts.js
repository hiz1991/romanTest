const toRoman = (num) => {  
  let stringsRes = '';
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i <= decimals.length; i++) { 
    while (num % decimals[i] < num) {   
      stringsRes += romans[i]; 
      num -= decimals[i]; 
    }
  }
  return stringsRes;
}

document.write(`${toRoman(90)} (expected: XC)<br>`);  
document.write(`${toRoman(40)} (expected: XL)<br>`);  
document.write(`${toRoman(12)} (expected: XII)<br>`);  
document.write(`${toRoman(114)} (expected: CXIV)<br>`);  
document.write(`${toRoman(2000)} (expected: MM)<br>`);  
document.write(`${toRoman(149)} (expected: CXLIX)<br>`); 
document.write(`${toRoman(1494)} (expected: MCDXCIV)<br>`); 