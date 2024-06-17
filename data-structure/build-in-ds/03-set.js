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
 *
 *
 * keys and values in the Set are identical.
 */

const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value
// logs the elements in insertion order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5
for (const item of mySet1.keys()) {
  console.log(item);
}

// logs the elements in insertion order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5
for (const item of mySet1.values()) {
  console.log(item);
}

// logs the elements in insertion order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5
// (key and value are the same here)
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}

//IMP => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
