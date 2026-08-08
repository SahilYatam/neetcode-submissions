class Solution {
public:
    bool isValid(string s) {
        stack<char> bucket;
        unordered_map<char, char> map;
        map['}'] = '{';
        map[']'] = '[';
        map[')'] = '(';

        for(char ch : s){
            if(map.find(ch) != map.end()){
                if(bucket.empty()){
                    return false;
                }

                char top = bucket.top();
                bucket.pop();

                if(top != map[ch]){
                    return false;
                }
            } else {
                bucket.push(ch);
            }
        }

        return bucket.empty();
    }
};
