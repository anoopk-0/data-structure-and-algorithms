/**
 * Due to shift operation in queue, it has a linear complexity and not constant.
 */

class Queue {
  constructor() {
    //initialization the list
    this.items = {};

    //as object a unordered list, need array like pointer
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}
