class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)

        leftMax = [0 for _ in range(n)]
        rightMax = [0 for _ in range(n)]

        leftMax[0] = height[0]
        for i in range(n):
            leftMax[i] = max(leftMax[i - 1], height[i])

        rightMax[n - 1] = height[n - 1]
        for i in range(n - 2, 0, -1):
            rightMax[i] = max(rightMax[i + 1], height[i])

        ans = 0
        for i in range(n):
            water = min(leftMax[i], rightMax[i]) - height[i]

            if water > 0:
                ans += water

        return ans
