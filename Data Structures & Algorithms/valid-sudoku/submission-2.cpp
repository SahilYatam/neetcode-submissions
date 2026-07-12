class Solution {
   public:
    bool isValidSudoku(vector<vector<char>>& board) {
        int row = board.size();
        int col = board[0].size();

        // Check rows
        for (int i = 0; i < row; i++) {
            unordered_set<char> rowSet;
            for (int j = 0; j < col; j++) {
                char cell = board[i][j];

                if (cell == '.') continue;
                if (rowSet.count(cell)) return false;

                rowSet.insert(cell);
            }
        }

        // Check cols
        for (int i = 0; i < row; i++) {
            unordered_set<char> colSet;
            for (int j = 0; j < col; j++) {
                char cell = board[j][i];

                if (cell == '.') continue;
                if (colSet.count(cell)) return false;

                colSet.insert(cell);
            }
        }

        // Check 3x3 box
        for (int start_row = 0; start_row < 9; start_row += 3) {
            for (int start_col = 0; start_col < 9; start_col += 3) {
                unordered_set<char> boxSet;

                for (int i = start_row; i < start_row + 3; i++) {
                    
                    for (int j = start_col; j < start_col + 3; j++) {
                        char cell = board[i][j];

                        if (cell == '.') continue;
                        if (boxSet.count(cell)) return false;

                        boxSet.insert(cell);
                    }
                }
            }
        }

        return true;
    }
};
