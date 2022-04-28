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
describe("Should return only animals containing the pattern passed as argument", function () {
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

  test("Should print the counts of People and Animals by counting the number of children and appending it in the name", () => {
    const result = filterFunction();

    expect(result).toStrictEqual([]);
  });
});

// Test for the count
describe("Should return only animals containing the pattern passed as argument", function () {
  test("Should print the number next to the name", () => {
    count();

    expect(data[0]).toStrictEqual({
      name: "Dillauti [5]",
      people: [
        {
          name: "Winifred Graham [6]",
          animals: [
            { name: "Anoa" },
            { name: "Duck" },
            { name: "Narwhal" },
            { name: "Badger" },
            { name: "Cobra" },
            { name: "Crow" },
          ],
        },
        {
          name: "Blanche Viciani [8]",
          animals: [
            { name: "Barbet" },
            { name: "Rhea" },
            { name: "Snakes" },
            { name: "Antelope" },
            { name: "Echidna" },
            { name: "Crow" },
            { name: "Guinea Fowl" },
            { name: "Deer Mouse" },
          ],
        },
        {
          name: "Philip Murray [7]",
          animals: [
            { name: "Sand Dollar" },
            { name: "Buzzard" },
            { name: "Elephant" },
            { name: "Xenops" },
            { name: "Dormouse" },
            { name: "Anchovy" },
            { name: "Dinosaur" },
          ],
        },
        {
          name: "Bobby Ristori [9]",
          animals: [
            { name: "Kowari" },
            { name: "Caecilian" },
            { name: "Common Genet" },
            { name: "Chipmunk" },
            { name: "Aardwolf" },
            { name: "Przewalski's Horse" },
            { name: "Badger" },
            { name: "Sand Cat" },
            { name: "Linne's Two-toed Sloth" },
          ],
        },
        {
          name: "Louise Pinzauti [5]",
          animals: [
            { name: "Manta Ray" },
            { name: "Nubian Ibex" },
            { name: "Warbler" },
            { name: "Duck" },
            { name: "Mice" },
          ],
        },
      ],
    });
  });
});
