const mergeSort = function(arrA,arrB){
    let singleSortted = [];
    while (arrA.length && arrB.length) {
        if (arrA[0] < arrB[0]) {
            singleSortted.push(arrA[0]);
            arrA.shift();
        } else {
            singleSortted.push(arrB[0]);
            arrB.shift();
        }
    }
    return singleSortted.concat(arrA, arrB);
}

let arrA = [1,3,2,4,5,7,9,8,6];
let arrB = [11,13,15,17,12,16,18,19];
console.log(mergeSort(arrA,arrB));