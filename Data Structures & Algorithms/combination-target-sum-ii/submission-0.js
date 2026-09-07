class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        let res = []

        candidates.sort((a,b) => a-b)

        const dfs = (i, curr, total) => {
            if(total == target) {
                res.push([...curr])
                return
            }
            
            if(i == candidates.length || total > target) return

            

            if(total + candidates[i] > target) return

            curr.push(candidates[i])
            dfs(i+1, curr, total + candidates[i]);
            curr.pop()

            while(candidates[i+1] == candidates[i] && i+1 < candidates.length) {
                i++;
            }
            dfs(i+1, curr, total);


        }

        dfs(0, [], 0);
        return res;
    }
}
