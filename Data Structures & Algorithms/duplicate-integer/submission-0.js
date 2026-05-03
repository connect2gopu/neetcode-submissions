class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set()

        for(let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            if(numSet.has(curr)) {
                return true
            } else {
                numSet.add(curr)
            }
        }

        return false;
    }
}
