/**
 * The queue data structure is a sequential collection of elements that follows the principal of first in first out.
 *
 * the first element inserted into the queue is the first element to be removed
 *
 * Ex:
 * - A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end.
 * - printer
 * - CPU task scheduling
 * - callback queue in javaScript runtime
 *
 * The stack data supports two main operations:
 *  - enqueue, which adds an element to the  rare/tail of the collection
 *  - dequeue, which removes the element from head/front of the collection
 *
 *
 *      - peek() : get the value of the front element without removing
 *      - isEmpty(): check if the stack is empty
 *      - size(): get the number of elements in the stack
 *      - print(): visualize the elements in the stack
 */

class Queue {
  constructor() {
    //initialization the list
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.items[0];
    else return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
