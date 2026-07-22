class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet = new Set(nums)
        let currentNum = 0
        let len = 0
        let longest = 0

        for(let num of hashSet){
            if(hashSet.has(num - 1)) continue;

            if(!hashSet.has(num - 1)) {
                currentNum = num
                len = 1

                while(hashSet.has(currentNum + 1)){
                    currentNum = currentNum + 1
                    len++
                }
            }

            if(len > longest){
                longest = len
            }

        }

        return longest
    }
}
