Start [] , used=[false,false,false]
 ├── Pick 1 → path=[1] , used=[true,false,false]
 │     ├── Pick 2 → path=[1,2] , used=[true,true,false]
 │     │     └── Pick 3 → path=[1,2,3] , used=[true,true,true] ✅ save
 │     │          Backtrack → pop 3 → path=[1,2] , used=[true,true,false]
 │     └── Pick 3 → path=[1,3] , used=[true,false,true]
 │           └── Pick 2 → path=[1,3,2] , used=[true,true,true] ✅ save
 │                Backtrack → pop 2 → path=[1,3] , used=[true,false,true]
 │           Backtrack → pop 3 → path=[1] , used=[true,false,false]
 │     Backtrack → pop 2 → path=[1] , used=[true,false,false]
 │ Backtrack → pop 1 → path=[] , used=[false,false,false]
 │
 ├── Pick 2 → path=[2] , used=[false,true,false]
 │     ├── Pick 1 → path=[2,1] , used=[true,true,false]
 │     │     └── Pick 3 → path=[2,1,3] , used=[true,true,true] ✅ save
 │     │          Backtrack → pop 3 → path=[2,1] , used=[true,true,false]
 │     └── Pick 3 → path=[2,3] , used=[false,true,true]
 │           └── Pick 1 → path=[2,3,1] , used=[true,true,true] ✅ save
 │                Backtrack → pop 1 → path=[2,3] , used=[false,true,true]
 │           Backtrack → pop 3 → path=[2] , used=[false,true,false]
 │     Backtrack → pop 1 → path=[2] , used=[false,true,false]
 │ Backtrack → pop 2 → path=[] , used=[false,false,false]
 │
 └── Pick 3 → path=[3] , used=[false,false,true]
       ├── Pick 1 → path=[3,1] , used=[true,false,true]
       │     └── Pick 2 → path=[3,1,2] , used=[true,true,true] ✅ save
       │          Backtrack → pop 2 → path=[3,1] , used=[true,false,true]
       └── Pick 2 → path=[3,2] , used=[false,true,true]
             └── Pick 1 → path=[3,2,1] , used=[true,true,true] ✅ save
                  Backtrack → pop 1 → path=[3,2] , used=[false,true,true]
             Backtrack → pop 2 → path=[3] , used=[false,false,true]
       Backtrack → pop 3 → path=[] , used=[false,false,false]
