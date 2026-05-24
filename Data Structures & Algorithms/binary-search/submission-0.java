class Solution {

    int bs(int[] nums, int i, int j, int target) {
        if(i == j) {
            if(nums[i] == target) {
                return i;
            } else {
                return -1;
            }
        } 
        int mid = i + ((j - i) / 2);

        if(nums[mid] == target) return mid;

        if(target <= nums[mid]) {
            return bs(nums, i, mid, target);
        } else {
            return bs(nums, mid+1, j, target);
        }
    }

    public int search(int[] nums, int target) {

        int size = nums.length;
        if(size == 1 && nums[0] == target){
            return 0;
        } 

        return bs(nums, 0, size-1, target);
    }
}
