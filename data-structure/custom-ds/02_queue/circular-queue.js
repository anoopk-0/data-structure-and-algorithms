/**
 * The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
 *
 * also referred to as circular buffer or ring buffer and follow the FIFO principle
 *
 * A circular queue will reuse the empty block created during the dequeue operation.
 * when working with queue of fixed maximum size, a circular queue is great implementation choice.
 *
 * Example:
 * clock
 * streaming data
 * traffic light
 *
 * The circular queue data structure support 2 main operation
 *  - enqueue, which adds an element to the  rare/tail of the collection
 *  - dequeue, which removes the element from head/front of the collection
 *
 *      - isFull(): check if the queue is full
 *      - isEmpty(): check if the queue is empty
 *      - peek() : get the value of the front element without removing
 *      - size(): get the number of elements in the queue
 *      - print(): visualize the elements in the queue
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rare = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isEmpty()) {
      this.rare = (this.rare + 1) % this.capacity;
      this.items[this.rare] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rare;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.CircularQueue -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rare = -1;
    }

    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      this.items[this.front];
    }

    return null;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    }

    let i;
    let str = "";
    for (i = this.front; i !== this.rare; i = (1 + i) % this.capacity) {
      str += this.items[i];
    }
    str += this.items[i];
    console.log(str);
  }
}
