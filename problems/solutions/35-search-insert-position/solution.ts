function searchInsert(nums: number[], target: number): number {
  let finalIndex = 0;

  for (const num in nums) {
    const index = Number(num);

    const currentNumber = nums[index];

    const nextNumber = nums[index + 1];

    if (currentNumber === target) {
      finalIndex = index;
    }

    if (currentNumber < target) {
      if (nextNumber >= target || typeof nextNumber === "undefined") {
        finalIndex = index + 1;
      }
    }
  }

  return finalIndex;
}
