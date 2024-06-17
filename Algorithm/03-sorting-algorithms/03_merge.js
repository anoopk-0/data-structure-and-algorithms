/**
 *  * given an array of integers,sort the array.
 *
 * const arr = [-6,20, 8,-2,4]
 *
 * PseudoCode
 * divide the array into sub arrays, each containing only on element(an array with one element is considered sorted)
 * repeatedly merge the sub array to produce new sorted sub array, until there is only one sub array remaining, then will be sorted array
 */

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    }
    sortedArr.push(rightArr.shift());
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//best complexity:  O(n log n)
