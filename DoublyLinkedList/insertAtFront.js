class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class doublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  insertAtRear(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  deleteAtRear() {
    if (!this.head) return undefined;
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  insertAtFront(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = this.head.prev;
    }
    this.length++;
    return this;
  }
}
let newLL = new doublyLinkedList(7);
newLL.insertAtRear(8);
newLL.insertAtRear(9);
newLL.insertAtRear(10);
newLL.insertAtFront(6);
newLL.deleteAtRear();
console.log(newLL);
