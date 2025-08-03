# Sum of first n number using recursion
- will use two approch 
- Parameterized
- functional

# Parameterized:
- You carry the answer (total) as a parameter
- You don’t return anything
- The state is updated through arguments in each call

**Recursion tree**

```
sum(3, 0)
└── sum(2, 3)
    └── sum(1, 5)
        └── sum(0, 6)
            └── logs "Sum: 6"
```

# Functional:
- You don’t pass any accumulated value (no sum or total as parameter).
- Each recursive call returns a value.
- The result is built up through return values like a mathematical expression.

**Recursion tree**
```
sum(3)
├── returns 3 + sum(2)
│   ├── returns 2 + sum(1)
│   │   ├── returns 1 + sum(0)
│   │   │   └── returns 0
│   │   └── returns 1 + 0 = 1
│   └── returns 2 + 1 = 3
└── returns 3 + 3 = 6
```
