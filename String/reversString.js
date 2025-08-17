function reverseString(s){
    let rev = "";
    for(let i=s.length-1;i>=0;i--){
        rev+=s[i];
    }
    return rev;
}

reverseString("Coder");