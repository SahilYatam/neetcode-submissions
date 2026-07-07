class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let fullStr = "";
        for (let str of strs) {
            fullStr += str.length + "#" + str;
        }

        return fullStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            // Read the length
            let len = "";

            while (str[i] !== "#") {
                len += str[i];
                i++;
            }

            len = Number(len);

            // skip "#"
            i++;

            // Read the word
            result.push(str.slice(i, i + len));

            // Jump to the next encoded string
            i += len;
        }

        return result;
    }
}
