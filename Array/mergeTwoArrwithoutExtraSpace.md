# Merge Two Sorted Arrays Without Extra Space (Gap Method)

## Goal
- We have two sorted arrays:
  - `a[]` of size `n`
  - `b[]` of size `m`
- Merge them into sorted order **without extra space**.
- After merge:
  - `a[]` → first `n` smallest elements
  - `b[]` → last `m` largest elements

---

## Algorithm (Gap Method)

### Step 1: Calculate total length
```
total = n + m
```

### Step 2: Initialize the gap
```
gap = ceil(total / 2)
```
- **Gap** = distance between two elements to compare.
- Start with a big gap, then shrink it until it becomes 1.

---

### Step 3: Loop until gap becomes 0
```
while gap > 0:
    i = 0
    j = gap

    while j < total:

        # Case 1: both indices in a[]
        if i < n and j < n:
            if a[i] > a[j]:
                swap a[i], a[j]

        # Case 2: i in a[], j in b[]
        else if i < n and j >= n:
            if a[i] > b[j - n]:
                swap a[i], b[j - n]

        # Case 3: both indices in b[]
        else:
            if b[i - n] > b[j - n]:
                swap b[i - n], b[j - n]

        i = i + 1
        j = j + 1

    # Reduce the gap
    if gap == 1:
        gap = 0
    else:
        gap = ceil(gap / 2)
```

---

## Why This Works
1. **Big gap** pushes larger numbers quickly to the right.
2. **Smaller gaps** refine the order step by step.
3. **Gap = 1** acts like a final bubble sort pass.
4. Result: arrays are merged in sorted order with  
   - Time: `O((n+m) log(n+m))`  
   - Space: `O(1)`

---

## Example

### Input:
```
a = [2, 4, 7, 10]
b = [2, 3]
```

### Process:
- total = 6 → gap = ceil(6/2) = 3
- Compare elements 3 apart and swap if needed
- Reduce gap → 2, then 1
- After each pass arrays become more sorted

### Output:
```
a = [2, 2, 3, 4]
b = [7, 10]
```
