class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = new Map()

        for(let i = 0; i < s.length; i++){
            if(!map.has(s[i])){
                map.set(s[i], 1)
            } else{
                let count = map.get(s[i])
                map.set(s[i], count += 1)
            }
        }

        for(let j = 0; j < t.length; j++){
            if(!map.has(t[j])){
                return false
            } else{
                let count = map.get(t[j])
                map.set(t[j], count - 1);
            }
        }

        for (const [key, val] of map.entries()) {
            if(val !== 0) {
                return false
            }
        }
        
        return true
    }
}
