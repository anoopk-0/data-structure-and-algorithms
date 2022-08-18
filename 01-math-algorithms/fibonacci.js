/*
Give a number 'n', find the first 'n' elements of the fibonacci sequence
IMP:
In maths, the fibonacci sequence is sequence in which each number is the sum of the two preceding ones.

sample:
fibonacci(2): 0, 1;
fibonacci(3): 0, 1, 1;
fibonacci(5): 0, 1, 1, 2, 3, 5
..
*/

//Normal Loop soln
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Big-O = O(n)
  }

  return fib;
}
