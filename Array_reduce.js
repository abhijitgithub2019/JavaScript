let arr = [1,1,2,2,2,3,3];
//o/p: {1:2, 2:3, 3:2}
arr.reduce((a,m)=> {
    if(a[m] === undefined) {
        a[m] = 1;
    } else {
        a[m] = ++a[m];
    }
    return a;
console.log(a);
}, {})
