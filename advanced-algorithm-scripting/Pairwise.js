//https://www.freecodecamp.com/challenges/pairwise

function pairwise(arr, arg) {
  var indicesSum = 0, length = arr.length;

  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if ((arr[i] + arr[j]) === arg) {
        indicesSum += (i + j);
        //invalidate the number at index 'j' used for pairing (only 'j', since 'i' won't be used again anyway)
        arr[j] = NaN;
        //break the loop as soon as a pair is found (no need to keep running)
        break;
      }
    }
  }
  return indicesSum;
}
