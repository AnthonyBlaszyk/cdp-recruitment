// Import data from the 'data.js' file
const dataImport = require("./data");
const data = dataImport.data;

// Filter
function filter(filter) {
  const filteredData = [];

  data.map((element) => {
    const newPeople = [];

    element.people.map((people) => {
      const newAnimals = people.animals.filter((animal) =>
        animal.name.includes(filter)
      );
      newAnimals.length > 0
        ? newPeople.push({ ...people, animals: newAnimals })
        : null;
    });

    newPeople.length > 0
      ? filteredData.push({ ...element, people: newPeople })
      : null;
  });

  return filteredData;
}

function count(data) {
  data.map((country) => {
    country.name = `${country.name} [${country.people.length}]`;
    
    country.people.map((people) => {
      people.name = `${people.name} [${people.animals.length}]`;
      return people
    });
    return country
  });
  return data
}


module.exports = {
  filter,
  count,
};
