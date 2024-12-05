// Assuming this is the global tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stoppropagation and preventdefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is jsonp?"
];

function titleCased() {
  // Iterate over each tutorial in the tutorials array
  return tutorials.map(function(tutorial) {
    // Split the tutorial title into words
    return tutorial
      .split(" ")  // Split by spaces into words
      .map(function(word) {
        // Capitalize the first letter and make the rest lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");  // Join the words back into a single string
  });
}

console.log(titleCased(tutorials));
