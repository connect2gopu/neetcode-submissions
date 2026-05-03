class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    climbStairs(n) {

        let cache = new Array(n)

    const dfs = (i) => {
        if (i == n) {
            return 1;
        }

        if (i > n) {
            return 0;
        }

        if (cache[i]) {
            return cache[i]
        }

        let path1 = dfs(i + 1)
        let path2 = dfs(i + 2)

        cache[i + 1] = path1
        cache[i + 2] = path2

        return path1 + path2;



    }

    return dfs(0);
    }
}
