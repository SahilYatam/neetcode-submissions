class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0, left = 0, right = heights.length-1;

        while(left < right){
            let width = right - left
            let curr_height = Math.min(heights[left], heights[right])

            let max_area = curr_height * width
            ans = Math.max(ans, max_area)

            if(heights[left] < heights[right]){
                left++
            } else {
                right--
            }
        }

        return ans
    }
}
