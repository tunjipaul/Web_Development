// // // // // //synchronous (blocking) - everything waits.
// // // // // console.log("step 1: start cooking.");

// // // // // //simulate waiting 5 minutes (blocking loop)
// // // // // for (let i = 0; i < 1e10; i++){}

// // // // // console.log("Step 2: food ready");
// // // // // console.log("Step 3: serve customer");

// // // // // // //output
// // // // // // console.log("Step 1: start cooking");
// // // // // // console.log("Step 2: Wait 5 minutes..."); // Website freezes here
// // // // // // console.log("Step 3: Food ready");
// // // // // // console.log("Step 4: Serve customer");
// // // // // console.log("") //empty line
// // // // // // ASYNCHRONOUS (non-blocking) - Life continues while waiting
// // // // // console.log("Step 1: Start cooking");

// // // // // setTimeout(() => {
// // // // //     console.log("Step 3: Food ready after 5 minutes");
// // // // // }, 5000); // This doesn't freeze the website

// // // // // console.log("Step 2: Serve other customers while waiting");
// // // // // console.log("Step 4: Take more orders");

// // // // // //a cllback is a function you pass to another to be called latter.

// // // // //simple cal back examples.
// // // // function greetUser(name, callback){
// // // //     console.log("Hello " + name);
// // // //     callback(); //call the function that was passed in.
// // // // }

// // // // function sayGoodbye(){
// // // //     console.log("Goodbye!");
// // // // }

// // // // //pass goodbye as a callback ->
// // // // greetUser("Alice", sayGoodbye);

// // // // //callbacks with asynchronous functions.

// // // // //simulate data from a server.

// // // // function getMenuItems(callback){
// // // //     console.log("GETTING MENU ITEMS....");


// // // // //SIMULATE 2 SECOND DELAY.
// // // //  setTimeout(() => {
// // // //     let menuItems = ["Coffee", "Sandwich", "Cake"];
// // // //     callback(menuItems); //call the callback with the data
// // // //  }, 10000);
// // // // }
// // // //  //use the function.
// // // //  getMenuItems(function(items){
// // // //     console.log("Got menu items:", items);
// // // //  });

// // // //  console.log("doing other things while waiting...");


// // // //real cafe example.

// // // //simulate order processing with callbacks.

// // // // function placeOrder(orderDetails, successCallback, errorCallback){
// // // //  console.log("Processing Order:", orderDetails)


// // // // setTimeout(() =>{
// // // // //simulate success or failure
// // // // let orderSuccessful = Math.random() > 0.2; //80% success rate,
// // // // if (orderSuccessful) {
// // // //     successCallback({
// // // //         orderId: 12345,
// // // //         message: "Order placed successfully!"
// // // //     });
// // // // }else{
// // // //     errorCallback("Payment failed. Please try again!");
// // // // }
// // // // }, 2000);

// // // // }

// // // // //use the function.
// // // // placeOrder(
// // // //     {item: "latte", quantity: 2},
// // // //     function(result){
// // // //         console.log("Success:", result.message);
// // // //         console.log("Order ID:", result.orderId);
// // // //     },
// // // //     function(error){
// // // //         console.log("Error", error);
// // // //     }
// // // // );
// // // //callbacks are simple but can get messy with multiple callbacks called "callback hell!"

// // // //promises a better way.
// // // //promises reprents a future value, it's like a receipt - you don't have your food yet but you have a promise it will come.
// // // //a promise can be pending - waiting for the result, fulfilled- got the result successfully, rejevted - something went wrong.

// // // // //creating a promise.

// // // // //create a simple promise.

// // // // let myPromise = new Promise(function(resolve, reject){
// // // //     let success = true;

// // // //     if(success){
// // // //         resolve("Operation successful!"); //promise fulfilled.
// // // //     }
// // // //     else{
// // // //         reject("Operation failed!") //promsie rejected!
// // // //     }
// // // // });

// // // // //use the promise.
// // // // myPromise
// // // // .then(function(result){
// // // //     console.log("Success:", result);
// // // // })
// // // // .catch(function(error){
// // // //     console.log("Error:", error);
// // // // });

// // // // //pizza order example.

// // // // let pizzaOrder = new Promise((resolve, reject) =>{
// // // //   let ovenWorking = false; //try changing this to false;

// // // //   if(ovenWorking){
// // // //     resolve("Your pizza is ready"); //fulfilled
// // // //   }else{
// // // //     reject("Sorry, the oven broke") //rejected
// // // //   }
// // // // });

// // // // //use the promise
// // // // pizzaOrder
// // // // .then(message =>{
// // // //     console.log("Success:", message);
// // // // })
// // // // .catch(error =>{
// // // //     console.log("Error:", error);
// // // // });

// // // //promise with delay.
// // // function getMenuItems(){
// // //     return new Promise(function(resolve, reject){
// // //         console.log("Fetching menu items...");
// // //         setTimeout(() =>{
// // //             let menuItems = ["coffee", "sandwich", "cake"];
// // //             resolve(menuItems); //success!
// // //         }, 2000);
// // //     });
// // // }

// // // //use the promise.
// // // getMenuItems()
// // // .then(function(items){
// // //     console.log("Got items:", items);
// // // })
// // // .catch(function(error){
// // //     console.log("Error:", error);
// // // });

// // // console.log("This runs while waiting...");


// // // //async/await - the easiest way!

// // //async makes asynchronous code look like regular synchronous code. it's built on top of promises but much easier to read!

// // //basic async/await.

// // //function that returns a promise.

// // // function getMenuItems(){
// // //     return new Promise((resolve) => {
// // //         setTimeout(() =>{
// // //             resolve(["Coffee", "Sandwich", "Cake"]);
// // //         }, 2000);
// // //     });
// // // }

// // // //traditional promise way!!

// // // getMenuItems().then(items => {
// // //     console.log("Items:", items);
// // // });

// // // //async/await way (cleaner!)

// // // async function displayMenu(){
// // //     console.log("Fetching Menu...");
// // //     let items = await getMenuItems(); //wait for the promise!
// // //     console.log("Items:", items);
// // // }

// // // displayMenu();

// // //the await keyword makes javascript wait for the promise to finish before continuing.

// // //multiple async operations. 
// // function getMenuItems(){
// //     return new Promise((resolve) =>{
// //       setTimeout(() => resolve(["Coffee", "sandwich"]), 1000);
// //     });
// // }

// // function checkStock(items){
// //     return new Promise((resolve) => {
// //         setTimeout(() => resolve({items, inStock: true}), 1000);
// //     });
// // }

// // function calculatePrice(stockInfo){
// //     return new Promise((resolve) =>{
// //         setTimeout(() => resolve({...stockInfo, total: 12.50}), 1000);
// //     });
// // }

// // //using async/await - much cleaner!

// // async function processOrder(){
// //     console.log("Starting Over...");
// //     let items = await getMenuItems();
// //     console.log("Got items:", items);

// //     let stockInfo = await getMenuItems();
// //     console.log("Checked stock:", stockInfo);

// //     let finalOrder = await calculatePrice(stockInfo);
// //     console.log("Final Order:", finalOrder);

// //     return finalOrder;
// // }

// // //call the async function 
// // processOrder();

// //error handling with try/catch

// function placeOrder(orderDetails){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             let success = Math.random() > 0.3;
//             if(success){
//                 resolve({orderId: 12345, status: "confirmed"});
//             }else{
//                 reject("Payment failed");
//             }
//         }, 2000);
//     });
// }

// async function submitOrder(){
//     try{
//         console.log("Placing order...");
//         let result = await placeOrder({item: "Latte"});
//         console.log("Success! Order ID:", result.orderId);
//     }catch(error){
//         console.log("Error:", error);
//     }
// }
// submitOrder();

// //try/catch works just like regular error handling - much simpler than promise.catch()!