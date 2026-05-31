class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;

        int[] maxArr = new int[n];

        int maxSoFar = Integer.MIN_VALUE;

        for(int i = n-1; i >= 0; i--) {
            int currMax = Math.max(maxSoFar, prices[i]);
            maxSoFar = currMax;
            maxArr[i] = currMax;
        }

        for(int m: maxArr){
            System.out.print(m + " ");
        }

        // System.out.println(maxSoFar);

        int maxProfit = 0;

        for (int i = 0; i < n; i++) {
            maxProfit = Math.max(maxProfit, maxArr[i] - prices[i]);
        }

        return maxProfit;
    }
}
