class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  insertAtRear(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  deleteAtEnd() {
    if (!this.head) {
      return "Nooo";
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
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
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  deleteAtFront() {
    if (!this.head) {
      return "Noo";
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      tail = null;
    }
  }
  getValue(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  setValue(index, value) {
    const temp = this.getValue(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insertAtPos(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const newNode = new Node(value);
    let temp = this.getValue(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  removeatPos(index) {
    let prev = this.getValue(index - 1);
    let temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      let next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
const newLL = new LinkedList(15);
newLL.insertAtRear(16);
newLL.insertAtRear(17);
newLL.insertAtRear(18);
newLL.insertAtRear(19);
newLL.insertAtFront(14);
newLL.deleteAtEnd();
newLL.deleteAtFront();

newLL.setValue(2, 45);
newLL.setValue(1, 44);

console.log(newLL.getValue(2));
newLL.insertAtPos(1, 43);
newLL.removeatPos(1);
console.log(newLL);
console.log(newLL.reverse());
