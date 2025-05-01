import math

class Solution:
    def isPowerOfFour(self, n: int) -> bool:

        if n <= 0:
            return False
        
        val = math.log(n) / math.log(4)

        isBoolean = True

        if val == math.floor(val):
            isBoolean = True    
        else:
            isBoolean = False
        
        return isBoolean