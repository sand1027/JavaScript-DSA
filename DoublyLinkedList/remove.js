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
  deleteAtfront() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 1) return this.head;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.insertAtFront(value);
    if (index === this.length) return this.insertAtRear(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.deleteAtfront();
    if (index === this.length) return this.deleteAtRear();
    if (index < 0 || index > this.length) return false;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}
let newLL = new doublyLinkedList(7);
newLL.insertAtFront(6);
newLL.insertAtRear(8);
newLL.insertAtRear(9);
newLL.insertAtRear(10);
newLL.remove(1);
console.log(newLL);
