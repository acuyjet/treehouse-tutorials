function gatherNamesOf (arrayOfPeople) {
  return arrayOfPeople.map(function (person) {
    return person.name;
  });
}

module.exports = gatherNamesOf;