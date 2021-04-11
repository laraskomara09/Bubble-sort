var ar = [1,3,2,6,5,7];

function selectionSort(ar){
    var i, j, minIx, minVal;

    for(i=0; i < ar, length; ++i){
        minVal = ar[minIx = i];
    for(j=i+1; j < ar.length; ++j){
        ar[j]<minVal && (minVal =ar[minIx = j]);
        temp = ar[i]; ar[i] = ar[minIx]; ar[minIx] = temp;
    }
    }
    return ar;
}
console.log(selectionSort(ar));