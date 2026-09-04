class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let rob1 = 0, rob2 = 0;

        for(let i = 0; i < nums.length; i++) {
            let temp = Math.max(nums[i] + rob1, rob2);
            rob1 = rob2
            rob2 = temp;
        }

        return rob2;
    }
}
