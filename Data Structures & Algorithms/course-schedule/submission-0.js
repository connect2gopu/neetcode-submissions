class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preMap = new Map()
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i, [])
        }
        for (let [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre)
        }


        const visited = new Set();

        const dfs = (crs) => {
            if(visited.has(crs)){
                return false
            }

            if(preMap.get(crs).length == 0) {
                return true;
            }

            visited.add(crs);
            for(let pre of preMap.get(crs)) {
                if(!dfs(pre)){
                    return false
                }
            }

            preMap.set(crs,[]);
            visited.delete(crs);
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)){
                return false
            }
        }
        return true;
    }
}
