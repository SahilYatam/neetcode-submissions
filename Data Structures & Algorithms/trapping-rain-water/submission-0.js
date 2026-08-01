class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;

        let leftMax = new Array(n);
        let rightMax = new Array(n);

        leftMax[0] = height[0];
        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        rightMax[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        let ans = 0;

        for (let i = 1; i < n; i++) {
            let water = Math.min(leftMax[i], rightMax[i]) - height[i];

            if (water > 0) {
                ans += water;
            }
        }

        return ans;
    }
}
