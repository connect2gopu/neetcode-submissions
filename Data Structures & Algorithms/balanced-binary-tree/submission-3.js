/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    getHeight(root) {
        if (!root) return 0;

        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }

    isBalanced(root) {
        if (!root) return true;

        if(!this.isBalanced(root.left)) return false;
        if(!this.isBalanced(root.right)) return false;

        return Math.abs(this.getHeight(root.left) - this.getHeight(root.right)) < 2
    }
}
