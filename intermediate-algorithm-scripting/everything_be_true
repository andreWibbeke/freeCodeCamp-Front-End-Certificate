//https://www.freecodecamp.com/challenges/everything-be-true

//Shorter version:
function truthCheck(collection, pre) {
  //.every() returns true if the callback function returns a truthy value for every array element; otherwise, false
  //return collection.every(obj => obj[pre]); <-ES6 Arrow function style
  return collection.every(function(obj) {
    //checks if the property value is "truthy" or "falsey"
    return obj[pre];
  });
}


//Inital version:
function truthCheck(collection, pre) {
  for (var obj = 0; obj < collection.length; obj++) {
    //the if statement using || could also be written as two if statements!
    //actually the first expression of the condition is not required
    if (!(pre in collection[obj]) || !collection[obj][pre]) {
      return false;
    }
  }
  return true;
}
