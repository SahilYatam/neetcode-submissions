class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let ans = Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++){
            
            while(stack.length !== 0){
                let top = stack.at(-1)

                if(temperatures[i] <= top[0]){
                    break;
                }

                let warmDay = i - top[1]
                ans[top[1]] = warmDay

                stack.pop()
            }

            stack.push([temperatures[i], [i]])
        }

        return ans
    }
}
