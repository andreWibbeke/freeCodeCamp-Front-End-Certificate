//https://www.freecodecamp.com/challenges/pairwise

function pairwise(arr, arg) {
  var indicesSum = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === arg) {
        indicesSum += (i + j);
        //invalidate the number at index 'j' used for pairing (only 'j', since 'i' won't be used again anyway)
        arr.splice(j, 1, arg + 1);
        //break the loop as soon as a pair is found
        break;
      }
    }
  }
  return indicesSum;
}
