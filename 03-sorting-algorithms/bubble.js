/**
 * given an array of integers,sort the array.
 *
 * const arr = [-6,20, 8,-2,4]
 * bubbleSort(arr) => return [-6,-2,4,8, 20]
 *
 * :Never use, it's a poor algo to sort
 *
 * psudoCode
 * compare adjacent elements in the array and swap the position if they are not in the intended oreder.
 * repeat the instruction as you step through eacch element in the arry
 * once you step though the whole array, with no swap, the array is sorted
 */

function bubbleSort(arr) {
  let swaped;
  do {
    swaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);

  return arr;
}

//O(n^2) : it has nested loop;
