// // We use Promises to handle asynchronous operations in a cleaner, more readable, and more manageable way than traditional callback-based code.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 1 completed");
    resolve();
    // resolve() is necessary to show that task is completed succesfully
  }, 1000);
});

promise1.then(() => {
    console.log("success");

})

// **************************************************************

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("some issue in function");
    reject();
    // reject() is necessary to show that there is failure
  }, 1500);
});

promise3.catch(() => {
  console.log("failure");
});

// **************************************************************

const userLoggedInStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isUserLoggedIn = true; // condition is true

    if (isUserLoggedIn) {

      console.log("user is logged in !!!!!!");
      resolve({userName: "saideep", age: 23});
      // Resolve the promise with user data

    } else {

      console.log("user logged in error");
      reject("something went wrong");
      // Reject the promise with an error message

    }
  }, 3000);
});

userLoggedInStatus.then((user) => {
    console.log(user);
}).catch((errMsg) => {
    console.log(errMsg);
})

// *****************************************************************

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 completed"); // resolve()
  }, 1000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 2 completed"); // resolve()
  }, 2000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 completed"); // resolve()
  }, 1500);
});

Promise.all([promis4, promise5, promise6])
  .then((results) => {
    console.log("All promises resolved:");
    console.log(results); // An array of resolved values
  })
  .catch((error) => {
    console.log("One of the promises rejected:", error);
  });

// ********************************************************************