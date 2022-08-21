/**
 * Given the array of 'n' elements and a target elements 't'. find the index of 't' in the array, Return -1 if the target element is not found.
 *
 * arr = [-5,2,10,4,6]=> 10, should return 2(as the index)
 * arr = [-5,2,10,4,6]=> 20, should return -1(as the index)
 *
 * pseduocode:
 * start at the first element in the array and move towards the last.
 * At each elemenet though, check if the element is equal to the target element.
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

//recursive approuch

function _linearSearch(arr, x) {}
