//https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
  var arr = firstAndLast.split(" ");
  var firstName = arr[0];
  var lastName = arr[1];
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(firstAndLast) {
    var arr = firstAndLast.split(" ");
    firstName = arr[0];
    lastName = arr[1];
  };
};
