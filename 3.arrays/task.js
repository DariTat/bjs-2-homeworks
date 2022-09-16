function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    result = arr1.every((n,i) => n === arr2[i]); // boolean
    return result;
  } else {
    result = false;
    return result;
  }
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(element => Math.sign(element) === 1).filter(element => element % 3 === 0).map(element => element*10);

  return resultArr; // array
}
