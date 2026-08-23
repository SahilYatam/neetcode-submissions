class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int maxArea = 0;

        stack<pair<int, int>> stck;

        for (int i = 0; i < heights.size(); i++) {

            int h = heights[i];

            int start = i;

            while (!stck.empty() && stck.top().second > h) {

                auto [idx, height] = stck.top();

                stck.pop();

                maxArea = max(maxArea, height * (i - idx));

                start = idx;
            }

            stck.push({start, h});
        }

        while (!stck.empty()) {

            auto [idx, h] = stck.top();

            stck.pop();

            maxArea = max(maxArea, h * (static_cast<int>(heights.size()) - idx));
        }

        return maxArea;
    }
};
