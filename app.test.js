const dataImport = require("./data");
const data = dataImport.data;

const functions = require("./app");
count = functions.updateData;
filterFunction = functions.filter;

const filteredData = [
  {
    name: "Uzuzozne",
    people: [
      {
        name: "Lillie Abbott",
        animals: [
          {
            name: "John Dory",
          },
        ],
      },
    ],
  },
  {
    name: "Satanwi",
    people: [
      {
        name: "Anthony Bruno",
        animals: [
          {
            name: "Oryx",
          },
        ],
      },
    ],
  },
];

// Test for the filter
describe("Should return only Only animals containing the pattern passed as argument", function () {
  test("Should return the filtered array", () => {
    const result = filterFunction("ry");

    expect(result).toStrictEqual(filteredData);
  });

  test("should return unfiltered data if an empty string is passed", () => {
    const result = filterFunction("");

    expect(result).toStrictEqual(data);
  });

  test("Should return an empty array if the argument is not a string", () => {
    const result = filterFunction({ filter: "ry" });

    expect(result).toStrictEqual([]);
  });

  test("Should return an empty array if no arguments are passed", () => {
    const result = filterFunction();

    expect(result).toStrictEqual([]);
  });
});
