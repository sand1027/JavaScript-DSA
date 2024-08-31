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
console.log(newLL);
