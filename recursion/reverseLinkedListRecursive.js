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
 var reverseList = function(head) {
    // 1 -> 2 -> 3-> 4 
     function reverseListfunc(head) {
     if(head.next == null) return head;
     let temp = reverseList(head.next);
     head.next.next = head;
     head.next = null;
     return temp;
     };
    return reverseListfunc(head);
 };