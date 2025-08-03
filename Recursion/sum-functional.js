const sum = (i) => {
    if(i < 1) return 0;
    const res = i + sum(i-1);
    return res
}
console.log(sum(5))