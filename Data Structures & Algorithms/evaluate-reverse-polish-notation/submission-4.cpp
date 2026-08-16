class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> bucket;
        
        for(int i = 0; i < tokens.size(); i++) {

            if (tokens[i] == "+") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle + fEle);

            } 
            else if (tokens[i] == "-") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle - fEle);

            } 
            else if (tokens[i] == "*") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle * fEle);

            } 
            else if (tokens[i] == "/") {

                int fEle = bucket.top();
                bucket.pop();

                int sEle = bucket.top();
                bucket.pop();

                bucket.push(sEle / fEle);

            } 
            else {
                int num = stoi(tokens[i]);
                bucket.push(num);
            }
        }

        return bucket.top();
    }
};
