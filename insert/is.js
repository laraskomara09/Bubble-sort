var ar = [1,3,2,4,6,5];

function insertionShort(ar){
    var i, j, k, val, lim = ar.length;

    for(i=1; i<lim; ++i){
        val = ar[j=i]; k = j-1;
        while (j && ar[k] > val) ar[j--] = ar[k--];
        ar[j] = val;
    }
    return ar;
}
console.log(insertionShort(ar));