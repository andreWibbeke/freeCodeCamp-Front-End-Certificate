//https://www.freecodecamp.com/challenges/symmetric-difference

/*jshint esversion: 6 */
//Using Arrow functions

//Refactored version:
function sym(params) {
  var args = Array.prototype.slice.call(arguments); //turn arguments object into an Array
  return args.reduce((a, b) =>
    a.filter(el => !b.includes(el)).concat(b.filter(el => !a.includes(el))))
      .filter((el, i, arr) => arr.indexOf(el) === i)
        .sort((a, b) => a - b); //sort is actually not necessary to pass the test
}

//Inital version:
function sym(params) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => {
    //remove dubplicates from b first (not a because you provide '[]' as inital value)
    var testArr = [];
    b = b.filter(el => {
      if (!testArr.includes(el)) {
        testArr.push(el);
        return el;
      }
    });
    return a.filter(el => !b.includes(el)).concat(b.filter(el => !a.includes(el)));
  }, []).sort((a, b) => a - b);
}
