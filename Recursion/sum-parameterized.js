const sum = (i,total) =>{
    if(i < 1){
        console.log("Sum: ",total)
        return
    }
    sum(i-1, total+i);
}
sum(5,0);