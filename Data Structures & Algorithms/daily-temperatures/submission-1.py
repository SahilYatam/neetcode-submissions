class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        stack = []
        ans = [0]*n

        for i in range(n):

            while len(stack) != 0:
                top = stack[-1]

                if temperatures[i] <= top[0]:
                    break
                
                warmDay = i - top[1]
                ans[top[1]] = warmDay

                stack.pop()
            
            stack.append((temperatures[i], i))

        return ans