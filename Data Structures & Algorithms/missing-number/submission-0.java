class Solution {
    public int missingNumber(int[] nums) {
        int size = nums.length;
        int shouldBe = size * (size+1) / 2;

        int currSum = 0;
        for(int i = 0; i < size; i++) {
            currSum += nums[i];
        }

        return shouldBe - currSum;
    }
}
