/**
 * Given the array of 'n' elements and a target elements 't'. find the index of 't' in the array, Return -1 if the target element is not found.
 *
 * arr = [-5,2,10,4,6]=> 10, should return 2(as the index)
 * arr = [-5,2,10,4,6]=> 20, should return -1(as the index)
 *
 * pseudocode:
 * start at the first element in the array and move towards the last.
 * At each element though, check if the element is equal to the target element.
 * if element found, return the index of the element.
 */

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (n[i] === x) {
      return i; //-------------------------> O(n)
    }
  }

  return -1;
}

//recursive approach: it also have the same time complexity, so their is no point solving a linear search by recursion.

function LinearSearchRecursively(ArrayGiven, target, i) {
  const arrayLength = ArrayGiven.length;

  if (i > arrayLength - 1) {
    return -1;
  }
  if (ArrayGiven[i] === target) {
    return i;
  }
  return LinearSearchRecursively(ArrayGiven, x, i + 1);
}

const testArray = [1, 2, 3, 4, 5, 6, 7];
console.log(`Element index : ${LinearSearchRecursively(testArray, 7, 0)}`);
