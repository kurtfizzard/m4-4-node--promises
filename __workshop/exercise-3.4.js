// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

const getDistanceFromIss = (address) => {
  // get the position of the ISS
  const positionIss = getIssPosition();
  // get the position of a given address
  const positionAddress = getPositionFromAddress(address);
  // if both promises (all) resolve, return an array of results
  return Promise.all([
    positionAddress,
    positionIss,
    // then call the getDistance function using both positions
  ]).then(([positionAddress, positionIss]) =>
    getDistance(positionAddress, positionIss)
  );
};

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

getDistanceFromIss(
  "5395 Rue Clark, Montreal, Quebec, H2T2V3"
).then((response) => console.log(response));
