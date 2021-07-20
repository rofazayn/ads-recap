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

  // this methods adds an item to the singly linked list
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
}

let list = new SinglyLinkedList();
list.push('First value');
list.push('Second value');
list.push('Third value');
console.log('list', list);
