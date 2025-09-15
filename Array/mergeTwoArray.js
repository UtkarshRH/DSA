content = """# Merge Two Sorted Arrays Without Extra Space

## Problem
You are given two sorted arrays `a[]` (size n) and `b[]` (size m).  
The task is to merge them in-place such that:
- `a[]` contains the first `n` smallest elements,
- `b[]` contains the last `m` largest elements,
- The combined order remains sorted,
- No extra space is used.

---

## Naive Approach (Swap + Re-sort)

### Steps
1. Start with the last element of `a` (`a[n-1]`) and the first element of `b` (`b[0]`).
2. If `a[n-1] > b[0]`, swap them.
3. Re-sort `a` and `b` individually to restore order.
4. Repeat steps 1–3 until `a[n-1] <= b[0]`.
5. Final arrays `a` and `b` are correctly partitioned.

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
