1. Use a dict `d` to map each char to `[first_index, count]`.  
2. Loop `for i,ch in enumerate(s)`:  
   - If `ch` not in `d`, set `d[ch]=[i,1]`  
   - Else increment `d[ch][1]`.  
3. Iterate `for _,(idx,c) in d.items()`:  
   - If `c==1`, return `idx`.  
4. Return `-1` if none.