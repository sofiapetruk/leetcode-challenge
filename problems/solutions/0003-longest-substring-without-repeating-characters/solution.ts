function lengthOfLongestSubstring(s: string): number {
    if(!s) return 0
    
    const max = new Set([1])
    let dic = ''
    for(let i = 0; i<s.length; i++) {
        const char = s[i]
        const ind = dic.indexOf(char)

        // Not-Found
        if(ind === -1) {
            dic += char
            
            max.add(dic.length)
        } else {
            // Found
            dic = dic.slice(ind + 1).concat(char)
        }
    }

    return Math.max(...(max))
};