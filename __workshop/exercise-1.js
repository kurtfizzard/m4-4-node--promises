// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  const isStrings = array.every((element) => typeof element === "string");
  return new Promise((resolve, reject) => {
    if (isStrings) {
      const allCapsArray = array.map((word) => {
        return word.toUpperCase();
      });
      resolve(allCapsArray);
    } else {
      reject("The array contains an element that is not a string.");
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) =>
    !array ? reject("Can not sort this array.") : resolve(array.sort())
  );
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
