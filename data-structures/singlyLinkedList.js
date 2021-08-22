/* 
  Singly linked list.

  Pushing pseudocode:
  - This function should accept a value.
  - Create a new node using the value passed to the function.
  - If there is no head property on the list, set the head and tail to be the newly created node. 
  - Increment the length by one.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // this method adds an item to the singly linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if the list is empty return undefined
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // console.log('pop current', current.val);
    // console.log('pop new tail', newTail.val);

    // replace tail with new tail
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // if the list gets empty do this
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the popped item;
    return current;
  }

  // shift or remove first item in list
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    // if last item in list is shifted then nullify the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  // add item to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(idx) {
    // check if index is in range
    if (idx < 0 || idx >= length) return null;

    // use a counter to reach needed node
    let counter = 0;
    let current = this.head;

    // loop through list until you reach node with specified index
    while (idx !== counter) {
      current = current.next();
      counter++;
    }

    // return the node
    return current;
  }

  set(idx, val) {
    // find node
    let node = this.get(idx);

    // if node exists update its value
    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }
}

// create a singly linked list
let list = new SinglyLinkedList();
