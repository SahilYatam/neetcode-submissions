class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        vector<pair<int, int>> pairs;

        for(int i = 0; i < position.size(); i++){
            pairs.push_back({position[i], speed[i]});
        }

        sort(pairs.rbegin(), pairs.rend());

        stack<double> bucket;

        for(auto [p, s] : pairs){
            bucket.push((double)(target - p) / s);

            if(bucket.size() >= 2){
                double fTop = bucket.top();
                bucket.pop();

                double sTop = bucket.top();

                if(fTop > sTop){
                    bucket.push(fTop);
                }
            }
        }

        return bucket.size();
    }
};
