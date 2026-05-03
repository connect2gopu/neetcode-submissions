class Solution {
    public int reverseBits(int n) {
        int res = 0;

        for (int i = 0; i < 32; i++) {
            int bit = (n >> i) & 1;   // mask to isolate just LSB
            res = res | (bit << (31 - i));
        }

        return res;
    }
}
