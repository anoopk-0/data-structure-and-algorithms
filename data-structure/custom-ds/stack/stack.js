/**
 * The stack data structure is a sequential collection of elements that follows the principle of last in first out.
 *
 * the last element inserted into the stack is first element to be removed.
 *
 * Example:
 * - browser history tracking
 * - undo operation when typing
 * - call stack in js runtime
 *
 * The stack data supports two main operations:
 *  - push, which adds an element to the collection
 *  - pop, which removes the most recent;y added element from the collection
 *
 *  other operations
 *      - peek() : get the value of the top element without removing
 *      - isEmpty(): check if the stack is empty
 *      - size(): get the number of elements in the stack
 *      - print(): visualize the elements in the stack
 */

class Stack {
  constructor() {
    //initialization the list
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.push();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
// have a constant time complexity
