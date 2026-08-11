class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let i = 0; i < tokens.length; i++){
            switch(tokens[i]){
                case "+": {
                    let fEle = stack.pop()
                    let sEle = stack.pop()

                    stack.push(sEle + fEle)
                    break;
                }

                case "-": {
                    let fEle = stack.pop()
                    let sEle = stack.pop()

                    stack.push(sEle - fEle)
                    break;
                }

                case "*": {
                    let fEle = stack.pop()
                    let sEle = stack.pop()

                    stack.push(sEle * fEle)
                    break;
                }

                case "/": {
                    let fEle = stack.pop()
                    let sEle = stack.pop()
                    let ans = Math.trunc(sEle / fEle)

                    stack.push(ans)
                    break;
                }

                default:
                    let num = Number(tokens[i])
                    stack.push(num)

                    break;
            }
        }

        return stack[0]
    }
}
