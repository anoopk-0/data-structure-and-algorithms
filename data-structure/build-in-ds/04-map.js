/**'
 * A map is an ordered collection of key-value pairs, both keys and values can be of any data type.
 * Maps are iterables. They can be used with a for of loop.
 *
 * Object vs Maps
 *  - Objects are unordered whereas Maps are ordered.
 *  - keys in obj can only be string or symbol type whereas in maps, they can be of any type.
 *  - An Object has a prototype and may contain a few default keys which may collide with own keys. A map has on keys by default.
 *  - Objects are not iterable vs map are iterable
 *  - apart from storing data, functionality can be attached to an object. whereas maps are restricted to just storing data.
 *
 */

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

//to add a value
map.set("c", 3);

//to check for value
map.has("a");

//delete
map.delete("a");

//count
map.size;

//to delete all
map.clear;

for (const [key, value] of map) {
  console.log(`keys: ${key}, value: ${value}`);
}
