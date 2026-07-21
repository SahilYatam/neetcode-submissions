class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashSet = set(nums)
        current = 0
        length = 0
        longest = 0
        
        for num in hashSet:
            if num - 1 in hashSet:
                continue
            
            if num - 1 not in hashSet:
                current = num
                length = 1

                while current + 1 in hashSet:
                    current = current + 1
                    length += 1
            
            if length > longest:
                longest = length

        return longest
        