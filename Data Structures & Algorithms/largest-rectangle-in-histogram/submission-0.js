class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        let stack = []

        for(let i = 0; i < heights.length; i++){
            let h = heights[i]
            let start = i

            while(stack.length !== 0 && stack.at(-1)[1] > h){
                let [idx, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - idx))

                start = idx
            }
            
            stack.push([start, h])
        }

        for(let [idx, h] of stack){
            maxArea = Math.max(maxArea, h * (heights.length - idx))
        }

        return maxArea
    }
}
