// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// get the code you wrote in 2.2 and paste it here...

const greeting = (langCode) => {
  return (
    request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
      .then((response) => {
        return JSON.parse(response);
      })
      .then((parsedResponse) => {
        return parsedResponse.data;
      })
      // parse the error and return something (just the error object)
      .catch((err) => {
        console.log(err);
        return err.error ? JSON.parse(err.error) : err;
      })
  );
};

// Testing
greeting("xx").then((result) => console.log(result));
