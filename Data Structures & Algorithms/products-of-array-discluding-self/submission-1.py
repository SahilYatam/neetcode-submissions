class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        answer = [0 for _ in range(len(nums))]

        product = 1
        for i in range(len(nums)):
            answer[i] = product
            product *= nums[i]

        product = 1

        for i in range(len(nums)-1, -1, -1):
            answer[i] *= product
            product *= nums[i]

        return answer