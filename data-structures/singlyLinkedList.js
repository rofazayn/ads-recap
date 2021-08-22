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
    if (idx < 0 || idx >= this.length) return null;

    // use a counter to reach needed node
    let counter = 0;
    let current = this.head;

    // loop through list until you reach node with specified index
    while (idx !== counter) {
      current = current.next;
      counter++;
    }

    // return the node
    return current;
  }

  set(idx, val) {
    // we can use get method to set a value of a node
    let foundNode = this.get(idx);

    // if node exists update its value
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    // handle edge cases
    // check if can be in list
    if (idx < 0 || idx > this.length) return false;
    // if idx is 0 we just unshift the list with new node
    if (idx === 0) return !!this.unshift(val);
    // if idx is equal to list length the we push node
    if (idx === this.length) return !!this.push(val);

    // otherwise we create a node and we properly set it in list
    let newNode = new Node(val);
    // find the node at the given index - 1
    let prev = this.get(idx - 1);
    // store node at the given index in memory
    let temp = prev.next;
    // point the prev's next to the inserted node
    prev.next = newNode;
    // point the inserted node's next to temp
    newNode.next = temp;
    // increase length
    this.length++;

    return true;
  }
}

// create a singly linked list
let list = new SinglyLinkedList();
