class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().split("").filter(char => /[a-z0-9]/i.test(char)).join('');
        let left = 0, right = str.length -1;

        while(left < right){
            if(str[left] !== str[right]){
                return false
            }
            left++
            right--
        }
        return true
    }
}
