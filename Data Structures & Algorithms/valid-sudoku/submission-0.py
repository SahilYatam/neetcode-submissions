class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row = len(board)
        col = len(board[0])

        for i in range(row):
            row_seen = set()
            for j in range(col):
                
                cell = board[i][j]

                if cell == ".":
                    continue
                if cell in row_seen:
                    return False
                
                row_seen.add(cell)

        
        for i in range(row):
            col_seen = set()
            for j in range(col):

                cell = board[j][i]

                if cell == ".":
                    continue
                if cell in col_seen:
                    return False

                col_seen.add(cell)

        
        for start_row in range(0, 9, 3):
            for start_col in range(0, 9, 3):
                box_seen = set()

                for i in range(start_row, start_row + 3):
                    for j in range(start_col, start_col + 3):

                        cell = board[i][j]

                        if cell == ".":
                            continue
                        if cell in box_seen:
                            return False
                        
                        box_seen.add(cell)

        
        return True


















