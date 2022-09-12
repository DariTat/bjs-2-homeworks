function solveEquation(a, b, c) {
  let arr = [];
  "use strict";
  let D = Math.pow(b, 2) - 4*a*c;
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr[0] = -b/(2*a);
  } else if (D > 0) {
    arr[0] = (-b + Math.sqrt(D))/(2*a);
    arr[1] = (-b - Math.sqrt(D))/(2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  "use strict";
  
   if(isNaN(percent)){
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
  let d = new Date();
  let month = (date.getFullYear() - d.getFullYear())*12 + ((date.getMonth() + 1) - (d.getMonth() + 1));
  let S = amount - contribution;
  let P = percent/(100*12);
  let payment = S * (P + (P/(Math.pow((1 + P), month) - 1)));
  totalAmount = Number((payment*month).toFixed(2));
  console.log('Общая сумма выплаты - ' + totalAmount);
  return totalAmount;
}
