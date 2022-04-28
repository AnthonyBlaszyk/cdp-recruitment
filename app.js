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

// Count
function count(array) {
  let numb = 0;
  array.map(() => numb++);
  return numb;
}

function updateData() {
  data.map((country) => {
    country.name = `${country.name} [${count(country.people)}]`;

    country.people.map((people) => {
      people.name = `${people.name} [${count(people.animals)}]`;
    });
  });
}

module.exports = {
  filter,
  updateData,
};
