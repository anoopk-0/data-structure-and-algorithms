/*
Giver a +ve 'n', determine if the number is a power of 2 or not. An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)
isPowerOfTwo(5) = false
 */

//Soln-1
function isPowerOfTwo(n) {
  for (let i = 0; i < n; i++) {
    if (n === Math.pow(2, i)) {
      return true;
    }
  }

  return false;
}
//Big-O =  O(n)

//soln-2
function _isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

//Big-O =  O(logn)
