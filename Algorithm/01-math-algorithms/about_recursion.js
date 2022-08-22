/*
Recursion is when a function call itself.

breaking down your problem into smaller versions of the same problem, recursion is very useful.

IMP:
Every recursion soln need to have a base case - a condition to terminate the recursion.

Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive soln maybe far worse compare to a iterative soln.
*/

//FIbonacci sequence

function _fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return _fibonacci(n - 1) + _fibonacci(n - 2);
}
// Big-O = O(2^n), which is not a good soln.

function _factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * _factorial(n - 1); //big-O= O(n)
}
