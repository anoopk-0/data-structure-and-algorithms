/**
 * given an array of integers,sort the array.
 *
 * const arr = [-6,20, 8,-2,4]
 * bubbleSort(arr) => return [-6,-2,4,8, 20]
 *
 * :Never use, it's a poor algo to sort
 *
 * pseudoCode
 * virtually split the array into a sorted and unsorted part
 * assume that the first element is ready sorted and remaining elements are unsorted.
 * select an unsorted element and compare with all the element in the sorted part.
 * if the element in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. else, shift larger elements in the sorted part towards the right.
 * insert the selected element at the right index
 * repeat the all the unsorted elements are placed in the right order.
 *
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; //index of the sorted element
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert; // O(n^2)
  }

  return arr;
}
