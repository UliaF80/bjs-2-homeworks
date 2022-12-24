"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    let d = b**2-4*a*c;

  if (d > 0) {
     let x1 = (-b + Math.sqrt(d)) / (2*a);
     let x2 = (-b - Math.sqrt(d)) / (2*a);
     arr = [x1, x2];

  }  else if (d == 0) {
     let x1 = -b / (2*a);
     arr = [x1];
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }
  if (isNaN(contribution)) {
     return false;
  }
  if (isNaN(amount)) {
     return false;
  }
  if (isNaN(countMonths)) {
     return false;
  }

  let bobyCredit = 0;

  let newPercent = percent/100/12;
  if (contribution) {
    bobyCredit = amount-contribution;
  } else {
    bobyCredit = amount;
  }

  let monthlyPayment =
    bobyCredit*(newPercent+(newPercent / ((1+newPercent)**countMonths-1)));
  let totalAmount =
  Number((monthlyPayment*countMonths).toFixed(2));
   
    return totalAmount;

}