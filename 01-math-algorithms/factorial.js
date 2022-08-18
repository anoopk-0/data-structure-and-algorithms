/*
In Maths, the factorial of an non-negative integer `n`, denoted n!,is the product of all positive integers less than or equals to 'n'.

factorial of 0 is 1.

factorial(4) = 4*3*2*1 = 24
*/

function factorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // Big- 0 : O(n)
  }

  return result;
}
