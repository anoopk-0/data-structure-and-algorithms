/**
 *  A linked list is a linear data structure that includes a series of connected nodes. Each node consist of a data value and a pointer that points to the next node.
 *
 * The list element can be easily inserted or removed without reallocation or reorganization of the entire structure.
 *
 * Random access of elements is not feasible and accessing an element has linear time complexity.
 *
 * The linked list data structure supports three main operations
 *      - insertion - to add an element at the beginning, end or at a given index in the time
 *      - deletion - to remove an item given its index or value
 *      - search - to find an element given its value
 *
 *
 * Linked list Usage
 * All application of both stacks and queues are application of linked list
 * Image viewer
 */

/**
 * @params: {value}: value of the node,
 * @params: {next}: address of next node is store in next value, if is the last node, then value is null.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return;
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeByValue(value) {
    let removeNode;

    if (this.isEmpty()) return "list is Empty";

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }

      return "not found value to be deleted...";
    }
  }

  searchValue(value) {
    if (this.isEmpty()) return -1;

    let prev = this.head;
    for (let i = 0; i < this.size; i++) {
      if (prev.value === value) {
        return i;
      }
      prev = prev.next;
    }
    return "Value not found..";
  }

  //reverse of linkList

  reverseLinkList() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  print() {
    if (this.isEmpty()) return "list is Empty";

    let current = this.head;
    let values = "";
    while (current) {
      values += `${current.value} ------> `;
      current = current.next;
    }
    return values + "null";
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(11);
list.prepend(3);
list.prepend(1);
list.append(2);
