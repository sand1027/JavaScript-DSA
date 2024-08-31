/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dup = new ListNode(0);
  dup.next = head;
  let curr = head;
  let prev = dup;
  while (curr !== null) {
    let hasDuplicate = false;
    while (curr.next !== null && curr.val === curr.next.val) {
      curr = curr.next;
      hasDuplicate = true;
    }
    if (hasDuplicate) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }
  return dup.next;
};
