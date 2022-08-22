/**
 * given an array of integers,sort the array.
 *
 * const arr = [-6,20, 8,-2,4]
 * bubbleSort(arr) => return [-6,-2,4,8, 20]
 *
 * :Never use, it's a poor algo to sort
 *
 * psudoCode
 * 1. indentify the pivot element in the array
 *         - pick first element in the array
 *         - last element
 *         - randmon element
 *         - median/ middle element
 *
 * 2. put everything that's smaller than pivot into a left array and everything that's greater than the pivot into a right array
 * 3. repeact the process for the individual 'left' and right array till you hava an array of lenth 1. which is sorted by defination
 * 4. repeatedly concatenate the left array, pivot and right array till one sorted array remains
 */

function qucikSort(arr) {
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

  return [...qucikSort(leftArr), pivot, ...qucikSort(rightArr)];

  //worst case : O(n^2) : when the array is already sorted...
  //best case:  O(nlogn)
}
