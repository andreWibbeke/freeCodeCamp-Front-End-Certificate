function addTogether() {
  //Variable and subroutine declaration (optional, but makes code cleaner)
  var args = arguments;
  var a = args[0];
  var b = args[1];
  function isNum(num) {
    return Number.isInteger(num);
  }

  //Actual program: relies on implicit return of 'undefined'
  //Note: when refactoring I remove curly braces if not required
  if (isNum(a)) {
    if (isNum(b))
      return a + b;
    else if (!b)
      return function(b) {
        if (isNum(b))
          return a + b;
      };
  }
}
