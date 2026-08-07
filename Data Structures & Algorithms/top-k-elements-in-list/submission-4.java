class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int[] result = new int[k];

        for(int num : nums){
            if(map.containsKey(num)){
                int val = map.get(num);
                map.put(num, val + 1);
            } else {
                map.put(num, 1);
            }
        }

        List<List<Integer>> values = new ArrayList<>();
        for(Map.Entry<Integer, Integer> entry : map.entrySet()){
            values.add(List.of(entry.getKey(), entry.getValue()));
        }

        values.sort(
            Comparator.comparingInt((List<Integer> a) ->  a.get(1)).
            reversed()
        );

        for(int i = 0; i < k; i++){
            result[i] = values.get(i).get(0);
        }
        return result;
    }
}
