class MinStack {
public:
    vector<int> valStack;
    vector<int> minStack;

    MinStack() {
        
    }
    
    void push(int val) {
        valStack.push_back(val);
        
        if(minStack.size() == 0){
            minStack.push_back(val);
        }
        else if(val < minStack.back()){
            minStack.push_back(val);
        }
        else {
            int topVal = minStack.back();
            minStack.push_back(topVal);
        }
    }
    
    void pop() {
        valStack.pop_back();
        minStack.pop_back();
    }
    
    int top() {
        return valStack.back();
    }
    
    int getMin() {
        return minStack.back();
    }
};
