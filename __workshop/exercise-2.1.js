// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const testGreeting = () => {
  return (
    request("https://journeyedu.herokuapp.com/hello")
      .then((response) => {
        // return the response, parsed (converted to an object)
        return JSON.parse(response);
      })
      // return the text value, inside data, inside the parsed response
      .then((parsedResponse) => {
        return parsedResponse.data.text;
      })
      .catch((err) => console.log("Error: ", err))
  );
};

testGreeting().then((result) => console.log(result));
