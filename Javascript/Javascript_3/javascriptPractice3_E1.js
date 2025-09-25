//1. shopping List
//an array of shopping items.
let shoppingList = ["milk", "egg", "maggi", "oil", "rodo"];
//adding an item to the end of the list using .push() method in arrays.
let newItem = shoppingList.push("hypo");
console.log(shoppingList);
//removing an item from the front using .shift() method in arrays.
let removedItem = shoppingList.shift();
console.log(shoppingList);
console.log(removedItem);

//display the total number of items.
totalItems = shoppingList.length;
console.log(totalItems);

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Item ${i + 1}: ${shoppingList[i]}`);
}

//2. students grade analyzer.

let grades = []


