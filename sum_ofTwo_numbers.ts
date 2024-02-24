class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let flag = 0;
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sum = (l2?.val || 0) + (l1?.val || 0) + flag;

  if (!l1 && !l2 && !flag) {
    return null;
  }

  flag = sum > 9 ? 1 : 0;
  return new ListNode(
    sum % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null)
  );
}

function createListNodeFromArray(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null; // Handle empty array
  }

  const head = new ListNode(arr[0]); // Create the head node
  let current = head; // Start with the head

  // Iterate through the remaining elements and create linked nodes
  for (let i = 1; i < arr.length; i++) {
    const nextNode = new ListNode(arr[i]);
    current.next = nextNode;
    current = nextNode;
  }

  return head;
}
