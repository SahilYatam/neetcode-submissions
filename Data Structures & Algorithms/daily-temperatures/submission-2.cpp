class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        stack<pair<int, int>> stk;
        vector<int> ans(temperatures.size());

        for(int i = 0; i < temperatures.size(); i++){
            
            while(!stk.empty()){
                pair<int, int> top = stk.top();

                if(temperatures[i] <= top.first){
                    break;
                }

                int warmDay = i - top.second;
                ans[top.second] = warmDay;

                stk.pop();
            }
            
            stk.push({temperatures[i], i});
        }

        return ans;
    }
};
