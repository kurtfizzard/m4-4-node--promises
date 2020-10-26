// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  // the request will be determined by a language code
  return (
    request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
      .then((response) => {
        return JSON.parse(response);
      })
      // return the entire data object in the parsed response
      .then((parsedResponse) => {
        return parsedResponse.data;
      })
      .catch((err) => console.log("Error: ", err))
  );
};

// Testing
greeting("fr").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
