class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < tokens.length; i++) {
            if (tokens[i].equals("+")) {
                int fEle = stack.pop();
                int sEle = stack.pop();

                stack.push(sEle + fEle);
            } else if (tokens[i].equals("-")) {
                int fEle = stack.pop();
                int sEle = stack.pop();

                stack.push(sEle - fEle);
            } else if (tokens[i].equals("*")) {
                int fEle = stack.pop();
                int sEle = stack.pop();

                stack.push(sEle * fEle);
            } else if (tokens[i].equals("/")) {
                int fEle = stack.pop();
                int sEle = stack.pop();

                stack.push(sEle / fEle);
            } else {
                int num = Integer.parseInt(tokens[i]);
                stack.push(num);
            }
        }

        return stack.peek();
    }
}
