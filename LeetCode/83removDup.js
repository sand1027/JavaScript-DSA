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
  let seenValues = new Set();
  let curr = head;
  let prev = null;
  while (curr !== null) {
    if (seenValues.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seenValues.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};
