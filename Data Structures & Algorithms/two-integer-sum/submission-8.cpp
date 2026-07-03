class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> hashMap;

        for(int i = 0; i < nums.size(); i++){
            int half = target - nums[i];

            if(hashMap.find(half) != hashMap.end()){
                return {hashMap[half], i};
            }
            hashMap[nums[i]] = i;
        }
        return {};
    }
};
