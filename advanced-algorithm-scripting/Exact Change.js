//https://www.freecodecamp.com/challenges/exact-change

/*jshint esversion: 6 */

//Refactored version:
function checkCashRegister(price, cash, cid) {
  //declare and initialize variables
  var change = Math.round((cash - price) * 100);
  var value = 0;
  var changeRecord = [];
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //helper function to check if sufficient cash for change is in the drawer
  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  //Actual program/control flow starts here
  if (enoughFund(cid) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid) === change)
    return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value)
        changeRecord.push([cid[i][0], value]);
    }
  }
  //divide each array by 100 to display a proper money format
  changeRecord.forEach(el => el[1] = (el[1] / 100));
  return changeRecord;
}


//Initial version:
//representing currency as integers due to floating point number issues
var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

//helper function to check if sufficient cash for change is in the drawer
function enoughFund(drawer, change) {
  var sum = drawer.filter((el, i) => currency[i] < change);
  return sum.reduce((a, b) => {
    return a + b[1];
  }, 0);
}

function checkCashRegister(price, cash, cid) {
  var change = Math.round((cash - price) * 100);
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //create array locally (for reset after each function call) to internally keep track of amount of each currency unit we give back as change
  var changeRecord = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];

  if (enoughFund(cid, change) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid, change) === change)
    return "Closed";
  else {
    while (change > 0) {
      //traverse cid from right to left
      for (var i = cid.length - 1; i > -1; i--) {
        if (cid[i][1] > 0 && change >= currency[i]) {
          change -= currency[i];
          cid[i][1] -= currency[i];
          changeRecord[i][1] += currency[i];
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
