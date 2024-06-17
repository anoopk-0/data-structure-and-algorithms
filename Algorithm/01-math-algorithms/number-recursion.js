function decimalToBinary(num, str = "") {
  if (Math.floor(num) == 0) return str;

  str = Math.floor(num % 2) + str;
  return decimalToBinary(num / 2, str);
}

decimalToBinary(233); //'11101001'


/**
 * TODO:  add natural number put n
 */

function addNaturalNum(n) {
    if(n==0) return 0;
    return n + addNaturalNum(n-1)
}