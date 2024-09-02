/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let n = arr.length;
  let temp = arr[k - 1];
  arr[k - 1] = arr[n - k];
  arr[n - k] = temp;

  let newHead = new ListNode(arr[0]);
  let newCurr = newHead;
  for (let i = 1; i < n; i++) {
    newCurr.next = new ListNode(arr[i]);
    newCurr = newCurr.next;
  }
  return newHead;
};
