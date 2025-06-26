let n = 7;
let b = 0;
let ans = "";
for (let i = 0; i < n-2; i += 1) {
    let str = "";
    for (let j = 0; j < b; j += 1) {
        str += " ";
    }
    for (let j = 0; j < n; j += 1) {
        str += "*";
    }
    for (let j = 0; j < (4*n-1)-(n+1+b); j += 1) {
        str += " ";
    }
    for (let j = 0; j < b+1; j += 1) {
        str += "*";
    }
    b += 1;
    ans = ans + str + "\n";
}


for (let k = 0; k < 3; k += 1) {
    let str = "";
    for (let l = 0; l < b; l += 1) {
        str += " ";
    }
    
    if (k == 0) b += 1;
    else if (k == 1) b -= 1;
            
    for (let l = 0; l < n*4-1; l+=1) {
        str += "*";
    }
    ans = ans + str + "\n";
}
    
b -= 1;
for (let i = 0; i < n-2; i+=1) {
    let str = "";
    for (let j = 0; j < b; j+=1) {
        str += " ";
    }
    for (let j = 0; j < n; j+=1) {
        str += "*";
    }
    for (let j = 0; j < (4*n-1)-(n+1+b); j+=1) {
        str += " ";
    }
    for (let j = 0; j < b+1; j+=1) {
        str += "*";
    }
    b -= 1;
    ans = ans + str + "\n";
}

console.log(ans);
