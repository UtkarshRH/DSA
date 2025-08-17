// QUE: Given an array arr[], the goal is to compute its prefix sum array. The prefix sum array, prefixSum[], should be of the same length as arr[], where each element prefixSum[i] represents the sum of all elements from the start of the array up to index i, i.e., prefixSum[i] = arr[0] + arr[1] + .... + arr[i].

class Solution {
    prefSum(arr) {
       let n = arr.length;
       let preFixSum = new Array(n);
       
       preFixSum[0] = arr[0];
       
       for(let i=1; i<n; i++){
           preFixSum[i] = preFixSum[i-1]+arr[i];
       }
       return preFixSum
    }
}