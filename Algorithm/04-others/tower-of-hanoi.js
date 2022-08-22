/**
 * The object of the puzzle is to move the entire stack to the last rod, obeying the following rule..
 * - only one disk maybe move at a time.
 * - each move consist of talking the upper disk from one of the stacks and placing it on top another stack or on an empty rod.
 * - no disk maybe placed on top of a disk that is smaller.
 *
 * psudoCode
 *
 * shift n-1 disks from A to B using C
 * shift last disk from A to c
 * shift n-1 disks from B to C using A.
 */

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n == 1) {
    console.log(`move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`);

  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
