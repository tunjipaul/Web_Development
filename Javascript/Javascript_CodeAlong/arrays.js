// shoppingList = ["milk", "egg"]
    
// console.log(shoppingList)

// shoppingList.push("cheese")

// console.log(shoppingList)
// //push addds the elemets to the end, we can add multiple items..
// //push adds it to the end, so we can use unshift to add it to the beginning.

// shoppingList.push("bread", "wine")
// // console.log(shoppingList)

// //pop., used to remove the last item while //shift is used to remove the first item.


// console.log(shoppingList)

// console.log(shoppingList.includes("cheese"))
// console.log(shoppingList.indexOf("egg"))


//summary for array methods.
//.push, add to the back
//.unshift, add to the front
//.shift, remove from the front
//.pop remove from the back
//.includes checks if the item exists in  the array.
//.indexOf checks for the index of the item in the array

// firstThree = shoppingList.slice(0,3); // first three numbers.
// lastTwo = shoppingList.slice(-2); //last two numbers.

// console.log("First Three: ",firstThree, 
//     "Last Two: ", lastTwo)

// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Original fruits:", fruits);

// Remove 3 items starting at index 1
// let removed = fruits.splice(1, 3);
// console.log("Removed items:", removed);
// console.log("After removal:", fruits);
//.splice is used to remove items or multiple items starting from a particular position.

// fruits.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
// console.log("After adding:", fruits);

list = "milk, egg, pot, joy, oil, cheese, orange, kiwi, grape"
// console.log("Original List:", list)
// // remove 1  item at index 2 and 
// splicedItems = list.splice(2, 1, "hypo", "green")
// console.log(splicedItems)
// console.log(list)

// join() - Convert array to string
// let words = ["Hello", "from", "JavaScript"];
// let sentence = words.join(" ");        // Join with spaces
// let csv = words.join(",");             // Join with commas
// console.log("Words array:", words);
// console.log("As sentence:", sentence);
// console.log("As CSV:", csv);

// //.join()- used to join elements in an array together and a returns a string.

// dashedJoin = console.log(words.join(" - "))


// split() - Convert string to array (string method, but creates arrays)
let message = "apple,banana,orange";
let fruitArray = message.split(",");
console.log("String:", message);
console.log("Split into array:", fruitArray);
console.log(list)
arrayedList = list.split(',')
console.log("New Arrayed List ", arrayedList)

// reverse() - Reverse array order (changes original)
let countdown = [1, 2, 3, 4, 5];
console.log("Original countdown:", countdown);
countdown.reverse();
console.log("Reversed countdown:", countdown);

//.reverse(), reverses the order of an array.