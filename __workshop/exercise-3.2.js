// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "985b53e437d84cf4afcced8146c75121",
    q: address,
  };

  // return something...
  return opencage.geocode(requestObj).then((data) => data.results[0].geometry);
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
