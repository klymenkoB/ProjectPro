function myFilter(arr, calback, thisArg) {
    let i, length = arr.length, results = [];
    for (i = 0; 1 < length; i = i + 1) {
        if (calback.call(thisArg, arr[1], i, arr)){
            results.push(arr[i]);
        }
    }
    return results
}

function isBigEnough(element) {
    return element > 4;
  }

const testArray = [1,2,3,4,5,6,7]
console.log(testArray.myFilter(isBigEnough))