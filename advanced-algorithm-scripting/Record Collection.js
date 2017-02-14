//https://www.freecodecamp.com/challenges/record-collection

function updateRecords(id, prop, value) {
  //making use of the fact, that every value is treated as "truthy" as long as it isn't "falsey"
  //instead of having large conditions using logical operators, I'm using a more readable, simple if/else logic
  if (value) {
    if (prop == "tracks") {
      //alternate, more "explicit" expression: if (collection[id].hasOwnProperty(prop))
      if (collection[id][prop])
        collection[id][prop].push(value);
      else
        collection[id][prop] = [value];
    } else
      collection[id][prop] = value;
  } else
    delete collection[id][prop];

  return collection;
}
