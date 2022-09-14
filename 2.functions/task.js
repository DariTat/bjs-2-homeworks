// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for(i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = [0, 0]; 

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      sum[i] += arr[i][j];
    }
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
 
  for (let i = 0; i < arrOfArr.length; i++){
    if (max < func(arrOfArr)[i]){
      max = func(arrOfArr)[i];
    }
  }
  console.log(max);
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, diff;
  diff = [0, 0];

  for(let i = 0; i < arr.length; i++){
    min = Infinity;
    max = -Infinity;
    for(let j = 0; j < arr[i].length; j++){
      if (arr[i][j] < min){
        min = arr[i][j];
      }
      if(arr[i][j] > max){
        max = arr[i][j];
      }
      diff[i] = Math.abs(max - min); 
    }
  }
  return diff;
}
