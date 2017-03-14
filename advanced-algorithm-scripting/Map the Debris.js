//https://www.freecodecamp.com/challenges/map-the-debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbPer, SMA;
  return arr.map(function(element) {
    SMA = (element.avgAlt + earthRadius);
    orbPer = Math.round(2 * Math.PI * Math.sqrt((Math.pow(SMA, 3)) / GM));
    return {
      name: element.name,
      orbitalPeriod: orbPer
    };
  });
}
