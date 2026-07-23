class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> hashSet(nums.begin(), nums.end());
        int currentNum = 0, len = 0, longest = 0;

        for(int num : hashSet){
            if(hashSet.find(num - 1) != hashSet.end()) continue;

            if(hashSet.find(num - 1) == hashSet.end()){
                currentNum = num;
                len = 1;

                while(hashSet.find(currentNum + 1) != hashSet.end()){
                    currentNum = currentNum + 1;
                    len++;
                }
            }

            if(len > longest){
                longest = len;
            }
        }

        return longest;
    }
};
