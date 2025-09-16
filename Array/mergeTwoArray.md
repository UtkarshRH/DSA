content = """# Merge Two Sorted Arrays Without Extra Space

## Problem
You are given two sorted arrays `a[]` (size n) and `b[]` (size m).  
The task is to merge them in-place such that:
- `a[]` contains the first `n` smallest elements,
- `b[]` contains the last `m` largest elements,
- The combined order remains sorted,
- No extra space is used.

---

## Efficient Approach (Gap Method)

### Steps
1. Let `gap = ceil((n + m) / 2)`.
2. While `gap > 0`:
   - Compare elements `gap` apart, as if `a` and `b` form one combined array:
     - Compare `a[i]` with `a[i + gap]`
     - Compare `a[i]` with `b[j]`
     - Compare `b[i]` with `b[i + gap]`
   - If any pair is out of order, swap them.
   - After one full pass, reduce `gap = ceil(gap / 2)`.
3. Repeat until `gap = 1`.
4. Arrays `a` and `b` are now merged in-place.

---

# Merge Two Sorted Arrays (Gap Method)

```js
class Solution {
    mergeArrays(a, b) {
        let n = a.length;
        let m = b.length;
        
        function nextGap(gap) {
            if (gap <= 1) return 0;
            return Math.ceil(gap / 2);
        }
        
        let gap = nextGap(m + n);
        while (gap > 0) {
            let i = 0, j = gap; 
        
            while (j < n + m) {
                // case 1: both i and j in a[]
                if (i < n && j < n) {
                    if (a[i] > a[j]) {
                        [a[i], a[j]] = [a[j], a[i]];
                    }
                }
                // case 2: i in a[], j in b[]
                else if (i < n && j >= n) {
                    if (a[i] > b[j - n]) {
                        [a[i], b[j - n]] = [b[j - n], a[i]];
                    }
                }
                // case 3: both i and j in b[]
                else if (i >= n && j >= n) {
                    if (b[i - n] > b[j - n]) {
                        [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
                    }
                }
                i++;
                j++;
            }
            gap = nextGap(gap);
        }
    }
}


## Example Walkthrough (Naive Method)

### Input
a = [1, 5, 9, 10, 15, 20]  
b = [2, 3, 8, 13]

### Steps
- Compare `a[5] = 20` and `b[0] = 2` → swap.  
  `a = [1, 5, 9, 10, 15, 2]`, `b = [20, 3, 8, 13]`  
  Sort → `a = [1, 2, 5, 9, 10, 15]`, `b = [3, 8, 13, 20]`

- Compare `a[5] = 15` and `b[0] = 3` → swap.  
  `a = [1, 2, 5, 9, 10, 3]`, `b = [15, 8, 13, 20]`  
  Sort → `a = [1, 2, 3, 5, 9, 10]`, `b = [8, 13, 15, 20]`

- Compare `a[5] = 10` and `b[0] = 8` → swap.  
  `a = [1, 2, 3, 5, 9, 8]`, `b = [10, 13, 15, 20]`  
  Sort → `a = [1, 2, 3, 5, 8, 9]`, `b = [10, 13, 15, 20]`

- Compare `a[5] = 9` and `b[0] = 10` → correct order. Stop.

### Output
a = [1, 2, 3, 5, 8, 9]  
b = [10, 13, 15, 20]

---

## Complexity
- **Naive approach**: `O((n+m) * log(n) + (n+m) * log(m))` (due to repeated sorting)
- **Gap method**: `O((n+m) * log(n+m))`
- **Space**: `O(1)` (no extra array used)
"""
