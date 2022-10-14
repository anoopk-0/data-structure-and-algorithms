/**
 * given an array of integers,sort the array.
 *
 * const arr = [-6,20, 8,-2,4]
 * bubbleSort(arr) => return [-6,-2,4,8, 20]
 *
 * :Never use, it's a poor algo to sort
 *
 * pseudoCode
 * 1. identify the pivot element in the array
 *         - pick first element in the array
 *         - last element
 *         - random element
 *         - median/ middle element
 *
 * 2. put everything that's smaller than pivot into a left array and everything that's greater than the pivot into a right array
 * 3. respect the process for the individual 'left' and right array till you have an array of length 1. which is sorted by definition
 * 4. repeatedly concatenate the left array, pivot and right array till one sorted array remains
 */

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

  //worst case : O(n^2) : when the array is already sorted...
  //best case:  O(n log n): average case
}
