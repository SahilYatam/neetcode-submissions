class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for(let word of strs){
            let count = new Array(26).fill(0)

            for(let char of word){
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                count[index]++
            }
            const key = count.join("#")

            if(!map[key]) {
                map[key] = []
            }
            map[key].push(word)
        }
        return Object.values(map)
    }
}
