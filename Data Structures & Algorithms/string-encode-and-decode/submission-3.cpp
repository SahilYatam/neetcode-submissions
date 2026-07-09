class Solution {
public:

    string encode(vector<string>& strs) {
        string fullStr = "";

        for(string word: strs){
            fullStr += to_string(word.length()) + "#" + word;
        }

        return fullStr;
    }

    vector<string> decode(string s) {
        vector<string> result;
        int i = 0;

        while(i < s.length()){
            // Read the length
            string len = "";

            while(s[i] != '#'){
                len += s[i];
                i++;
            }

            // Convert the string into int
            int length = stoi(len);

            // skip "#"
            i++;

            // Read the word
            result.push_back(s.substr(i, length));

            // Jump to the Next encoded string
            i += length;
        }

        return result;
    }
};
