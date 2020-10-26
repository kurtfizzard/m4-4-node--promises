// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "985b53e437d84cf4afcced8146c75121",
    q: lat,
    lng,
  };

  // return ...

  return opencage.geocode(requestObj).then((data) => data.results[0].formatted);
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
