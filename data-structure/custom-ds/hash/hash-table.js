/**
 * A hash table, also know as hash map, is a data structure that is used to store key-value pairs. Given a key, we can associate a value with that key for very fast lookup.
 * javaScript's object is a special implementation of the hash table data structure. however, Object class adds it's own keys. Keys that we input may conflict and overwrite the inherited default properties.
 * Map which was introduced in 2015 all to store key-value pair.
 *
 * Hash Table: (Fast lookup)
 *  - store key value pair
 *
 * 1.  'in' => 'india',
 * 2.  'au' => 'australia'
 *
 *  we store the key value pair in a fix sized array.
 *  Arrays have a numeric index.
 *
 * How do we go from using a string as an index to number as an index ?
 *     A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
 *    using the index, store the value.
 *
 * the same hashing function is reused to retrieve the value given a key.
 *  - set to store a key-value pair.
 *  - get to retrieve a value given its key
 *  - remove to delete a key value pair
 *
 * Application:
 * - hash table are typically implemented where constant time lookup and insertion are required.
 *  example:
 *     - Database indexing
 *     - Caches
 */

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    //this.table[index] = value;

    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[i] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (!bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = null;
    const bucket = this.table[index];
    if (!bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
