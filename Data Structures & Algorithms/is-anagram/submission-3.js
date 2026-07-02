class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let charCounts = new Array(26).fill(0)

        for(let i = 0; i < s.length; i++){
            charCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charCounts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        for(let count of charCounts){
            if(count !== 0) return false
        } 

        return true
    }
}
