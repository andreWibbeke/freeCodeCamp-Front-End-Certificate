//https://www.freecodecamp.com/challenges/exact-change

/*jshint esversion: 6 */

//representing currency as integers due to floating point number issues
//(as long as floating point numbers are not involved in the computation everything runs smoothly)
var currency = [
  ["PENNY", 1.00],
  ["NICKEL", 5.00],
  ["DIME", 10.00],
  ["QUARTER", 25.00],
  ["ONE", 100.00],
  ["FIVE", 500.00],
  ["TEN", 1000.00],
  ["TWENTY", 2000.00],
  ["ONE HUNDRED", 10000.00]
];
//helper function to check if sufficient cash for change is in the drawer
function enoughFund(drawer, change) {
  var sum = drawer.filter((el, i) => currency[i][1] < change);
  return sum.reduce((a, b) => {
    return a + b[1];
  }, 0);
}

function checkCashRegister(price, cash, cid) {
  var change = Math.round((cash - price) * 100);
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //create array locally (for reset after each function call)
  var changeRecord = [
    ["PENNY", 0.00],
    ["NICKEL", 0.00],
    ["DIME", 0.00],
    ["QUARTER", 0.00],
    ["ONE", 0.00],
    ["FIVE", 0.00],
    ["TEN", 0.00],
    ["TWENTY", 0.00],
    ["ONE HUNDRED", 0.00]
  ];

  if (enoughFund(cid, change) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid, change) === change)
    return "Closed";
  else {
    while (change > 0) {
      for (var i = cid.length - 1; i > -1; i--) {
        if (cid[i][1] !== 0 && change % currency[i][1] === 0) {
          change -= currency[i][1];
          cid[i][1] -= currency[i][1];
          changeRecord[i][1] += currency[i][1];
          break;
        }
      }
    }
  }
  //filter all arrays with no money out and sort the rest in descending order
  changeRecord = changeRecord.filter(el => el[1]).sort((a, b) => b[1] - a[1]);
  //divide each array by 100 for displaying a proper money format
  //remember: .forEach() returns always undefined!
  changeRecord.forEach(el => el[1] = (el[1] / 100));
  return changeRecord;
}
