//https://www.freecodecamp.com/challenges/inventory-update

function updateInventory(curInv, newInv) {
  for (var i = 0; i < newInv.length; i++) {
    var count = 0;
    for (var j = 0; j < curInv.length; j++) {
      if (curInv[j].includes(newInv[i][1])) {
        curInv[j][0] += newInv[i][0];
        count++;
      }
    }
    //If product product already exists, count equals 1 else 0 -> product is added to curInv
    if (count === 0)
      curInv.push(newInv[i]);
  }
  //Return the sorted curInv in alphabetical order by product name
  return curInv.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
    //return a[1].localeCompare(b[1]);
  });
}
