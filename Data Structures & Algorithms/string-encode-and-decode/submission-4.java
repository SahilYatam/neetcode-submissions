class Solution {

    public String encode(List<String> strs) {
        StringBuilder fullStr = new StringBuilder();

        for(String word : strs){
            fullStr.append(word.length()).append("#").append(word);
        }

        return fullStr;
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();
        int i = 0;

        while(i < str.length()){
            StringBuilder len = new StringBuilder();
            
            while(str.charAt(i) != '#'){
                len.append(str.charAt(i));
                i++;
            }

            int length = Integer.parseInt(len.toString());
            i++;

            result.add(str.substring(i, i+length));

            i+=length;
        }
        return result;
    }
}
