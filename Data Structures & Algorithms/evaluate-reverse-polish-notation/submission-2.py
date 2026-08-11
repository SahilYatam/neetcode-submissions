class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for i in range(len(tokens)):
            match tokens[i]:
                case "+":
                    fEle = stack.pop()
                    sEle = stack.pop()

                    stack.append(sEle + fEle)
                
                case "-":
                    fEle = stack.pop()
                    sEle = stack.pop()

                    stack.append(sEle - fEle)

                case "*":
                    fEle = stack.pop()
                    sEle = stack.pop()

                    stack.append(sEle * fEle)
                
                case "/":
                    fEle = stack.pop()
                    sEle = stack.pop()
                    ans = math.trunc(sEle / fEle)

                    stack.append(ans)
                
                case _:
                    num = int(tokens[i])
                    stack.append(num)


        return stack[0]