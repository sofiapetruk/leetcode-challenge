# 219. Contains Duplicate II - Solution Explanation

## Approach: Using Hash Map (Dictionary)

The solution uses a hash map to keep track of the last seen index of each number, allowing us to efficiently check for duplicates within the specified distance k.

## Algorithm Logic:

1. We create an empty hash map `numToIndex` to store the last seen index of each number.
2. We iterate through the array with a loop.
3. For each number:
   - If we've seen this number before (it exists in the map):
     - Calculate the distance between current index and last seen index
     - If the distance is less than or equal to k, we found a valid duplicate
     - Otherwise, update the last seen index to current index
   - If we haven't seen this number, add it to the map with current index

## Step-by-Step Example:

Using the example: `nums = [1,2,3,1]`, `k = 3`

1. Initialize `numToIndex = {}`
2. Iteration 1 (i=0):
   - `num = 1`
   - Not in map, add `numToIndex[1] = 0`
3. Iteration 2 (i=1):
   - `num = 2`
   - Not in map, add `numToIndex[2] = 1`
4. Iteration 3 (i=2):
   - `num = 3`
   - Not in map, add `numToIndex[3] = 2`
5. Iteration 4 (i=3):
   - `num = 1`
   - Found in map at index 0
   - Distance = 3 - 0 = 3 ≤ k
   - Return true

## Time and Space Complexity:

- Time Complexity: O(n) - We make a single pass through the array
- Space Complexity: O(min(n,k)) - In worst case, we store at most k elements in the map
