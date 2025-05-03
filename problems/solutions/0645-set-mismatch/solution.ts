function findErrorNums(nums: number[]): number[] {
  const frequency: number[] = Array.from({ length: nums.length + 1 }, () => {
      return 0
  })

  for (let num of nums) {
      frequency[num]++;
  }

  let duplicated = 0;
  let missing = 0;

  for (let i = 1; i < frequency.length; i++) {
      if (frequency[i] === 2) duplicated = i;
      if (frequency[i] === 0) missing = i;
  }

  return [duplicated, missing];
};