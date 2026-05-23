/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    public boolean canAttendMeetings(List<Interval> intervals) {

        int size = intervals.size();
        if(size < 2) return true;

        List<Interval> sortedIntervals = new ArrayList(intervals);
        Collections.sort(sortedIntervals, (a,b) -> a.start - b.start);

        for(int i = 1; i < size; i++) {
            if(sortedIntervals.get(i).start < sortedIntervals.get(i-1).end) {
                return false;
            }
        }
        return true;
    }
}
