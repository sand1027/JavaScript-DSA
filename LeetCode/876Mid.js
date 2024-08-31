findMiddleNode();
if (!this.head) {
  return null;
}

let fast = this.head;
let slow = this.head;
while (fast !== null && fast.next !== null) {
  fast = fast.next.next;
  slow = slow.next;
}

return slow;
