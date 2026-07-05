class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashMap = {}
        result = []

        for num in nums:
            hashMap[num] = hashMap.get(num, 0) + 1
        
        values = []
        for key, val in hashMap.items():
            values.append((key, val))
        
        sortedVal = sorted(values, key=lambda x:x[1], reverse=True)

        for num in sortedVal[:k]:
            result.append(num[0])


        return result