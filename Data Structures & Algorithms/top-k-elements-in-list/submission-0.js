class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = new Map()
        let result = []

        for(let num of nums){
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        let values = []
        for(const [key, val] of hashMap.entries()){
            values.push([key, val])
        }

        values.sort((a, b) => b[1] - a[1])

        for(let key of values.slice(0, k)){
            result.push(key[0])
        }

        return result
    }
}
