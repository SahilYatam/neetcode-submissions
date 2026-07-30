class Solution {
public:
    int maxArea(vector<int>& heights) {
        int ans = 0, left = 0, right = heights.size()-1;

        while(left < right){
            int width = right - left;
            int curr_heigth = min(heights[left], heights[right]);
            
            int max_area = curr_heigth * width;
            ans = max(ans, max_area);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return ans;
    }
};
