function searchInsert(nums: number[], target: number): number {
  // Initialize the result index to 0 by default.
  // If all elements are greater than target, we’ll return 0.
  let finalIndex = 0;

  // Iterate over all indices in the array.
  // Note: using `for…in` gives string keys, so we convert to Number.
  for (const num in nums) {
    const index = Number(num);

    // Current element at position `index`
    const currentNumber = nums[index];
    // Next element in sequence (may be undefined if index is at end)
    const nextNumber = nums[index + 1];

    // Case 1: If we find the target exactly, record its index.
    if (currentNumber === target) {
      finalIndex = index;
    }

    // Case 2: If target is greater than currentNumber...
    if (currentNumber < target) {
      // …and either the next element is >= target, or there's no next element,
      // then target should be inserted right after currentNumber.
      if (nextNumber >= target || typeof nextNumber === "undefined") {
        finalIndex = index + 1;
      }
    }
  }

  // Return the resolved index where target is found or should be inserted.
  return finalIndex;
}
