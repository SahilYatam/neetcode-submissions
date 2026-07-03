class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}

        for i in range(len(nums)):
            half = target - nums[i]

            if half in lookup:
                return [lookup[half], i]
            
            lookup[nums[i]] = i

        return []