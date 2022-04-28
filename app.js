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

filter("ry");

// Count
function count(array) {
  let numb = 0;
  array.map(() => numb++);
  return numb;
}

function updateData() {
  data.map((element) => {
    element.name = `${element.name} [${count(element.people)}]`;

    element.people.map((people) => {
      people.name = `${people.name} [${count(people.animals)}]`;
    });
  });
}

updateData();
