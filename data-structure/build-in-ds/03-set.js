/**
 * A set is a data structure that can hold a collection of values. the values however must be unique.
 * set can contain a mix of different data types.
 * set are dynamically sized.
 * Sets do not maintain and insertion order.
 * sets are iterables. they can be used with a for of loop.
 *
 *
 * set VS Array
 *      - Array can contain duplicate values whereas sets cannot
 *      - Insertion order is maintained in arrays but it is not the case with sets
 *      - searching and deleting an element in set is faster as compared to array
 */

const set = new Set([1, 2, 4]);

//to add new element
set.add(5);

//the duplicate value is ignored
set.add(4);

// to check if the value exist
set.has(4);

//delete
set.delete(2);

//number
set.size;

//delete all the element in the set
set.clear();

for (let item of set) {
  console.log(item);
}
