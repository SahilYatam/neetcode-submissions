class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> hashMap;
        vector<int> result;

        for(int num : nums){
            hashMap[num]++;
        }

        // store number and freq pair
        vector<pair<int, int>> values;
        for(const auto& pair : hashMap){
            values.push_back(pair);
        }

        // sort by freq (highest first)
        sort(values.begin(), values.end(), 
            [](const pair<int, int>& a, const pair<int, int>& b){
                return a.second > b.second;
            }
        );

        // take first k number
        for(int i = 0; i < k; i++){
            result.push_back(values[i].first);
        }
        
        return result;
    }
};
