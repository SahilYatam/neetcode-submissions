class Solution:
    def isPalindrome(self, s: str) -> bool:
        st = s.lower()
        st = ''.join(char for char in st if char.isalnum())

        left = 0
        right = len(st) -1

        while left < right:
            if st[left] != st[right]:
                return False
            left += 1
            right -= 1
        
        return True


        