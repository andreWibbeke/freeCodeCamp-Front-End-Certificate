//https://www.freecodecamp.com/challenges/no-repeats-please

/*jshint esversion: 6 */

function permAlone(str) {
  var n = str.length;
  var perms = [];
  var temp, arr;
  var regExp = /(.)\1+/;

  function swaps(str, start) {
    if (start === n - 1)
      perms.push(str);
    else {
      for (var i = start; i < n; i++) {
        arr = str.split("");
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        swaps(arr.join(""), start + 1);
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
      }
    }
  }
  swaps(str, 0);
  return perms.filter(el => !regExp.test(el)).length;
}
