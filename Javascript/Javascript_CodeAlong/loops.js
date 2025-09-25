// //for loop.
// //do while loop
// //. while loop
// //. for of loop.
// //. forEach loop.

// // /in loops, there's a code ICI, initialization, condition, increment.

// //count from 1 to 5, 

// // console.log("Count from 1 to 5; ");
// // // here , i= 1 is the initialization stating that i equals 1, and i should be less than or equal to 5 because we are counting to 5, then the increment to count from 1.
// // for (i = 1; i <= 5; i++){
// //      console.log("Count: ", i);
// // }

// //count backwards.
// // console.log("------------")
// // //here, i = 5, i is going to 1, so from 5 to 1, since it is 5 initially, we are counting to 1 and it should stop at 1 and it'll give all values of i between 5 and 1, then the -- is used to decrement it to achieve the condition.
// // for (i = 5; i >= 1; i--){
// //     console.log("Count:", i)
// // }

// //using loops with calculations.
// // console.log("Multiplication table for 3:");
// // for (let i = 1; i <= 10; i++) {
// //     let result = 3 * i;
// //     console.log(`3 × ${i} = ${result}`);
// // }
// //here what happens is that we count firstly from 1- 10, then we multiply each of the result of the count by 3.
// //- so we save a variable for the result to be 3 times the value of count- i from 1 to 10
// // the for loop allows this process to repeat.

// // Loop with different step sizes
// // console.log("Even numbers from 2 to 10:");
// // for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
// //     console.log("Even number:", i);
// // }
// //the increment i+= 2, increases the step by 2 , since na even number.


// // // Loop through an array using index
let colors = ["red", "green", "blue", "yellow"];
console.log("Colors in the array:");
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i + 1}: ${colors[i]}`);
}
// //looping through the array involves setting the array to 0 which is the initial index of the array, then 
// // the condition is to compare it with the length of the array, so it won't be an infinite loop, then increment to count, in step of 1.

// //for of loop and array processing.
// //an easier way to go through array items.
// // console.log("-----------------")
// // for (let color of colors){
// //     console.log("Each Color:", color)
// // }
// // let fruits = ["apple", "banana", "orange", "grape"];

// // console.log("Using traditional for loop:");
// // for (let i = 0; i < fruits.length; i++) {
// //     console.log("I like", fruits[i]);
// // }

// // Processing numbers with for...of
// // let scores = [85, 92, 78, 96, 88];
// // let total = 0;

// // console.log("Calculating average score:");
// // for (let score of scores) {
// //     console.log("Adding score:", score);
// //     total += score;  // Same as: total = total + score
// // }

// // let average = total / scores.length;
// // console.log(`Total: ${total}, Average: ${average.toFixed(3)}`);

// // Using loops with conditions
// // let temperatures = [68, 72, 85, 90, 75, 82, 88];
// // let hotDays = 0;
// // let coldDays = 0;

// // console.log("Analyzing temperatures:");
// // for (let temp of temperatures) {
// //     if (temp >= 85) {
// //         hotDays++;
// //         console.log(`${temp}°F - Hot day!`);
// //     } else if (temp < 70) {
// //         coldDays++;
// //         console.log(`${temp}°F - Cold day!`);
// //     } else {
// //         console.log(`${temp}°F - Nice day!`);
// //     }
// // }

// // console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);

// // // Building new arrays with loops
// // let numbers = [1, 2, 3, 4, 5];
// // let doubled = [];

// // console.log("Doubling each number:");
// // for (let num of numbers) {
// //     let doubledValue = num * 2;
// //     doubled.push(doubledValue);
// //     console.log(`${num} × 2 = ${doubledValue}`);
// // }

// // console.log("Original:", numbers);
// // console.log("Doubled:", doubled);

// // While loop processing array until condition met
// let numbers = [2, 4, 6, 8, 3, 10, 12];
// let i = 0;
// let foundOdd = false;

// // console.log("Looking for first odd number:");
// // while (i < numbers.length && !foundOdd) {
// //     console.log(`Checking ${numbers[i]}...`);
    
// //     if (numbers[i] % 2 === 1) {  // Check if odd
// //         console.log(`Found odd number: ${numbers[i]}`);
// //         foundOdd = true;
// //     } else {
// //         console.log(`${numbers[i]} is even, continuing...`);
// //     }
    
// //     i++;
// // }

// // if (!foundOdd) {
// //     console.log("No odd numbers found!");
// // }

// let number = 1;

// do {
//     console.log("Number is: " + number);
//     number++;
// } while (number <= 3);

// console.log("Loop finished!");

// // Modern array methods that make processing easier
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Original numbers:", numbers);
// console.log(""); // Empty line

// // forEach() - Do something with each element
// console.log("Using forEach to print each number:");
// numbers.forEach(function(number) {
//     console.log("Number:", number);
// });

// console.log(""); // Empty line

// // More concise with arrow function
// console.log("forEach with arrow function:");
// numbers.forEach(number => console.log(`Value: ${number}`));


// // map() - Transform each element and create new array
// console.log("Using map to double each number:");
// let doubled = numbers.map(function(number) {
//     return number * 2;
// });
// console.log("Doubled:", doubled);


// // filter() - Keep only elements that meet condition
// console.log("Using filter to get even numbers:");
// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log("Even numbers:", evenNumbers);

// // Get odd numbers with arrow function
// let oddNumbers = numbers.filter(number => number % 2 === 1);
// console.log("Odd numbers:", oddNumbers);

// // find() - Get first element that meets condition
// let firstBigNumber = numbers.find(number => number > 5);
// console.log("First number > 5:", firstBigNumber);
