function sayHello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
}

function askHowAreYou(callback) {
  setTimeout(() => {
    console.log("How are you?");
    callback();
  }, 1000);
}

function sayGoodbye(callback) {
  setTimeout(() => {
    console.log("Goodbye");
    callback();
  }, 1000);
}

// Nested callbacks — callback hell
sayHello(() => {
  askHowAreYou(() => {
    sayGoodbye(() => {
      console.log("Conversation ended.");
    });
  });
});
