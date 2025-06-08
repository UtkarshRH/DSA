// Leet code Problem: Contains Duplicate II 219
// explaination : link : https://docs.google.com/document/d/1kELUzjkwjUhgq0_O9DhP_dXSmkR9HFgx2PPEyUaTMqU/edit?tab=t.0

// public class containDuplicate {

//     public static boolean duplicateChecker(int[] nums, int k) {
//         int n = nums.length;
//         for (int i = 0; i < n; i++) {
//             for (int j = i + 1; j <= i + k && j < n; j++) {
//                 if (nums[i] == nums[j]) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     public static void main(String[] args) {
//         int[] nums = { 1, 2, 3, 1 };
//         int k = 3;
//         boolean res = duplicateChecker(nums, k);
//         System.out.println(res);
//     }
// }

// TC: O(n*k)
// SC: O(1)

// will solve the problem using the HashMap approach and use adv forloop to reduce the time complexity

import java.util.HashMap;

public class duplicateUsingHashmap {
    public static boolean duplicateChecker(int[] nums, int k) {
        HashMap<Integer, Integer> Map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];

            // check if the number is already in the map
            if (Map.containsKey(num)) {
                // check if the distance between the indices is less than or equal to k
                if (i - Map.get(num) <= k) {
                    return true;
                }
            }
            // update the index of the number in the map
            Map.put(num, i);
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 1 };
        int k = 3;
        boolean res = duplicateChecker(nums, k);
        System.out.println(res);
    }

}

// TC: O(n)
// SC: O(n)