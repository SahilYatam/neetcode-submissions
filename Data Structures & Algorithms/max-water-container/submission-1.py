class Solution:
    def maxArea(self, heights: List[int]) -> int:
        ans, left, right = 0, 0, len(heights)-1

        while left < right:
            width = right - left
            curr_height = min(heights[left], heights[right])

            max_area = curr_height * width
            ans = max(ans, max_area)

            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1

        return ans