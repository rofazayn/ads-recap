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
}

let list = new SinglyLinkedList();
list.push('First value');
list.push('Second value');
list.push('Third value');
console.log('list', list);
console.log(list.pop());
