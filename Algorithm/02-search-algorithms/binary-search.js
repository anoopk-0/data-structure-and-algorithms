/**
 * Given a SORTED of 'n' elements and a target elements 't'. find the index of 't' in the array, Return -1 if the target element is not found.
 *
 * arr = [-5,2,4, 6, 10]=> 10, should return 4(as the index)
 * arr = [-5,2,4, 6, 10]=> 20, should return -1(as the index)
 *
 * IMP:BINARY SEARCH ONLY WORKS ON SORTED ARRAY.
 *
 * Pseudocode
 * if the array is empty, return -1 as the element cannot be found.
 * if the array has elements, find the middle element in the array. if the target is equal to the middle element, return the    middle element index.
 * if target is less than the middle element, binary search left half of the array.
 * if target is greater than the middle element, binary search right half of the array.
 */

function binarySearch(arr, target) {
  if (arr.length < 1) return -1;
  if (arr.length === 1) return 0;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); //O(log n)

    if (target == arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

//Recursive soln

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target == arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

function _binarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
