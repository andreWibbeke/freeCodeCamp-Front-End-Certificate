//https://www.freecodecamp.com/challenges/validate-us-telephone-numbers

function telephoneCheck(str) {
  //using non-capturing groups here (no need to recall the matched substr)
  var phoneNumber = /^(?:1 ?)?(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/g;
  return phoneNumber.test(str);
}
