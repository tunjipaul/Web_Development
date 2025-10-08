// // // //Javascript Object (actual object in memory!)

// // // let person = {
// // //     name: "Alice",
// // //     age: 25,
// // //     city: "Lagos"
// // // };

// // // console.log("Javascript Object:", person);
// // // console.log("Type:", typeof person); //"object"
// // // console.log("Can access:", person.name); //"Alice"

// // // //JSON (String representation)

// // // let personJSON = '{"name": "Alice", "age": 25, "city": "Lagos"}';

// // // console.log("JSON string:", personJSON);
// // // console.log("Type:", typeof personJSON); //"string"

// // // //console.log(personJSON.name); //undefined - it's just text!

// // // //key differences: objects are usable data. JSON is text that looks like an object.

// // // //converting between objects and JSON.

// // //json.stringify() - object to KSON.

// // //convert Javascript object to JSON String.

// // // let menuItem = {
// // //     id: 1,
// // //     name: "Latte",
// // //     price: 4.50,
// // //     category: "Drinks",
// // //     available: true
// // // };

// // // //convert to JSON.
// // // let jsonString = JSON.stringify(menuItem);

// // // console.log("Original Object:", menuItem);
// // // console.log("JSON String:", jsonString);
// // // console.log("Type of JSON:", typeof jsonString);

// // // //JSON is perfect for sending to servers.

// // // console.log("\nSending to Server:", jsonString);

// // // // JSON.parse() - JSON to object

// // // //convert JSON string to Javascript object.

// // // let jsonFromServer = '{"id":2, "name": "Sandwich", "price":"8.00", "available": true}';

// // // console.log("JSON from Server:", jsonFromServer);

// // // console.log("\nParsed Object:", menuItem);
// // // console.log("JSON String:", jsonString);
// // // console.log("Type of JSON:", typeof jsonString);

// // // //JSON is perfect for sending to servers.
// // // console.log("\nSending to Server:", jsonString);

// // // JSON.parse() - JSON to Object

// // //convert JSON string to Javascript object
// // let jsonFromServer = '{"id":2, "name": "sandwich", "price": 8.00, "available": true}';

// // console.log("JSON from Server:", jsonFromServer);
// // console.log("Type:", typeof jsonFromServer);
// // //parse it back to the object.

// // let menuItem = JSON.parse(jsonFromServer);

// // console.log("\nParsed Object:", menuItem)
// // console.log("Type:", typeof menuItem);
// // console.log("Can use it now:", menuItem.name); //"Sandwich"
// // console.log("Price:", menuItem.price); //8.00

// // //Pretty-Printing JSON.

// // let order = {
// //     orderId: 12345,
// //     customer: "Bob Smith",
// //     items: ["Coffee", "Sandwich"],
// //     total: 12.50
// // };

// // //compact JSON (one line)

// // let compact = JSON.stringify(order);
// // console.log("Compact:", compact);

// // //Pretty JSON (readable with indentation)

// // let pretty = JSON.stringify(order, null, 4);
// // console.log("\nPretty:\n", pretty);

// ❌ Single quotes (must use double quotes)
let invalid1 = '{"name": "Coffee"}';
console.log(invalid1);

// ❌ Trailing comma
let invalid2 = '{"name": "Coffee", "price": 3.50,}';
console.log(invalid2);

let invalid3 = '{name: "Coffee"}';
console.log(invalid3)

//undefined values.
let invalid4 = '{"name": "Coffee", "value": undefined}';

//Functions.
let invalid5 = '{"name": "Coffee", "prepare": function(){}}';

//Test Parsing

try{
    JSON.parse(validJSON);
    console.log("Valid JSON parsed successfully!");
}catch(error){
    console.log("Error:", error.message);
}

try{
    JSON.parse(invalid1);
}catch(error){
    console.log('Invalid JSON error:', error.message);
}