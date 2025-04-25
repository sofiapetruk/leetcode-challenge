class Solution:
    def twoSum(self, nums, target):
        # Dictionary to store numbers we've seen and their indices
        num_to_index = {}

        # Loop through the list with index
        for i in range(len(nums)):
            num = nums[i]
            complement = target - num  # The number needed to reach the target

            # If the complement is already in the dictionary, return the pair of indices
            if complement in num_to_index:
                return [num_to_index[complement], i]

            # Otherwise, store the current number and its index in the dictionary
            num_to_index[num] = i

        # This point is never reached because the problem guarantees one solution
        return []
