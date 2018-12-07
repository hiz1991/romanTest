const toRoman = (num) => {  
  let stringsRes = '';
  let decimals = [1000, 500, 100, 50, 10, 5, 1];
  var romans = ['M', D, C, L, X, V, I];
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