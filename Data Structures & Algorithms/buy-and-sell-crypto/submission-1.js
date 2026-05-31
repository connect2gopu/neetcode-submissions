class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;

        let left = 0;
        let right = 1;

        let maxProfit = 0;

        while (left < n) {
            if(prices[right] > prices[left]) {
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(profit, maxProfit);

            } else {
                left = right;
            }

            right++;
        }

        return maxProfit;

    }
}
