/**
 *
 * Prime number is a natural number greater than 1 that is not a  product of two smaller natural number
 *
 * isPrime(5) = true(1*5 or 5*1)
 */

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false; // big-0 = O(n)
    }
  }
  return true;
}

//other solution

function isPrime_1(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false; // big-0 = O(sqrt(n))
    }
  }
  return true;
}
